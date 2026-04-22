import '../styling/kanban.scss';
import {useDraggable} from '@dnd-kit/react';

function KanbanCard({ id, companyName, dateApplied, positionTitle, location, 
    salaryRange, applicationStatus, tags=[] }) {
        const { ref } = useDraggable({
            id: String(id),
          });
        
    return (
<div ref={ref} className={`kanban-card ${applicationStatus}`}>
      
      <div className="card-header" >
        
        <h3>{companyName}</h3>
        <p className="role">{positionTitle}</p>
      </div>

      <div className="card-meta">
        {location && <span>📍 {location}</span>}
        {salaryRange && <span>💰 {salaryRange}</span>}
      </div>

      <div className="card-footer">
        <span className="date">📅Date Applied {dateApplied}</span>

        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>

    </div>
    );
}

export default KanbanCard;