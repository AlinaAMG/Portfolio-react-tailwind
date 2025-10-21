

const Link = ({link}) => {
  return (
      <a href={link.href}
          className="text-lg tracking-wide capitalize duration-300  hover:text-purple-600 ">
      {link.text}
    </a>
  )
}

export default Link
