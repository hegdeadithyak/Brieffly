// src/components/Card.jsx
export default function Card({ title, index }) {
    return (
      <li className={`card`} style={{ '--index': index }}>
        <div className="card-body">
          <h2>{title}</h2>
        </div>
      </li>
    );
  }
  