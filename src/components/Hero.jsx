import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="py-24 bg-purple-200">
      <div className="grid items-center align-element md:grid-cols-2 gap:8">
        <article>
          <h1 className="font-bold tracking-wider text-7xl">I'm Alina</h1>
          <p className="mt-4 text-3xl tracking-wide capitalize text-slate-700">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg tracking-wide capitalize text-slate-700">
            Turning Ideas into interactive reality
          </p>
          <div className="flex mt-4 gap-x-4">
            <a href="https://github.com/AlinaAMG" target="_blank">
              <FaGithubSquare className="w-8 h-8 duration-300 text-slate-600 hover:text-purple-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/alina-gabur-2ab539309/"
              target="_blank"
            >
              <FaLinkedin className="w-8 h-8 duration-300 text-slate-600 hover:text-purple-600" />
            </a>
          </div>
              </article>
              <article className="hidden md:block">
                  <img src={heroImg} className="h-80 lg:h-96"/>
              </article>
      </div>
    </div>
  );
};

export default Hero;
