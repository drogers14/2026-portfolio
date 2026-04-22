import '../styling/kanban.scss';
import { DragDropProvider } from '@dnd-kit/react';

import StatusChart from "./StatusChart";
import KanbanCard from './KanbanCard.js';
import AddJobModal from './AddJobModal.js';
import Column from './Column.js';
import { useState, useEffect } from 'react';

const columns = [
    { key: "applied", label: "Applied" },
    { key: "interview", label: "Interviewing" },
    { key: "rejected", label: "Rejected" },
    { key: "offer", label: "Offer" }
];

function Dashboard() {
    const [editingJob, setEditingJob] = useState(null);

    const handleAddOrEdit = (newJob) => {
        if (newJob.id) {
          // EDIT
          setJobs(prev =>
            prev.map(job =>
              job.id === newJob.id ? newJob : job
            )
          );
        } else {
          // ADD
          setJobs(prev => [
            ...prev,
            { ...newJob, id: Date.now() }
          ]);
        }
      };
    const [jobs, setJobs] = useState(() => {
        const saved = localStorage.getItem("jobs");

        try {
            if (saved) {
                const parsed = JSON.parse(saved);

                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed.map(job => ({
                        ...job,
                        tags: job.tags ?? []
                    }));
                }
            }
        } catch (e) {
            console.warn("Invalid jobs in localStorage, resetting...");
        }

        // fallback seed
        return [
            {
                id: 1,
                companyName: "Netflix",
                positionTitle: "Software Engineer in Test",
                location: "Remote",
                salaryRange: "$120k",
                status: "applied",
                dateApplied: "2026-04-03",
                tags: ["qa", "javascript"]
            }
        ];
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs]);
    useEffect(() => {
        console.log("Dashboard mounted");
    }, []);
    return (
        <div style={{ padding: "40px" }}>
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1>Job Tracker</h1>
                    <p>Coming soon 👀</p>
                    <div className="widgets">
                        <StatusChart jobs={jobs} />
                        {/* future widgets */}
                    </div>

                    <button onClick={() => setShowModal(true)}>+ Add Job</button>

                    {(showModal || editingJob) && (
                        <AddJobModal
                            onClose={() => {
                                setShowModal(false);
                                setEditingJob(null);
                            }}
                            onAdd={handleAddOrEdit}
                            job={editingJob}
                            // onAdd={(job) => setJobs(prev => [...prev, job])}
                        />
                    )}
                </div>
                <DragDropProvider
                    onDragStart={({ source }) => {
                        console.log("START:", source);
                    }}
                    onDragEnd={(event) => {
                        const operation = event.operation;

                        console.log("operation:", operation);

                        const jobId = operation?.source?.id ?? operation?.source;
                        const newStatus = operation?.target?.id ?? operation?.target;

                        console.log("jobId:", jobId);
                        console.log("newStatus:", newStatus);

                        if (!jobId || !newStatus) return;

                        setJobs((prev) =>
                            prev.map((job) =>
                                String(job.id) === String(jobId)
                                    ? { ...job, status: newStatus }
                                    : job
                            )
                        );
                    }}
                >
                    <div className="kanban-board">
                        {columns.map((col) => (
                            <Column key={col.key} id={col.key} className="kanban-column">
                                {/* Header */}
                                <div className="column-header">
                                    <h3>{col.label}</h3>
                                    <span>
                                        {jobs.filter(j => j.status === col.key).length}
                                    </span>
                                </div>

                                <div className="column-body">

                                    {jobs
                                        .filter(job => job.status === col.key)
                                        .map(job => (
                                            <>
                                            <button onClick={() => setEditingJob(job)}>
  Edit
</button>
                                            <KanbanCard key={job.id} id={job.id} {...job} />
                                            </>
                                        ))}
                                </div>
                            </Column>

                        ))}


                    </div>

                </DragDropProvider>

            </div>

            {/* <KanbanCard companyName={"Netflix"} dateApplied={"04-03-2026"} positionTitle={"Software Engineer in Test"}
                location={"Remote"} salaryRange={40} applicationStatus={"applied"} tags={['qa', 'javascript']} /> */}
        </div>
    );

}

export default Dashboard;