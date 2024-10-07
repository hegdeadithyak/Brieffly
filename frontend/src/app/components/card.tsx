// src/components/Card.jsx

import { CSSProperties } from "react";

interface CardProps {
  title : string;
  index : string;
}

export default function Card({ title, index } :CardProps) {
    return (
      <li className={`card`} style={{ '--index': index } as CSSProperties}>
        <div className="card-body">
          <h2>{title}</h2>
        </div>
      </li>
    );
  }
  