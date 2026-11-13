import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import './Contact.css'

const resume = 'https://drive.google.com/file/d/1UkRgzrVCLAuJ7-6juik8KI828508MuF4/view?usp=sharing'

export default function Contact() {
  return (
    <section id="contact" className="alt">
      <div className="w reveal">
        <div className="contact-card">
          <div className="eb">07 / CONTACT</div>
          <h2>Let&apos;s build something<br />meaningful together.</h2>
          <p>
            I&apos;m open to opportunities in Backend Development, Python Engineering and AI
            Application Development.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:banerjeesayan554@gmail.com"><Mail size={16} />Email Me</a>
            <a className="btn" href="https://www.linkedin.com/in/sayan14banerjee/" target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn <ArrowUpRight size={14} /></a>
            <a className="btn" href="https://github.com/sayan14banerjee" target="_blank" rel="noreferrer"><Github size={16} />GitHub <ArrowUpRight size={14} /></a>
            <a className="btn" href={resume} target="_blank" rel="noreferrer"><ArrowDown size={16} />Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
