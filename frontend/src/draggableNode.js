// draggableNode.js

export const DraggableNode = ({ type, label,description, color }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
      event.currentTarget.style.cursor = "grabbing";
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{
        cursor: "grab",
        padding: "10px 12px",
        borderRadius: 10,
        background: "#0f172a",
        border: "1px solid #1e293b",
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        transition: "background 0.15s ease, border 0.15s ease",
      }}
        draggable
        onMouseEnter={(e) =>
        (e.currentTarget.style.background = "#020617")
      }
       onMouseLeave={(e) =>
        (e.currentTarget.style.background = "#0f172a")
      }
      >
       <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 13,
          fontWeight: 600,
          flexShrink: 0,
        }}
      >
        {label[0]}
      </div>

      {/* Text */}
      <div>
        <div
          style={{
            color: "#e5e7eb",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {label}
        </div>

        {description && (
          <div
            style={{
              color: color,
              fontSize: 11,
              marginTop: 2,
            }}
          >
            {description}
          </div>
        )}
      </div>
      </div>
    );
  };
  