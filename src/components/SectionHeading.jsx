export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="reveal">
      <div className="eb">{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p className="sub">{description}</p>}
    </div>
  )
}
