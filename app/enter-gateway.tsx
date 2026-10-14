"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EnterGateway() {
  const router = useRouter();
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    if (!entering) return;
    const timer = window.setTimeout(() => router.push("/explore"), 1250);
    return () => window.clearTimeout(timer);
  }, [entering, router]);

  return (
    <div className={`enterGateway${entering ? " isEntering" : ""}`}>
      {!entering ? (
        <>
          <button className="enterButton" onClick={() => setEntering(true)}>
            <span className="enterKey">ENTER</span>
            <span className="enterCommand">./explore</span>
          </button>
        </>
      ) : (
        <div className="bootSequence" role="status" aria-live="polite">
          <p><span>[01]</span> resolving ./explore <b>OK</b></p>
          <p><span>[02]</span> loading product registry <b>OK</b></p>
          <p><span>[03]</span> mounting terminal interface <b>OK</b></p>
          <div className="bootBar"><i /></div>
          <p className="bootFinal">ENTERING EXPLORE<span className="cursor" /></p>
        </div>
      )}
    </div>
  );
}
