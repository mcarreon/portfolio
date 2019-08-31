const ResumeSection = ({ data, type }) => {
  if (type === "experience") {
    const { name, title, dates, length, location, description, link } = data;

    return (
      <div className="mt-4">
        {link ? <a href={link}>{name}</a> : <h3>{name}</h3>}
        <h4>{title}</h4>
        <p className="my-1">{`${dates[0]} - ${dates[1]} • ${length}`}</p>
        <ul className="pl-4">
          {description.map((desc, i) => (
            <li className="pb-3" key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    );
  } else if (type === "education") {
    const { name, title, subtitle, dates, link } = data;

    return (
      <div className="mt-4">
        {link ? <a href={link}>{name}</a> : <h3>{name}</h3>}
        <h4>{title}</h4>
        <p className="my-1">{name === "UCLA" ? `${subtitle}` : ""}</p>
        <p className="my-1">
          {name === "UCLA" ? `${dates[0]}` : `${dates[0]} - ${dates[1]}`}
        </p>
      </div>
    );
  } else if (type === "skills" || type === "tools") {
    const { name, skills } = data;
    const parseSkills = skills.join(', ');

    return (
      <div className="mt-4 skills">
        <h3>{name}</h3>
        <p>{parseSkills}</p>
      </div>
    );
  }

  return <div></div>;
};

export default ResumeSection;
