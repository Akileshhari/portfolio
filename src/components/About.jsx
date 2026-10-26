import './About.css'

function About() {
  const highlights = [
    {
      title: 'Enterprise Frontend Architecture',
      desc: 'Developing scalable, reusable React.js & Vite component architectures for US-based enterprise clients.',
      icon: '⚡',
    },
    {
      title: 'UI/UX Design to Production',
      desc: 'Translating Figma & Adobe XD wireframes and interactive prototypes into pixel-perfect, responsive code.',
      icon: '🎨',
    },
    {
      title: 'AI-Powered Productivity',
      desc: 'Leveraging cutting-edge AI dev tools (Claude, GitHub Copilot, Codex, Gemini) to accelerate delivery.',
      icon: '🤖',
    },
    {
      title: 'Full Lifecycle Delivery',
      desc: 'Experienced across REST APIs, backend integration (Node.js, PHP, MySQL), cloud deployment, and SEO.',
      icon: '🚀',
    },
  ]

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Dr. G.R.D. Damodaran College of Science',
      period: '2021 – 2023',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'J.J. College of Arts and Science',
      period: '2018 – 2021',
    },
  ]

  return (
    <section id="about" className="about-section" aria-label="About Akilesh Hariharan">
      <div className="about-section__container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-header__tag">About Me</span>
          <h2 className="section-header__title">
            Engineering User-Centric &amp; <span className="text-gradient">Scalable Web Solutions</span>
          </h2>
          <p className="section-header__desc">
            Bridging the gap between design aesthetic and engineering rigor for enterprise &amp; US-based clients.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="about-bio-card">
            <h3 className="about-bio-card__title">Professional Background</h3>
            <p className="about-bio-card__text">
              I am a <strong>UI/UX Designer &amp; Frontend Developer</strong> based in Chennai, India, with over{' '}
              <strong>3+ years of enterprise experience</strong> designing and engineering responsive, user-centric web applications.
            </p>
            <p className="about-bio-card__text">
              My core strength is building scalable React modular components, integrating complex RESTful APIs, and translating
              high-fidelity UI/UX designs into high-performance web applications. I have delivered <strong>5+ secure client projects</strong>,
              including Patent Analytics Tools, LMS platforms, and corporate websites.
            </p>

            <div className="about-education">
              <h4 className="about-education__title">Education</h4>
              <div className="about-education__list">
                {education.map((item) => (
                  <div key={item.degree} className="about-education__item">
                    <div className="about-education__period">{item.period}</div>
                    <div className="about-education__degree">{item.degree}</div>
                    <div className="about-education__school">{item.school}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="about-highlights-grid">
            {highlights.map((item) => (
              <div key={item.title} className="about-highlight-card">
                <span className="about-highlight-card__icon">{item.icon}</span>
                <h4 className="about-highlight-card__title">{item.title}</h4>
                <p className="about-highlight-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

