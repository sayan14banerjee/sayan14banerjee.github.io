import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'
import './Contact.css'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sayan14banerjee@gmail.com',
    href: 'mailto:sayan14banerjee@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sayan-banerjee',
    href: 'https://linkedin.com/in/sayan-banerjee'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/sayan14banerjee',
    href: 'https://github.com/sayan14banerjee'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 XXXXXXXXXX',
    href: 'https://wa.me/91XXXXXXXXXX'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let's Build Together</h2>
        
        <p className="contact-subtitle">
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out if you'd like to collaborate.
        </p>

        <div className="contact-grid">
          {contactLinks.map((link, idx) => {
            const Icon = link.icon
            return (
              <a 
                key={idx} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <Icon size={28} />
                </div>
                <h3>{link.label}</h3>
                <p>{link.value}</p>
              </a>
            )
          })}
        </div>

        <div className="contact-cta">
          <a href="mailto:sayan14banerjee@gmail.com" className="btn btn-primary">
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  )
}
