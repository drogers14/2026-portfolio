import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
    ResponsiveContainer
  } from "recharts";
  import { motion } from "framer-motion";

  function StatusChart({ jobs }) {
    const statusCounts = jobs.reduce((acc, job) => {
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    }, {});
    
    const data = [
      { name: "Applied", value: statusCounts.applied || 0 },
      { name: "Interview", value: statusCounts.interview || 0 },
      { name: "Offer", value: statusCounts.offer || 0 },
      { name: "Rejected", value: statusCounts.rejected || 0 }
    ];

    const total = jobs.length;
    const interviews = statusCounts.interview || 0;
    const offers = statusCounts.offer || 0;
    
    const interviewRate = total ? (interviews / total) * 100 : 0;
    const offerRate = total ? (offers / total) * 100 : 0;

    return (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="widget">
        <h3>Application Funnel</h3>
        <div className="metrics">
  <div className="metric">
    <span>Interview Rate</span>
    <h2>{interviewRate.toFixed(1)}%</h2>
  </div>

  <div className="metric">
    <span>Offer Rate</span>
    <h2>{offerRate.toFixed(1)}%</h2>
  </div>
</div>
        <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar 
  dataKey="value" 
  isAnimationActive={true}
  animationDuration={800}
  radius={[8, 8, 0, 0]}>
    {data.map((entry, index) => (
      <Cell
        key={`cell-${index}`}
        fill={
          entry.name === "Applied"
            ? "#4cc9f0"
            : entry.name === "Interview"
            ? "#f9c74f"
            : entry.name === "Offer"
            ? "#90be6d"
            : "#f94144"
        }
      />
    ))}
  </Bar>
</BarChart>
        </ResponsiveContainer>
      </motion.div>
    );
  }
  
  export default StatusChart;