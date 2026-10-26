import './Skills.css'

const SKILL_CATEGORIES = [
  {
    category: 'Frontend Engineering',
    icon: '💻',
    accent: '#38bdf8',
    count: '8 Skills',
    skills: [
      'React.js',
      'Vite',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5 & CSS3',
      'Bootstrap',
      'Reactbits UI',
      'Responsive Design',
    ],
  },
  {
    category: 'UI/UX & Product Design',
    icon: '🎨',
    accent: '#ec4899',
    count: '7 Skills',
    skills: [
      'Figma',
      'Adobe XD',
      'Wireframing',
      'Interactive Prototyping',
      'Design Systems',
      'Photoshop & Illustrator',
      'Visual Design',
    ],
  },
  {
    category: 'Backend & Data APIs',
    icon: '⚙️',
    accent: '#10b981',
    count: '6 Skills',
    skills: [
      'Node.js',
      'RESTful APIs',
      'PHP',
      'CodeIgniter',
      'MySQL',
      'Database Architecture',
    ],
  },
  {
    category: 'AI & Modern Dev Tools',
    icon: '⚡',
    accent: '#a855f7',
    count: '7 Skills',
    skills: [
      'Claude AI & Copilot',
      'Codex & Antigravity',
      'Git & GitHub',
      'Cloud Deployment',
      'WCAG Accessibility',
      'SEO Strategies',
      'DaVinci Resolve',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section" aria-label="Core Skills & Technologies">
      <div className="skills-section__container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__tag">Toolkit</span>
          <h2 className="section-header__title">
            Core Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-header__desc">
            A comprehensive suite of modern engineering and design capabilities refined across enterprise projects.
          </p>
        </div>

        {/* Skill Category Cards — Exactly ONE Row */}
        <div className="skills-row">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="skill-cat-card"
              style={{ '--cat-accent': cat.accent }}
            >
              {/* Top Accent Strip */}
              <div className="skill-cat-card__accent-bar" />

              <div className="skill-cat-card__header">
                <div className="skill-cat-card__icon-box">
                  <span className="skill-cat-card__icon">{cat.icon}</span>
                </div>
                <div className="skill-cat-card__title-block">
                  <h3 className="skill-cat-card__title">{cat.category}</h3>
                  <span className="skill-cat-card__count">{cat.count}</span>
                </div>
              </div>

              <div className="skill-cat-card__list">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-badge">
                    {s}
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

export default Skills
