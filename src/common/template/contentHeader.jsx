import React from 'react';

export default function contentHeader(props) {
  return (
    <section className="content-header">
      <h1>{props.title}</h1> <small>{props.small}</small>
    </section>
  );
}
