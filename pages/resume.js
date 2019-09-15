import resume from '../static/data.json';
import ResumeSection from '../components/resumeSection';

const Resume = () => {
  
  return (
    <div className="resume mt-6 container">
      <h2 className="mb-3">Resume</h2>
      <div className="resume--body border-y">
        <div className="resume--row border-bottom">
          <h3>{resume.experience.type}</h3>
          <div>
            {resume.experience.data.map(data => (
              <ResumeSection data={data} type="experience" key={data.name}/>  
            ))}
          </div>
        </div>
        <div className="resume--row border-bottom pb-4">
          <h3>{resume.education.type}</h3>
          <div>
            {resume.education.data.map(data => (
              <ResumeSection data={data} type="education" key={data.name}/>  
            ))}
          </div>
        </div>
        <div className="resume--row border-bottom pb-4">
          <h3>{resume.skills.type}</h3>
          <div>
            {resume.skills.data.map(data => (
              <ResumeSection data={data} type="skills" key={data.name}/>  
            ))}
          </div>
        </div>
        <div className="resume--row border-bottom pb-4">
          <h3>{resume.tools.type}</h3>
          <div>
            {resume.tools.data.map(data => (
              <ResumeSection data={data} type="tools" key={data.name}/>  
            ))}
          </div>
        </div>
        <div className="pb-4">
          <h3>Download</h3>
          <div className="mt-4">
            <a className="button" href="https://docs.google.com/document/d/1H5YAUGaZbJSruG4lCfjjZ1YxlAfg25gsY2qxXWOMWas/export?format=pdf">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
