import resume from '../static/resume.json';
import ResumeSection from '../components/resumeSection';

const Resume = () => {
  
  return (
    <div className="resume mt-6 container">
      <h2 className="mb-3">Resume</h2>
      <div className="resume--body border-y">
        <div className="border-bottom">
          <h3>{resume.experience.type}</h3>
          <div>
            {resume.experience.data.map(data => (
              <ResumeSection data={data} type="experience"/>  
            ))}
          </div>
        </div>
        <div className="border-bottom pb-4">
          <h3>{resume.education.type}</h3>
          <div>
            {resume.education.data.map(data => (
              <ResumeSection data={data} type="education"/>  
            ))}
          </div>
        </div>
        <div className="border-bottom pb-4">
          <h3>{resume.skills.type}</h3>
          <div>
            {resume.skills.data.map(data => (
              <ResumeSection data={data} type="skills"/>  
            ))}
          </div>
        </div>
        <div className="pb-4">
          <h3>{resume.tools.type}</h3>
          <div>
            {resume.tools.data.map(data => (
              <ResumeSection data={data} type="tools"/>  
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
