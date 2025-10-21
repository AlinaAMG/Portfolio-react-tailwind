import  aboutSvg  from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Motivated Junior Fullstack Developer from Rotterdam with a strong
            analytical mind and logical thinking. I am eager to learn and
            continuously improve my skills, aiming to become a reliable developer
            who makes a visible impact. I am energetic in social interactions,
            dynamic, enterprising,curious, and investigative. I communicate well
            and enjoy teamwork, while also being able to work independently.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
