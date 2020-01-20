import React from 'react'

import './Page.scss'

export default function Page({ header, children }) {
  return (
    <div className="Page container p-3">
      <header>{header}</header>
      {children}
    </div>
  );
}