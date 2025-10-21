
import { links } from "../data";
import Link from "./Link";

const Navbar = () => {
  return (
      <nav className="bg-purple-200">
          <div className = "flex flex-col py-4 font-semibold align-element sm:flex-row sm:gap-x-16 sm:items-center sm:justify-between sm:py-8">
              <h2 className="text-3xl font-bold">
                  Web<span className = "text-purple-600">Dev</span>
              </h2>
              <div className="flex gap-x-3">
                  {links && links.map(link => (
                      <Link link={link} key={link.id} />
                  ))}
              </div>
          </div>
    </nav>
   
  )
}

export default Navbar;
