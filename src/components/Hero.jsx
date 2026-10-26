import { useState, useEffect } from 'react'
import { smoothScrollToSection } from '../utils/smoothScroll.js'
import './Hero.css'

const ROLES = [
  'Frontend Developer',
  'UI/UX Developer',
  'React.js Specialist',
  'Enterprise Web Architect',
  'Figma & Design Technologist',
]

const TECH_STACK = [
  { name: 'React.js', icon: '⚛️', color: '#61dafb', exp: '3+ yrs' },
  { name: 'Vite', icon: '⚡', color: '#bd34fe', exp: 'Production' },
  { name: 'JavaScript (ES6+)', icon: '💛', color: '#f7df1e', exp: 'Core' },
  { name: 'Tailwind CSS', icon: '🎨', color: '#38bdf8', exp: 'Responsive' },
  { name: 'Figma', icon: '📐', color: '#f24e1e', exp: 'Design Systems' },
  { name: 'Node.js', icon: '🟢', color: '#22c55e', exp: 'Backend APIs' },
  { name: 'REST APIs', icon: '🔌', color: '#a855f7', exp: 'Integration' },
  { name: 'HTML5 & CSS3', icon: '🌐', color: '#ec4899', exp: 'Semantic' },
  { name: 'Bootstrap', icon: '🟣', color: '#7952b3', exp: 'Framework' },
  { name: 'PHP & MySQL', icon: '🐬', color: '#00758f', exp: 'Full-stack' },
  { name: 'CodeIgniter', icon: '🔥', color: '#ee4326', exp: 'Portals' },
  { name: 'WordPress', icon: '📰', color: '#21759b', exp: 'Websites' },
  { name: 'Reactbits UI', icon: '✨', color: '#c084fc', exp: 'Animations' },
]

const HIGHLIGHTS = [
  '⚡ 5+ Enterprise Web Apps for US Clients',
  '🎨 20+ Interactive Prototypes in Figma & Adobe XD',
  '🤖 AI-Assisted Dev: Claude, Copilot, Codex, Gemini',
  '🚀 10+ Responsive Websites Deployed (100% Cross-Browser)',
  '📊 Patent Analytics & LMS Enterprise Portals',
  '📈 +30% Engagement via Animated UI Interfaces',
  '💼 3+ Years of Professional Enterprise Experience',
]

const STATS = [
  { value: '3+', label: 'Years Experience', sub: 'Enterprise & US Clients' },
  { value: '5+', label: 'Enterprise Apps', sub: 'React, Node, REST APIs' },
  { value: '20+', label: 'UI/UX Prototypes', sub: 'Figma & Adobe XD' },
  { value: '100%', label: 'Responsive Accuracy', sub: 'Cross-browser compatible' },
]

const CODE_TABS = [
  { id: 'profile', name: 'akilesh.js' },
  { id: 'stack', name: 'TechStack.jsx' },
  { id: 'impact', name: 'EnterpriseImpact.json' },
]

const CODE_CONTENT = {
  profile: (
    <>
      <span className="code-comment">// Enterprise Developer Definition</span>{'\n'}
      <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{\n'}
      {'  '}name: <span className="code-str">&quot;Akilesh Hariharan&quot;</span>,{'\n'}
      {'  '}role: <span className="code-str">&quot;Frontend Developer | UI Developer&quot;</span>,{'\n'}
      {'  '}experience: <span className="code-str">&quot;3+ Years Enterprise&quot;</span>,{'\n'}
      {'  '}location: <span className="code-str">&quot;Chennai, India 🇮🇳&quot;</span>,{'\n'}
      {'  '}currentRole: <span className="code-str">&quot;UI Developer @ SciTech Patent Art&quot;</span>,{'\n'}
      {'  '}clients: <span className="code-str">&quot;US-based Clients &amp; Enterprise Apps&quot;</span>,{'\n'}
      {'  '}stack: [{'\n'}
      {'    '}<span className="code-str">&quot;React.js&quot;</span>, <span className="code-str">&quot;Vite&quot;</span>, <span className="code-str">&quot;Tailwind CSS&quot;</span>,{'\n'}
      {'    '}<span className="code-str">&quot;JavaScript (ES6+)&quot;</span>, <span className="code-str">&quot;Node.js&quot;</span>, <span className="code-str">&quot;REST APIs&quot;</span>,{'\n'}
      {'    '}<span className="code-str">&quot;Figma&quot;</span>, <span className="code-str">&quot;Reactbits&quot;</span>, <span className="code-str">&quot;MySQL&quot;</span>{'\n'}
      {'  '}],{'\n'}
      {'  '}aiTools: [<span className="code-str">&quot;Claude&quot;</span>, <span className="code-str">&quot;Copilot&quot;</span>, <span className="code-str">&quot;Codex&quot;</span>],{'\n'}
      {'  '}commitment: <span className="code-str">&quot;100% Cross-Browser &amp; Scalable UI&quot;</span>{'\n'}
      {'}'};
    </>
  ),
  stack: (
    <>
      <span className="code-comment">// Production UI Component Architecture</span>{'\n'}
      <span className="code-keyword">export const</span> <span className="code-type">CoreCapabilities</span> = () =&gt; {'{\n'}
      {'  '}<span className="code-keyword">return</span> ({'\n'}
      {'    '}&lt;<span className="code-type">EnterpriseModule</span>{'\n'}
      {'      '}framework=<span className="code-str">&quot;React 19 + Vite&quot;</span>{'\n'}
      {'      '}styling={'[\n'}
      {'        '}<span className="code-str">&quot;Tailwind CSS&quot;</span>, <span className="code-str">&quot;Responsive Grid&quot;</span>, <span className="code-str">&quot;Fluid Clamp&quot;</span>{'\n'}
      {'      ]'}{'\n'}
      {'      '}architecture=<span className="code-str">&quot;Reusable Modular UI Systems&quot;</span>{'\n'}
      {'      '}apiIntegration=<span className="code-str">&quot;RESTful APIs &amp; Dynamic State&quot;</span>{'\n'}
      {'      '}designTools=<span className="code-str">&quot;Figma &amp; Adobe XD (Pixel-Perfect)&quot;</span>{'\n'}
      {'      '}standards=<span className="code-str">&quot;WCAG Accessibility &amp; Ultra-Smooth UI&quot;</span>{'\n'}
      {'    '}/&gt;{'\n'}
      {'  '});{'\n'}
      {'}'};
    </>
  ),
  impact: (
    <>
      <span className="code-comment">// Enterprise Delivery Record</span>{'\n'}
      {'{'}{'\n'}
      {'  '}<span className="code-type">&quot;enterpriseWebApps&quot;</span>: <span className="code-str">&quot;5+ for US-based Clients&quot;</span>,{'\n'}
      {'  '}<span className="code-type">&quot;wireframesAndPrototypes&quot;</span>: <span className="code-str">&quot;20+ in Figma &amp; Adobe XD&quot;</span>,{'\n'}
      {'  '}<span className="code-type">&quot;responsiveWebsites&quot;</span>: <span className="code-str">&quot;10+ Deployed with 100% Cross-Browser&quot;</span>,{'\n'}
      {'  '}<span className="code-type">&quot;portalsDelivered&quot;</span>: [{'\n'}
      {'    '}<span className="code-str">&quot;Patent Analytics Tool&quot;</span>,{'\n'}
      {'    '}<span className="code-str">&quot;Learning Management System (LMS)&quot;</span>,{'\n'}
      {'    '}<span className="code-str">&quot;Knowledge Management Portal&quot;</span>{'\n'}
      {'  '}],{'\n'}
      {'  '}<span className="code-type">&quot;engagementMetric&quot;</span>: <span className="code-str">&quot;+30% with Animated UI (Reactbits)&quot;</span>,{'\n'}
      {'  '}<span className="code-type">&quot;cloudIssueResolution&quot;</span>: <span className="code-str">&quot;95% within 24 Hours&quot;</span>{'\n'}
      {'}'}
    </>
  ),
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  // Interactive Mini-Game State: Tech XP Collector
  const [xp, setXp] = useState(50)
  const [level, setLevel] = useState('Frontend Engineer')
  const [activeBonus, setActiveBonus] = useState('')

  // Smooth rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
        setIsFading(false)
      }, 300)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const copyEmail = () => {
    navigator.clipboard?.writeText('akileshvj726@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Gamified interaction on clicking any tech pill
  const handlePillClick = (techName) => {
    const newXp = xp + 15
    setXp(newXp)
    setActiveBonus(`+15 XP: ${techName} mastered!`)

    if (newXp >= 200) setLevel('Enterprise Architect 🏆')
    else if (newXp >= 140) setLevel('React Specialist ⚡')
    else if (newXp >= 80) setLevel('Senior UI Engineer 🚀')

    setTimeout(() => {
      setActiveBonus('')
    }, 2000)
  }

  return (
    <section id="home" className="hero" aria-label="Hero Introduction">
      {/* Animated Dynamic Aurora & Tech Grid Background */}
      <div className="hero__aurora" aria-hidden="true">
        <div className="hero__aurora-orb hero__aurora-orb--1" />
        <div className="hero__aurora-orb hero__aurora-orb--2" />
        <div className="hero__aurora-orb hero__aurora-orb--3" />
        <div className="hero__grid-pattern" />

        {/* Ambient floating glowing dust particles */}
        <div className="hero__particle hero__particle--1" />
        <div className="hero__particle hero__particle--2" />
        <div className="hero__particle hero__particle--3" />
        <div className="hero__particle hero__particle--4" />
      </div>

      <div className="hero__container">
        {/* Main Hero Content Layout */}
        <div className="hero__layout">
          {/* Left Column: Greeting, Role, Bio, CTAs */}
          <div className="hero__content">
            {/* Live Availability Pill with Animated Radar Dot */}
            <div className="hero__badge">
              <span className="hero__badge-pulse">
                <span className="hero__badge-ping" />
                <span className="hero__badge-dot" />
              </span>
              <span className="hero__badge-text">
                Available for Roles &amp; Projects • Chennai, India
              </span>
            </div>

            {/* Main Title */}
            <h1 className="hero__title">
              <span className="hero__title-intro">Hi, I&apos;m</span>
              <span className="hero__title-name">Akilesh Hariharan</span>
            </h1>

            {/* Dynamic Animated Role Switcher */}
            <div className="hero__role-wrapper" aria-live="polite">
              <span className="hero__role-prefix">Passionate</span>
              <span className={`hero__role-text${isFading ? ' hero__role-text--fading' : ''}`}>
                {ROLES[roleIndex]}
              </span>
            </div>

            {/* Bio summary from resume */}
            <p className="hero__description">
              UI/UX Designer &amp; Frontend Developer with <strong>3+ years of experience</strong> crafting
              high-performance, responsive web applications for <strong>enterprise and US-based clients</strong>.
              Specialized in scalable React components, clean UI architecture, REST APIs, and translating Figma designs
              into pixel-perfect code.
            </p>

            {/* Action CTAs */}
            <div className="hero__actions">
              <a
                href="/images/Resume/Akilesh_Hariharan_Resume_Updated.pdf"
                download="Akilesh_Hariharan_Resume.pdf"
                className="hero__btn hero__btn--primary"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Akilesh Hariharan's Resume"
              >
                <span>Download Resume</span>
                <svg className="hero__btn-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollToSection('contact', '/contact')
                }}
                className="hero__btn hero__btn--secondary"
              >
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                className="hero__btn hero__btn--ghost"
                onClick={copyEmail}
                title="Copy email to clipboard"
              >
                <span>{copied ? '✓ Email Copied' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Direct Connect Pills */}
            <div className="hero__contact-strip">
              <a
                href="https://linkedin.com/in/akileshhari2001"
                target="_blank"
                rel="noreferrer"
                className="hero__social-pill"
                aria-label="LinkedIn profile"
              >
                <svg className="hero__social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:akileshvj726@gmail.com"
                className="hero__social-pill"
                aria-label="Email Akilesh"
              >
                <svg className="hero__social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>akileshvj726@gmail.com</span>
              </a>

              <a
                href="tel:+919514142099"
                className="hero__social-pill"
                aria-label="Call Akilesh"
              >
                <svg className="hero__social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91-9514142099</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal with Switchable Tabs */}
          <div className="hero__visual">
            <div className="hero__terminal-card">
              {/* Terminal Window Header */}
              <div className="hero__terminal-header">
                <div className="hero__terminal-dots">
                  <span className="hero__dot hero__dot--red" />
                  <span className="hero__dot hero__dot--yellow" />
                  <span className="hero__dot hero__dot--green" />
                </div>

                {/* Interactive Clickable Tabs */}
                <div className="hero__terminal-tabs">
                  {CODE_TABS.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      className={`hero__terminal-tab-btn${activeTab === tab.id ? ' hero__terminal-tab-btn--active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>

                <div className="hero__terminal-tag">React 19 • JS</div>
              </div>

              {/* Code Snippet Box with Blinking Terminal Cursor */}
              <div className="hero__terminal-body">
                <pre className="hero__code">
                  <code>{CODE_CONTENT[activeTab]}</code>
                  <span className="hero__terminal-cursor" aria-hidden="true">▍</span>
                </pre>
              </div>

              {/* Floating Badges with Levitation Animation */}
              <div className="hero__floating-badge hero__floating-badge--top">
                <span className="hero__floating-icon">🚀</span>
                <div>
                  <strong>5+ Enterprise Apps</strong>
                  <span>Delivered for US Clients</span>
                </div>
              </div>

              <div className="hero__floating-badge hero__floating-badge--bottom">
                <span className="hero__floating-icon">🎨</span>
                <div>
                  <strong>Figma to React</strong>
                  <span>100% Pixel-Perfect UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats Strip */}
        <div className="hero__stats">
          {STATS.map(({ value, label, sub }) => (
            <div key={label} className="hero__stat-card">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
              <span className="hero__stat-sub">{sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ANIMATING BANNER SECTION: Continuous Running Infinite Tickers             */}
      {/* 100% Automated Auto-Scroll • Never Hides on Hover • Interactive Game XP   */}
      {/* ========================================================================= */}
      <div className="hero__banner-section" aria-label="Core Tech Stack & Enterprise Capabilities">
        <div className="hero__banner-header">
          <div className="hero__game-bar">
            <span className="hero__game-tag">🎮 Tech Stack Station</span>
            <span className="hero__game-score">
              Power: <strong>{xp} XP</strong> • Rank: <span className="hero__game-rank">{level}</span>
            </span>
            {activeBonus ? (
              <span className="hero__game-bonus">{activeBonus}</span>
            ) : (
              <span className="hero__game-hint">Tip: Click any skill badge to earn XP!</span>
            )}
          </div>
        </div>

        {/* Marquee Row 1: Technologies (Automatic Continuous Left Scroll) */}
        <div className="hero__marquee-wrapper" tabIndex={-1}>
          <div className="hero__marquee-track hero__marquee-track--forward">
            {/* 3x Duplication ensures mathematically flawless infinite loop on any screen */}
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
              <button
                type="button"
                key={`${tech.name}-${index}`}
                className="hero__marquee-pill"
                style={{ '--pill-accent': tech.color }}
                onClick={() => handlePillClick(tech.name)}
                title={`Click to gain XP: ${tech.name}`}
              >
                <span className="hero__marquee-icon">{tech.icon}</span>
                <span className="hero__marquee-text">{tech.name}</span>
                <span className="hero__marquee-tag">{tech.exp}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Marquee Row 2: Highlights & Achievements (Automatic Continuous Right Scroll) */}
        <div className="hero__marquee-wrapper hero__marquee-wrapper--reverse" tabIndex={-1}>
          <div className="hero__marquee-track hero__marquee-track--reverse">
            {[...HIGHLIGHTS, ...HIGHLIGHTS, ...HIGHLIGHTS].map((highlight, index) => (
              <div
                key={`${highlight}-${index}`}
                className="hero__marquee-pill hero__marquee-pill--accent"
              >
                <span className="hero__marquee-text">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
