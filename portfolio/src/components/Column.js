import { useDroppable } from "@dnd-kit/react";
import '../styling/kanban.scss';
function Column({ id, children, className }) {
    const { ref, isDropTarget } = useDroppable({ id });

  return (
    <div className="column">
      <div className="column-header" />

      <div
        ref={ref}
        className="column-body"
        style={{
          minHeight: 200,
          background: isDropTarget ? "rgba(0,0,255,0.05)" : "transparent"
        }}
      >
        {children}
      </div>
    </div>
  );
    }
  
  export default Column;