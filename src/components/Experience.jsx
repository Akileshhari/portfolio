import './Experience.css'

const EXPERIENCES = [
  {
    role: 'UI Developer',
    company: 'SciTech Patent Art Services Pvt. Ltd',
    location: 'Hyderabad, India',
    period: 'Nov 2025 – Present',
    badge: 'Current Role',
    highlights: [
      'Developed and maintained 5+ enterprise web applications for US-based clients using React.js, Vite, JavaScript (ES6+), HTML5, CSS3, Node.js, REST APIs, and MySQL.',
      'Architected reusable React components and responsive UI design systems, significantly reducing code duplication across enterprise projects.',
      'Integrated complex RESTful APIs for real-time dynamic data rendering and seamless workflow communication.',
      'Designed high-fidelity UI/UX wireframes, prototypes, dashboards, and enterprise portals in Figma before frontend implementation.',
      'Delivered 3 enterprise portals including Patent Analytics Tool, Learning Management System (LMS), and Knowledge Management Portal.',
      'Leveraged modern AI development tools (GitHub Copilot, Claude, Codex, Gemini Flash, and Sonnet) to accelerate code generation and refactoring.',
    ],
    tech: ['React.js', 'Vite', 'JavaScript (ES6+)', 'Node.js', 'REST APIs', 'Figma', 'MySQL', 'CodeIgniter'],
  },
  {
    role: 'UI/UX Designer & Developer',
    company: 'SmartZEN Solutions Pvt Ltd',
    location: 'Chennai, India',
    period: 'May 2023 – Jul 2025',
    badge: 'Full-Time',
    highlights: [
      'Designed and delivered 20+ interactive wireframes and high-fidelity prototypes across 5+ mobile app projects using Figma and Adobe XD.',
      'Developed and maintained 10+ responsive websites with HTML, CSS, JavaScript, and Bootstrap with 100% cross-browser compatibility.',
      'Built a responsive e-commerce platform and 10+ animated UI interactions using React.js (Vite), Reactbits, and Tailwind CSS, increasing user engagement by 30%.',
      'Implemented performance and SEO strategies, boosting organic search traffic by 40%.',
      'Led deployment and maintenance of 10+ websites on cloud platforms, resolving 95% of live issues within 24 hours.',
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Reactbits', 'Figma', 'Adobe XD', 'Bootstrap', 'SEO'],
  },
  {
    role: 'Graphic Designer (Part-Time)',
    company: 'India Signal Pvt Ltd',
    location: 'India',
    period: 'June 2018 – April 2021',
    badge: 'Design',
    highlights: [
      'Created 100+ visually compelling marketing posters and digital assets for high-reach social media campaigns.',
      'Designed 30+ brand identity graphics and publication catalogs monthly using Adobe Photoshop & Illustrator.',
    ],
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand Identity', 'Visual Design'],
  },
]

function Experience() {
  return (
    <section id="experience" className="exp-section" aria-label="Work Experience">
      <div className="exp-section__container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__tag">Track Record</span>
          <h2 className="section-header__title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-header__desc">
            A proven journey delivering enterprise applications, design systems, and responsive web products.
          </p>
        </div>

        {/* Timeline List */}
        <div className="exp-timeline">
          {EXPERIENCES.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="exp-card">
              <div className="exp-card__header">
                <div className="exp-card__role-block">
                  <div className="exp-card__title-row">
                    <h3 className="exp-card__role">{exp.role}</h3>
                    <span className="exp-card__badge">{exp.badge}</span>
                  </div>
                  <div className="exp-card__company">
                    <span>{exp.company}</span>
                    <span className="exp-card__sep">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="exp-card__period">{exp.period}</div>
              </div>

              <ul className="exp-card__list">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="exp-card__item">
                    <span className="exp-card__bullet" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-card__tech-row">
                {exp.tech.map((t) => (
                  <span key={t} className="exp-card__tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

