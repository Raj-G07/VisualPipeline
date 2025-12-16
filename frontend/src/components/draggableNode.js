// draggableNode.js

export const DraggableNode = ({ type, label,description,Icon, color }) => {
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
         background: "linear-gradient(135deg, rgba(41, 87, 161, 0.2), rgba(25, 7, 70, 0.1))",
        border: "1px solid #1e293b",
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        transition: "background 0.15s ease, border 0.15s ease",
      }}
        draggable
        onMouseEnter={(e) =>{
          e.currentTarget.style.background = "#020617"
          e.currentTarget.style.border = "1px solid #2563eb"  
        }
      }
       onMouseLeave={(e) => {
         e.currentTarget.style.background = "linear-gradient(135deg, rgba(41, 87, 161, 0.2), rgba(25, 7, 70, 0.1))"
         e.currentTarget.style.border = "1px solid #1e293b"
        }
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
        <Icon/>
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
  