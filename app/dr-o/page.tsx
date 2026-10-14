import type { Metadata } from "next";
import { PageShell } from "../components";

export const metadata: Metadata = {
  title: "Dr. O",
  description: "About Dr. O — technology builder working across cybersecurity, AI/ML, MLSecOps, and product engineering.",
  alternates: { canonical: "/dr-o" },
};

export default function DrOPage() {
  return (
    <PageShell>
      <section className="terminalPageSection drOIntro">
        <p className="promptText">$ whoami</p>
        <h1>DR. O</h1>
        <div className="drOCopy">
          <p>
            Hello. My name is—well, you can call me <strong>Dr. O</strong>.
          </p>
          <p>
            Not because I&apos;m trying to sound mysterious or overly important, but because I do actually hold a doctorate.
            I also have a few other degrees and certifications somewhere in the background, but they&apos;re not really the interesting part.
          </p>
          <p>
            I started my tech career in 2016, right after college, working as a federal contractor supporting U.S. military intelligence
            and government agencies. That took me through defensive operations, offensive security, GRC, engineering, and product security.
          </p>
          <p>
            At some point, apparently deciding cybersecurity wasn&apos;t complicated enough, I taught myself machine learning and moved deeper
            into AI engineering—still supporting, yes, U.S. military intelligence, now as an AI/ML engineer focused on securing LLMs and MLSecOps.
          </p>
          <p>
            Now we&apos;re in the era where everyone is &quot;building and shipping.&quot; I&apos;m less interested in saying it and more interested
            in making products I actually want to use.
          </p>
          <p>
            That&apos;s mostly what <strong>The Boring Product</strong> is. I build things, obsess over details that probably don&apos;t matter to
            normal people, test ideas, break them, rebuild them, and occasionally share the ones that become useful enough for other people to try.
          </p>
        </div>
      </section>

      <section className="terminalPageSection drOPrinciple">
        <p className="promptText">$ cat ./principle.txt</p>
        <blockquote>If you aren&apos;t obsessed enough about it, you&apos;re just ordinary.</blockquote>
        <p>No grand manifesto. No claims about changing the world. Just products. Hopefully useful ones. And, if I&apos;ve done my job properly, pleasantly boring.</p>
      </section>
    </PageShell>
  );
}
