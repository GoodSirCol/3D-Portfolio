import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">

        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Ayub</span>
        </h1>

        <div className="mt-5 flex-col gap-3 text-slate-500">
        <p className="text-lg"> 
          <p>I am an undergraduate student pursuing a Bachelor's in Computer Science at the University of St. Thomas. My primary goal is to become a software developer who develops practical and effective software solutions that address real-world challenges. To achieve this, I am focusing on learning programming skills and creating projects, which uses React.js to enhance my understanding of front-end development and user interface design. These experiences help me gain hands-on experience and stay current with technological innovations and best practices.</p>
        </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3> 
          <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
              src={skill.imageUrl}
              alt={skill.name}
              className="w-1/2 h-1/2 object-contain"
              title={skill.name}
                />
            </div>
          </div>
          ))}
          </div>
        </div>
        
        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
            <div className="mt-5 flex-col gap-3 text-slate-500">
            <p>All the companies i've worked with and their details! Here's the rundown:</p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className="flex justify-center items-center w-full h-full"> 
                  <img
                  src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                    title={experience.company_name}
                    />
                  </div>}
                  iconStyle={{ background: experience.iconBg }}

                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}   
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`}className="text-black-500/50 front-normal pl-1 text-sm">
                        {point}
                      </li>
                    )
                  
                  )}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-slate-200" />

        <CTA />
    </section>
  )
}

export default About