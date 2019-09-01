import data from '../static/data.json';

const About = () => {
  const { connect, about } = data;


  return (
    <div className="about mt-6 container">
      <h2 className="mb-3">About</h2>
      <div className="about--body border-y pb-3">
        <div className="about--connect">
          <h3>
            Let's Connect
          </h3>
          <div>
            <ul className="pl-0">
              {connect.data.map(data => (
                <li className="mt-3" key={data.name}><a href={data.link}><span>{data.name}</span></a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about--content">
          <h3>Hello!</h3>
          {about.data.map(text => (
            <p>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
