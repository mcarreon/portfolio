const Project = ({ project }) => {
  const { demo, description, name, source, tags, title, store } = project;

  let storeImg; 

  if (store) {
    storeImg = <a href={store} target="__blank"><img src="/static/chrome-badge.png" /></a>;
  }

  return (
    <div className="project p-3 mr-3 mb-3">
      <h3 className="my-1">{name}</h3>
      {title ? <h4 className="my-1">{title}</h4> : <div></div>}
      <p className="my-3">{description}</p>
      <div className="project--store">
        {storeImg ? storeImg : ''}
      </div>
      <div className="mt-auto">
        <div className="project--links my-3">
          <div className="mr-4">
            <a href={ demo } target="__blank">Demo</a>
          </div>
          <div>
            <a href={ source } target="__blank" className={source ? '' : 'inactive'} >Source</a>
          </div>
        </div>
        <div className="project--tags">
          {tags.map(tag => (
            <div className="mr-3 my-1 py-1 px-3">
              <p className="m-0">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
