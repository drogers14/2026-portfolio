import { useState } from 'react';
import '../styling/kanban.scss'

function AddJobModal({ onClose, onAdd, job }) {
  const [tagInput, setTagInput] = useState("");
  // const [tags, setTags] = useState([]);
  const addTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags(prev => [...prev, tagInput.trim()]);
      setTagInput("");
    }
  };
  const [form, setForm] = useState({
    companyName: job?.companyName || "",
    positionTitle: job?.positionTitle || "",
    status: job?.status || "applied",
    dateApplied: job?.dateApplied || new Date().toISOString().split("T")[0],
    location: job?.location || "",
    salaryRange: job?.salaryRange || ""
  });
  
  const [tags, setTags] = useState(job?.tags || []);

  const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.companyName || !form.positionTitle) return;

  onAdd({
    ...form,
    tags,
    id: job?.id // 👈 keeps same id if editing
  });

  onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Add Job</h2>

        <input
          name="companyName"
          placeholder="Company"
          value={form.companyName}
          onChange={handleChange}
          autoFocus
        />

        <input
          name="positionTitle"
          placeholder="Role"
          value={form.positionTitle}
          onChange={handleChange}
        />

        <select name="status" value={form.status} onChange={handleChange}>
          <option value="applied">Applied</option>
          <option value="interview">Interviewing</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>

        <input
          type="date"
          name="dateApplied"
          value={form.dateApplied}
          onChange={handleChange}
        />

        <button onClick={() => setShowMore(!showMore)}>
          + More details
        </button>

        {showMore && (
          <>
            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
            />

            <input
              name="salaryRange"
              placeholder="Salary"
              value={form.salaryRange}
              onChange={handleChange}
            />
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={addTag}
              placeholder="Add tag (press Enter)"
            />
            <div className="tag-list">
              {tags.map((tag, i) => (
                <span key={i} className="tag-chip">
                  {tag}
                  <button onClick={() =>
                    setTags(tags.filter((_, idx) => idx !== i))
                  }>
                    ×
                  </button>
                </span>
              ))}
            </div>
          </>
        )}

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Add Job</button>
        </div>
      </div>
    </div>
  );
}

export default AddJobModal;