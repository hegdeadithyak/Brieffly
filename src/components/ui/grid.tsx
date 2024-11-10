import { useState } from "react";
export const GridBackgroundDemo: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //@ts-ignore
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div onMouseMove={handleMouseMove} className="absolute inset-0 z-0">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    </div>
  );
};
