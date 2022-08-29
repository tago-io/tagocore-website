import { useState } from "react";

let sequence = 0;

function DataPoint(props) {
  const [className] = useState(() => ++sequence);
  const left1 = `${props.data.x1}px`;
  const top1 = `${props.data.y1}px`;
  const left2 = `${props.data.x2}px`;
  const top2 = `${props.data.y2}px`;

  return (
    <div className={`data-point-${className}`}>
      <style jsx>{`
        @keyframes data-point-${className} {
          100% {
            transform: ${`translate(calc(${left2} - 9px), calc(${top2} - 9px))`};
          }
        }

        .data-point-${className} {
          position: absolute;
          background: #d33939;
          border: 2px solid white;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          z-index: -1;
          transform: ${`translate(calc(${left1} - 9px), calc(${top1} - 9px))`};
          animation: data-point-${className} 1.5s infinite;
          animation-delay: ${props.delay}s;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

export default DataPoint;
