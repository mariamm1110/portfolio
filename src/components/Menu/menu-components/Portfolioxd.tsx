import React, { useRef } from 'react';

const Portfolioxd: React.FC = () => {
  // Definimos el tipo de la referencia como HTMLDivElement
  const targetRef = useRef<HTMLDivElement>(null);

  const handleLike = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <div style={{ height: '100vh', background: '#f0f0f0' }}>
        <button onClick={handleLike}>Like</button>
      </div>
      <div style={{ height: '100vh', background: '#ccc' }}>
        <h1>Scroll down to see more content</h1>
      </div>
      <div ref={targetRef} style={{ height: '100vh', background: '#ff0' }}>
        <h2>Target Element</h2>
        <p>This is the element you want to scroll to.</p>
      </div>
    </div>
  );
};

export default Portfolioxd;
