import React from 'react';

export default function DocumentLink({ label, description, targetLocation }) {
  return (
    <a
      className="card"
      style={{
        padding: '1.5rem',
        border: '1px solid #444950',
        boxShadow: '0 1.5px 3px 0 rgb(0 0 0 / 15%)',
        textDecoration: 'none',
        backgroundColor: '#242526',
      }}
      href={targetLocation}
    >
      <h2 className="text--truncate card__title" style={{ color: '#fff', marginBottom: '0' }}>
        {label}
      </h2>
      <p
        className="text--truncate card__description"
        style={{ marginBottom: 0 }}
        title={description || 'No description'}
      >
        {description || 'No description'}
      </p>
    </a>
  );
}
