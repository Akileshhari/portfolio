import { useEffect } from 'react'
import './CaseStudyModal.css'

function CaseStudyModal({ caseStudy, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!caseStudy) return null

  return (
    <div className="cs-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="cs-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="cs-modal-header">
          <div className="cs-modal-header__info">
            <span className="cs-modal-tag">{caseStudy.category}</span>
            <span className="cs-modal-confidential">
              🔒 Sanitized Case Study (NDA &amp; Security Compliant)
            </span>
          </div>
          <button
            type="button"
            className="cs-modal-close"
            onClick={onClose}
            aria-label="Close Case Study"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="cs-modal-body">
          {/* Cover & Hero */}
          <div className="cs-hero">
            <h2 className="cs-hero__title">{caseStudy.title}</h2>
            <p className="cs-hero__subtitle">{caseStudy.subtitle}</p>

            {/* Quick Metadata Bar */}
            <div className="cs-meta-grid">
              <div className="cs-meta-item">
                <span className="cs-meta-label">My Role</span>
                <span className="cs-meta-val">{caseStudy.role || 'UI/UX & Frontend Developer'}</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Platform</span>
                <span className="cs-meta-val">{caseStudy.platform}</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Core Tech</span>
                <span className="cs-meta-val">{caseStudy.techStack.join(' • ')}</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Client Domain</span>
                <span className="cs-meta-val">{caseStudy.domain}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics / Impact Highlight Strip */}
          <div className="cs-metrics-strip">
            <h3 className="cs-metrics-title">📊 Quantifiable Business Impact</h3>
            <div className="cs-metrics-grid">
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className="cs-metric-card">
                  <span className="cs-metric-card__value">{m.value}</span>
                  <span className="cs-metric-card__label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Overview & Context */}
          <div className="cs-section">
            <h3 className="cs-section__title">1. Executive Overview</h3>
            <p className="cs-section__text">{caseStudy.overview}</p>
          </div>

          {/* Section: Problem vs Solution Grid */}
          <div className="cs-section">
            <div className="cs-split-grid">
              {/* Problem Column */}
              <div className="cs-box cs-box--problem">
                <div className="cs-box__header">
                  <span className="cs-box__icon">⚠️</span>
                  <h4 className="cs-box__title">The Challenge &amp; Bottlenecks</h4>
                </div>
                <ul className="cs-box__list">
                  {caseStudy.painPoints.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Solution Column */}
              <div className="cs-box cs-box--solution">
                <div className="cs-box__header">
                  <span className="cs-box__icon">💡</span>
                  <h4 className="cs-box__title">Engineering &amp; UX Solution</h4>
                </div>
                <ul className="cs-box__list">
                  {caseStudy.solutions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Key Features Built */}
          <div className="cs-section">
            <h3 className="cs-section__title">2. Key Features &amp; User Flows</h3>
            <div className="cs-features-grid">
              {caseStudy.features.map((feat) => (
                <div key={feat.title} className="cs-feature-card">
                  <div className="cs-feature-card__icon">{feat.icon}</div>
                  <h4 className="cs-feature-card__title">{feat.title}</h4>
                  <p className="cs-feature-card__desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Security & Architecture Note */}
          <div className="cs-security-note">
            <span className="cs-security-icon">🛡️</span>
            <div>
              <strong>Security &amp; Architecture Standards</strong>
              <p>
                Engineered with enterprise role-based access control (RBAC), end-to-end data encryption in transit,
                sanitized API telemetry, and WCAG 2.1 AA accessibility guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="cs-modal-footer">
          {caseStudy.figmaLink ? (
            <a
              href={caseStudy.figmaLink}
              target="_blank"
              rel="noreferrer"
              className="cs-modal-btn cs-modal-btn--primary"
            >
              <span>Explore Interactive Figma Prototype 🎨</span>
            </a>
          ) : caseStudy.liveLink ? (
            <a
              href={caseStudy.liveLink}
              target="_blank"
              rel="noreferrer"
              className="cs-modal-btn cs-modal-btn--primary"
            >
              <span>Visit Live Web Platform ↗</span>
            </a>
          ) : null}

          <button
            type="button"
            className="cs-modal-btn cs-modal-btn--secondary"
            onClick={onClose}
          >
            <span>Close Case Study</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyModal

