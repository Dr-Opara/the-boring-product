"use client";

import { useEffect, useRef } from "react";

export default function InteractiveCore({ variant = "violet" }: { variant?: "violet" | "cyan" | "palm" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      node.style.setProperty("--rx", `${-y * 10}deg`);
      node.style.setProperty("--ry", `${x * 14}deg`);
    };
    const reset = () => {
      node.style.setProperty("--rx", "0deg");
      node.style.setProperty("--ry", "0deg");
    };
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", reset);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div ref={ref} className={`interactiveCore interactiveCore-${variant}`} aria-hidden="true">
      <div className="coreGrid" />
      <div className="coreHalo haloA" />
      <div className="coreHalo haloB" />
      <div className="coreHalo haloC" />
      <div className="coreObject">
        <span className="coreFace faceA" />
        <span className="coreFace faceB" />
        <span className="coreFace faceC" />
        <span className="coreLight" />
      </div>
      <div className="coreReadout readoutA">SYS // 01</div>
      <div className="coreReadout readoutB">ACTIVE</div>
      <i className="coreParticle cp1" /><i className="coreParticle cp2" /><i className="coreParticle cp3" /><i className="coreParticle cp4" />
    </div>
  );
}
