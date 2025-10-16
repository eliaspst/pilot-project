import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from "react-router-dom";

function normalizeUmlauts(str) {
  return str
    .replace(/ä/g, 'ae').replace(/Ä/g, 'Ae')
    .replace(/ö/g, 'oe').replace(/Ö/g, 'Oe')
    .replace(/ü/g, 'ue').replace(/Ü/g, 'Ue')
    .replace(/ß/g, 'ss');
}

function normalizePath(rawPath, fallbackTitle) {
  // Falls path fehlt, notfalls aus dem Titel bauen (z. B. "Männer" -> "maenner")
  let p = (rawPath ?? '').trim();
  if (!p && fallbackTitle) {
    p = '/' + normalizeUmlauts(String(fallbackTitle).toLowerCase());
  }

  // Umlaute im Pfad normalisieren + Whitespaces entfernen
  p = normalizeUmlauts(p).replace(/\s+/g, '');

  // sicherstellen, dass es mit "/" beginnt
  if (p && !p.startsWith('/')) p = '/' + p;

  return p;
}

function Dropdown({ items = [] }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {items.map((item) => {
        const to = normalizePath(item.path, item.title);
        return (
          <li key={item.path || item.title}>
            <Link
              className={item.cName}
              to={to}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
