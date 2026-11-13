import SectionHeading from './SectionHeading.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section alt">
      <div className="w reveal">
        <SectionHeading eyebrow="01 / ABOUT" title="Engineering with curiosity." />
        <div className="about-grid">
          <div>
            <p>
              I am a software developer with an academic background in Computer Science, currently
              pursuing my Master of Computer Applications at the University of North Bengal.
            </p>
            <p>
              My primary interest lies in backend development and building AI-powered applications.
              I have worked with Python, FastAPI, Django, Node.js, databases and REST APIs, while
              exploring LLM integrations, semantic search, vector databases, Retrieval-Augmented
              Generation and AI agent workflows.
            </p>
            <p>
              I enjoy taking ideas from concept to implementation, understanding system architecture
              and solving practical engineering problems.
            </p>
            <p>
              Currently, I am developing NEXORA, an AI-powered workspace, while strengthening my
              backend engineering skills.
            </p>
          </div>
          <aside className="focus-panel">
            <h3>CURRENT FOCUS</h3>
            <strong>Backend systems and applied AI.</strong>
            <p>Building useful software with thoughtful architecture and clear interfaces.</p>
            <dl>
              <dt>language</dt><dd>Python</dd>
              <dt>framework</dt><dd>FastAPI</dd>
              <dt>building</dt><dd>NEXORA</dd>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
