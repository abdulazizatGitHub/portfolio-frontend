import React, { useRef, useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from 'react-icons/fa';
import '../Assets/CSS/Contact.css';
import useFadeOnScroll from '../hooks/useFadeOnScroll';
import { CONTACT_INFO_ITEMS as MOCK_CONTACT, SOCIAL_LINKS as MOCK_SOCIAL } from '../data/mockData';

// ===========================
// CONTACT PAGE CONTENT CONFIG
// ===========================

const CONTACT_TEXT = {
  heading: {
    prefix: 'Get In',
    highlight: 'Touch',
  },
  subtitle: "Let's discuss your project and build something amazing together!",
  infoTitle: 'Contact Information',
  infoDescription: 'Feel free to reach out to me through any of the following channels:',
  successTitle: 'Thank You!',
  successMessage: "Your message has been sent successfully. I'll get back to you soon!",
};

const CONTACT_INFO_ITEMS = MOCK_CONTACT.map((item) => ({
  ...item,
  icon: item.id === 'email' ? FaEnvelope : item.id === 'phone' ? FaPhone : FaMapMarkerAlt,
}));

const SOCIAL_LINKS = MOCK_SOCIAL.map((item) => ({
  ...item,
  icon: item.id === 'linkedin' ? FaLinkedin : FaGithub,
}));

function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const sectionClass = useFadeOnScroll(sectionRef, 0.2);
  const headingClass = useFadeOnScroll(headingRef, 0.2);
  const formClass = useFadeOnScroll(formRef, 0.2);
  const infoClass = useFadeOnScroll(infoRef, 0.2);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Full Name is required.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^\d{11,14}$/.test(form.phone)) {
      newErrors.phone = 'Phone Number must be 11-14 digits.';
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Email Subject is required.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setForm((f) => ({ ...f, [name]: value.replace(/[^\d]/g, '') }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
        setIsSubmitting(false);

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section className={`contact ${sectionClass}`} id="contact" ref={sectionRef}>
      <h2 ref={headingRef} className={`heading ${headingClass}`}>
        {CONTACT_TEXT.heading.prefix} <span>{CONTACT_TEXT.heading.highlight}</span>
      </h2>

      <p className="contact-subtitle">{CONTACT_TEXT.subtitle}</p>

      <div className="contact-container">
        {/* Contact Information */}
        <div ref={infoRef} className={`contact-info ${infoClass}`}>
          <h3>{CONTACT_TEXT.infoTitle}</h3>
          <p>{CONTACT_TEXT.infoDescription}</p>

          <div className="contact-info-items">
            {CONTACT_INFO_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div className="contact-info-item" key={item.id}>
                  <div className="contact-icon">
                    <Icon />
                  </div>
                  <div className="contact-details">
                    <h4>{item.label}</h4>
                    {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="social-links">
            <h4>Follow Me</h4>
            <div className="social-icons">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className={`contact-form-container ${formClass}`}>
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>{CONTACT_TEXT.successTitle}</h3>
              <p>{CONTACT_TEXT.successMessage}</p>
              <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="input-box">
                <div className="input-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={errors.name ? 'error' : ''}
                  />
                  <span className="focus"></span>
                  {errors.name && <div className="error-msg">{errors.name}</div>}
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={errors.email ? 'error' : ''}
                  />
                  <span className="focus"></span>
                  {errors.email && <div className="error-msg">{errors.email}</div>}
                </div>
              </div>

              <div className="input-box">
                <div className="input-field">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    maxLength={14}
                    className={errors.phone ? 'error' : ''}
                  />
                  <span className="focus"></span>
                  {errors.phone && <div className="error-msg">{errors.phone}</div>}
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Email Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className={errors.subject ? 'error' : ''}
                  />
                  <span className="focus"></span>
                  {errors.subject && <div className="error-msg">{errors.subject}</div>}
                </div>
              </div>

              <div className="textarea-field">
                <textarea
                  name="message"
                  cols={30}
                  rows={6}
                  placeholder="Your Message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={errors.message ? 'error' : ''}
                ></textarea>
                <span className="focus"></span>
                {errors.message && <div className="error-msg">{errors.message}</div>}
              </div>

              <div className="btn-box">
                <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Contact);
