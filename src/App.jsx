import { useEffect, useState } from 'react';

const navItems = [['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']];
const techStack = ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Python', 'FastAPI', 'MCP', 'React', 'Docker', 'System Design'];
const experience = [
  ['International RuPay', 'Clearance & Settlement', 'Optimizing transaction processing and resolving performance bottlenecks in the systems behind global RuPay payments.', '50%', 'faster stress-test', 'execution'],
  ['KMS · Key', 'Management System', 'Co-owning a secure 50+ API platform for cryptographic key generation, lifecycle management, HSM operations and idempotent services.', '50+', 'secure APIs', 'built & deployed'],
  ['LMMP · Limit Management', '& Monitoring Platform', 'Migrated a legacy banking platform to Spring Boot and React, with secure maker-checker approvals and integrations across bank types and channels.', '2 wk', 'legacy platform', 'migration'],
  ['AiNxt · Agentic', 'Application', 'Building an AI-assisted workflow experience where users can shape workflows through chat, with intent classification selecting the right model and execution path for every request. This includes AIDLC / ATH, which turns issues into deployment-ready changes by building and running tests, editing merge requests and making scoped commits.', 'LRU / ATH', 'workflow digest', 'compression cache'],
];

function useRevealAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }), { threshold: 0.14 });
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Header({ darkMode, menuOpen, onThemeToggle, onMenuToggle, onCloseMenu }) {
  return <header className="site-header" id="top">
    <nav className="nav container" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Priyanshu home"><span className="brand-mark">p.</span> Priyanshu</a>
      <div id="nav-links" className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map(([label, href]) => <a href={href} key={href} onClick={onCloseMenu}>{label}</a>)}
      </div>
      <div className="nav-actions">
        <button className="theme-toggle" type="button" aria-label="Switch color theme" title="Switch color theme" onClick={onThemeToggle}>
          <svg className="sun-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
          <svg className="moon-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
        </button>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-controls="nav-links" aria-expanded={menuOpen} onClick={onMenuToggle}><span /><span /></button>
      </div>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero container">
    <div className="hero-copy reveal">
      <p className="eyebrow"><span /> Software engineer · NPCI</p>
      <h1>Building systems that <em>move</em> with confidence.</h1>
      <p className="hero-intro">I work at the intersection of payment infrastructure and applied AI—building resilient, high-throughput systems that make complex work feel dependable.</p>
      <div className="hero-cta"><a className="button button-primary" href="#projects">Explore my work <span>↘</span></a><a className="text-link" href="https://www.linkedin.com/in/prynsh/" target="_blank" rel="noreferrer">Let’s connect <span>↗</span></a></div>
    </div>
    <div className="hero-art reveal delay-1" aria-label="Animated system diagram">
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="system-card"><div className="card-top"><span>PAYMENT INFRASTRUCTURE</span><i /></div><div className="system-flow"><div className="flow-node active"><b /><span>Secure</span></div><div className="flow-line" /><div className="flow-node"><b /><span>Route</span></div><div className="flow-line" /><div className="flow-node"><b /><span>Settle</span></div></div><div className="card-bottom"><span>01 / DISTRIBUTED SYSTEMS</span><span>RESILIENCE FIRST</span></div></div>
      <div className="floating-note note-one">ENGINEERING FOCUS<br /><strong>High throughput.<br />Thoughtful architecture.</strong></div><div className="floating-note note-two"><span className="pulse" /> Payments × Applied AI</div>
    </div>
    <a className="scroll-cue" href="#about">Scroll to discover <span>↓</span></a>
  </section>;
}

function About() {
  return <section className="statement-section" id="about">
    <div className="container statement-grid"><p className="section-kicker reveal">01 / ABOUT</p><div className="statement reveal"><h2>I turn high-stakes complexity into <em>clear, durable</em> software.</h2><p>I’m Priyanshu, a Software Engineer at NPCI. From international RuPay settlement systems to LLM-powered workflows, I enjoy owning the work behind services that need to be fast, observable and secure.</p><div className="profile-links"><a href="https://github.com/prynswho" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com/in/prynsh/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://leetcode.com/u/priyanshuWewe/" target="_blank" rel="noreferrer">LeetCode <span>↗</span></a></div></div></div>
    <div className="container tech-wrap reveal"><p className="mono-label">SELECTED TOOLKIT</p><div className="tech-list" aria-label="Technical skills">{techStack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
  </section>;
}

function Experience() {
  return <section className="experience-section container" id="experience">
    <div className="section-heading reveal"><p className="section-kicker">02 / EXPERIENCE</p><h2>Trust is built<br />under <em>load.</em></h2></div>
    <div className="experience-list">{experience.map(([first, second, description, impact, lineOne, lineTwo]) => <article className="experience-item reveal" key={impact}><div className="experience-meta"><span>2025 — now</span><span>NPCI</span></div><div className="experience-content"><h3>{first}<br />{second}</h3><p>{description}</p></div><div className="impact"><strong>{impact}</strong><span>{lineOne}<br />{lineTwo}</span></div></article>)}</div>
  </section>;
}

const GithubLink = ({ href, label }) => <a className="round-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>↗</a>;

function Projects() {
  return <section className="projects-section" id="projects"><div className="container">
    <div className="section-heading project-heading reveal"><p className="section-kicker">03 / SELECTED WORK</p><h2>Things I’ve<br /><em>made real.</em></h2><p>Systems are more interesting when you can see how they work.</p></div>
    <div className="project-grid">
      <article className="project-card featured reveal"><div className="project-visual visual-agentic"><span className="code-line l1">classify(intent)</span><span className="code-line l2">→ route(model, task)</span><span className="code-line l3">workflow.digest()</span><div className="node-map"><i /><i /><i /><i /><i /></div></div><div className="project-info"><div><p className="project-number">01</p><h3>Agentic Workflow<br />Pipeline</h3></div><p className="project-description">An AI-assisted workflow builder where chat and intent classification turn requests into dynamic workflows. Intent-aware model routing selects the right model path, while an LRU cache compresses workflow descriptions into a digest sent with each request—keeping full agent descriptions backend-side. MCP servers provide GitHub, mail, Redis, PostgreSQL, CLI and filesystem tools when a workflow needs to act.</p><div className="project-footer"><div className="tag-list"><span>Python</span><span>FastAPI</span><span>React Flow</span><span>MCP</span></div><GithubLink href="https://github.com/prynswho/Agentic-workflow-backend" label="View Agentic Workflow Pipeline on GitHub" /></div></div></article>
      <article className="project-card reveal delay-1"><div className="project-visual visual-payment"><div className="transaction"><span>₹</span><b>100,000</b><small>AUTHORIZED</small></div><div className="payment-lines"><i /><i /><i /></div></div><div className="project-info"><div><p className="project-number">02</p><h3>Distributed<br />Payment System</h3></div><p className="project-description">A resilient event-driven system with five microservices, Kafka, dynamic fees, approval flows and bank-scoped access control.</p><div className="project-footer"><div className="tag-list"><span>Java</span><span>Kafka</span><span>Redis</span></div><GithubLink href="https://github.com/prynswho/payment-system" label="View Distributed Payment System on GitHub" /></div></div></article>
      <article className="project-card reveal delay-2"><div className="project-visual visual-mcp"><div className="folder"><span>./</span> tools / 6 servers</div><div className="terminal"><p><i>›</i> github.search</p><p><i>›</i> mail.send</p><p><i>›</i> redis.get</p><p><i>›</i> postgres.query</p></div></div><div className="project-info"><div><p className="project-number">03</p><h3>MCP Tool<br />Server Layer</h3></div><p className="project-description">A custom Model Context Protocol tool layer that lets workflow nodes securely use GitHub, mail, Redis, PostgreSQL, CLI and filesystem capabilities during execution.</p><div className="project-footer"><div className="tag-list"><span>Python</span><span>MCP</span><span>Docker</span></div><GithubLink href="https://github.com/prynswho/Mcp-file-system-server" label="View MCP File-System Server on GitHub" /></div></div></article>
      <article className="project-card aidlc-card reveal"><div className="project-visual visual-aidlc"><p className="aidlc-path">FRAME <span>→</span> RISK <span>→</span> DATA <span>→</span> DESIGN</p><div className="aidlc-loop"><span>BUILD</span><i>→</i><span>TEST</span><i>→</i><span>EVALUATE</span><i>→</i><span className="fix-stage">FIX</span><i>→</i><span>RELEASE</span></div><div className="aidlc-decision"><b>✓</b> GOVERNED RELEASE <small>ISSUE → READY · &lt; 2 HRS</small></div></div><div className="project-info"><div><p className="project-number">04</p><h3>AIDLC / ATH · Agentic<br />Testing Harness</h3></div><p className="project-description">Part of the AiNxt agentic application, this learning framework and runnable prototype supports governed AI delivery from business framing and risk assessment through build, evaluation and controlled release. ATH turns issues into deployment-ready changes by building tests, running them, editing merge requests and making scoped commits. It demonstrates policy-aware retrieval, authorization boundaries, citations, abstention, prompt-injection checks and automated PASS/BLOCK release decisions. Across five synthetic scenarios, it achieved 100% task and retrieval success, correct abstention and adversarial blocking, with zero unauthorized retrievals. These are prototype demonstrations, not production metrics.</p><div className="project-footer"><div className="tag-list"><span>Python</span><span>RAG</span><span>Evaluation</span><span>AI Governance</span></div><span className="prototype-note">Learning prototype · synthetic tests</span></div></div></article>
    </div>
  </div></section>;
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [menuOpen, setMenuOpen] = useState(false);
  useRevealAnimations();

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return <><div className="grain" /><Header darkMode={darkMode} menuOpen={menuOpen} onThemeToggle={() => setDarkMode((value) => !value)} onMenuToggle={() => setMenuOpen((value) => !value)} onCloseMenu={() => setMenuOpen(false)} /><main><Hero /><About /><Experience /><Projects /><section className="education-section container reveal"><p className="section-kicker">04 / FOUNDATION</p><div><span className="degree-line" /><h2>NIT Tiruchirappalli</h2><p>B.Tech, Instrumentation & Control Engineering · 2021 — 2025 · GPA 8.22 / 10</p></div></section><section className="contact-section" id="contact"><div className="container contact-inner reveal"><p className="section-kicker">05 / CONTACT</p><h2>Have a difficult<br />system to build?</h2><a className="contact-email" href="mailto:priyanshu.nitt@gmail.com">priyanshu.nitt@gmail.com <span>↗</span></a></div></section></main><footer className="footer container"><p>© {new Date().getFullYear()} Priyanshu</p><p>Built with intent, not excess.</p><a href="#top">Back to top ↑</a></footer></>;
}

export default App;
