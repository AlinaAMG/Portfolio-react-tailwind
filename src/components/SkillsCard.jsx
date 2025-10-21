

const SkillsCard = ({skill}) => {
  return (
    <article>
          <span>{skill.icon}</span> 
          <h4 className="mt-6 font-bold">{skill.title}</h4>
          <p className="mt-2 text-slate-500">{skill.text}</p>
    </article>
  )
}

export default SkillsCard
