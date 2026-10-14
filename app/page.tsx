import EnterGateway from "./enter-gateway";

export default function Home() {
  return (
    <main className="terminalSite">
      <header className="terminalHeader">
        <a href="/" className="terminalBrand">PS C:\\TBP&gt; <span>THE BORING PRODUCT</span></a>
        <nav aria-label="Primary navigation">
          <a className="exploreCmd" href="/explore">[ explore ]</a>
          <a href="/dr-o">[ dr. o ]</a>
        </nav>
      </header>

      <section className="landingShell" aria-label="The Boring Product terminal">
        <div className="terminalChrome">
          <div className="terminalDots" aria-hidden="true"><i/><i/><i/></div>
          <span>Windows PowerShell · Claude Code</span>
          <span>tbp://home</span>
        </div>

        <div className="landingTerminal">
          <p className="psLine"><span className="psPrompt">PS C:\\TheBoringProduct&gt;</span> claude</p>
          <p className="claudeLine"><span>╭─</span> Claude Code <em>ready</em></p>
          <p className="claudeLine"><span>│</span> workspace: <strong>the-boring-product</strong></p>
          <p className="claudeLine"><span>│</span> status: <strong>building useful things</strong></p>
          <p className="claudeLine"><span>╰─</span> awaiting input<span className="cursor" aria-hidden="true" /></p>

          <div className="terminalDivider">────────────────────────────────────────────────────────</div>

          <p className="commentLine"># products live here</p>
          <p className="commandLine"><span className="psPrompt">PS C:\\TheBoringProduct&gt;</span> Get-ChildItem ./explore</p>
          <div className="quickList" aria-label="Available products">
            <span>01</span><b>OpenMaps</b><em>EARLY ACCESS</em>
            <span>02</span><b>Odesseus</b><em>LIVE</em>
          </div>

          <EnterGateway />
        </div>
      </section>

      <footer className="terminalFooter">
        <span>© 2026 The Boring Product</span>
        <span>built by Dr. O <i aria-hidden="true" /></span>
      </footer>
    </main>
  );
}
