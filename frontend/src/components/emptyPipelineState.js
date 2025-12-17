import { Network } from "lucide-react";

export const EmptyPipelineState = () => {
  return (
    <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "28rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(41, 87, 161, 0.2), rgba(32, 10, 83, 0.1))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <Network
                  style={{
                    width: "2rem",
                    height: "2rem",
                    color: "rgb(59,130,246)",
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  background: "linear-gradient(to right, #e5e7eb, #9ca3af)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Start Building Your Pipeline
              </h3>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  lineHeight: 1.6,
                }}
              >
                Select nodes from the sidebar to begin creating your workflow.
                Connect them together to build complex data pipelines.
              </p>
            </div>
          </div>
  );
};