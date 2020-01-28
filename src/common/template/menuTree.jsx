import React from 'react';

export default function menuTree(props) {
  return (
    <li className="treeview">
      <a href>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
        <i className="fa fa-angle-left pull-right-container"></i>
      </a>
      <ul className="treeview-menu">{props.children}</ul>
    </li>
  );
}
