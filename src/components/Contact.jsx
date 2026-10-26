import { useState } from 'react'
import './Contact.css'

const RECIPIENT_EMAIL = 'akileshvj726@gmail.com'
const FORMSUBMIT_TOKEN = '5b9256e87bdf0d8ffaa7cf3496f1d275'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'info', message: 'Sending your message...' })

    // If running in local development mode, simulate instant successful send
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setTimeout(() => {
        setStatus({
          type: 'success',
          message: `✓ Thank you, ${formData.name}! Your message has been sent successfully.`,
        })
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitting(false)
      }, 600)
      return
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'box',
          _captcha: 'false',
        }),
      })

      const data = await response.json()

      if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
        setStatus({
          type: 'success',
          message: `✓ Thank you, ${formData.name}! Your message has been sent directly to ${RECIPIENT_EMAIL}. I will reply to ${formData.email} shortly.`,
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch {
      setStatus({
        type: 'error',
        message: `Could not send message automatically. Please email ${RECIPIENT_EMAIL} directly.`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmail = () => {
    navigator.clipboard?.writeText(RECIPIENT_EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact-section" aria-label="Contact Akilesh Hariharan">
      <div className="contact-section__container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__tag">Get in Touch</span>
          <h2 className="section-header__title">
            Let&apos;s Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="section-header__desc">
            Available for frontend engineering, UI/UX architecture, enterprise web apps, and full-time opportunities.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-layout">
          {/* Info Card */}
          <div className="contact-info-card">
            <h3 className="contact-info-card__title">Direct Channels</h3>
            <p className="contact-info-card__text">
              Feel free to reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
            </p>

            <div className="contact-cards-list">
              <div className="contact-card-item">
                <div className="contact-card-item__icon">✉️</div>
                <div className="contact-card-item__body">
                  <span className="contact-card-item__label">Email</span>
                  <a href={`mailto:${RECIPIENT_EMAIL}`} className="contact-card-item__value">
                    {RECIPIENT_EMAIL}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="contact-card-item__copy-btn"
                  title="Copy email address"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-item__icon">📞</div>
                <div className="contact-card-item__body">
                  <span className="contact-card-item__label">Phone</span>
                  <a href="tel:+919514142099" className="contact-card-item__value">
                    +91-9514142099
                  </a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-item__icon">💼</div>
                <div className="contact-card-item__body">
                  <span className="contact-card-item__label">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/akileshhari2001"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card-item__value"
                  >
                    linkedin.com/in/akileshhari2001 ↗
                  </a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-item__icon">📍</div>
                <div className="contact-card-item__body">
                  <span className="contact-card-item__label">Location</span>
                  <span className="contact-card-item__value">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-card__title">Send a Quick Message</h3>
            <form
              onSubmit={handleSubmit}
              className="contact-form"
              action={`https://formsubmit.co/${FORMSUBMIT_TOKEN}`}
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="form-input"
                  value={formData.name}
                  disabled={isSubmitting}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="form-input"
                  value={formData.email}
                  disabled={isSubmitting}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project, timeline, or opportunity..."
                  className="form-input form-textarea"
                  value={formData.message}
                  disabled={isSubmitting}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={`contact-submit-btn${isSubmitting ? ' contact-submit-btn--loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="contact-submit-spinner" aria-hidden="true" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>

              {status.message && (
                <div
                  className={`form-status form-status--${status.type}`}
                  role={status.type === 'error' ? 'alert' : 'status'}
                >
                  {status.message}
                </div>
              )}

              <p className="contact-form-alt">
                Prefer direct email?{' '}
                <a
                  href={`mailto:${RECIPIENT_EMAIL}?subject=Portfolio Inquiry`}
                  className="contact-form-alt-link"
                >
                  Send via your email app ↗
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

