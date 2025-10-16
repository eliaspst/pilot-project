import React, { useState, useRef, useEffect } from "react";

const ACCENT = "#0c0f1c";
const TEXT = "#c5a762";
const BG = "#ffffff";

export default function BeforeAfter({ beforeSrc, afterSrc, title }) {
  const [pos, setPos] = useState(50); // Prozent
  const wrapRef = useRef(null);
  const isDown = useRef(false);

  const onPointerDown = () => (isDown.current = true);
  const onPointerUp = () => (isDown.current = false);
  const onPointerMove = (e) => {
    if (!isDown.current || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    setPos(Math.round((x / rect.width) * 100));
  };

  useEffect(() => {
    const up = () => (isDown.current = false);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseleave", up);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseleave", up);
    };
  }, []);

  return (
    <figure style={styles.figure}>
      {title ? <figcaption style={styles.caption}>{title}</figcaption> : null}

      <div
        ref={wrapRef}
        style={styles.wrap}
        onMouseMove={onPointerMove}
        onMouseDown={onPointerDown}
        onMouseUp={onPointerUp}
        onTouchStart={(e) => { isDown.current = true; }}
        onTouchEnd={() => (isDown.current = false)}
        onTouchMove={(e) => {
          if (!wrapRef.current) return;
          const rect = wrapRef.current.getBoundingClientRect();
          const touch = e.touches[0];
          const x = Math.min(Math.max(touch.clientX - rect.left, 0), rect.width);
          setPos(Math.round((x / rect.width) * 100));
        }}
      >
        {/* AFTER unten */}
        <img src={afterSrc} alt="Nachher" style={styles.img} />

        {/* BEFORE oben, per Clip-Pfad begrenzt */}
        <div style={{ ...styles.clip, width: `${pos}%` }}>
          <img src={beforeSrc} alt="Vorher" style={styles.img} />
        </div>

        {/* Trennlinie */}
        <div style={{ ...styles.divider, left: `calc(${pos}% - 1px)` }} />

        {/* Griff */}
        <button
          type="button"
          aria-label="Vorher/Nachher verschieben"
          onMouseDown={onPointerDown}
          onTouchStart={(e) => { isDown.current = true; }}
          style={{ ...styles.handle, left: `calc(${pos}% - 18px)` }}
        />
      </div>
    </figure>
  );
}

const styles = {
  figure: {
    margin: 0,
    background: BG,
    border: `2px solid ${ACCENT}`,
    borderRadius: 12,
    overflow: "hidden",
  },
  caption: {
    padding: "10px 14px",
    color: TEXT,
    fontWeight: 700,
    borderBottom: `2px solid ${ACCENT}`,
    background: BG,
  },
  wrap: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 3",
    background: BG,
    cursor: "ew-resize",
    userSelect: "none",
    touchAction: "none",
  },
  img: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  clip: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    borderRight: `2px solid ${ACCENT}`,
  },
  divider: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 2,
    background: ACCENT,
    pointerEvents: "none",
  },
  handle: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: `2px solid ${BG}`,
    outline: "none",
    background: ACCENT,
    boxShadow: "0 0 0 2px " + ACCENT + ", 0 0 0 6px rgba(12,15,28,0.25)",
    cursor: "grab",
  },
};
