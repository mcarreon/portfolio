import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import Project from '../components/project'; 
import db from "../firebase";

const Home = () => {
  const [value, loading, error] = useCollectionDataOnce(
    db.collection("projects")
  );
  let work, project = [];

  if (value !== undefined) {
    value.sort((a, b) => {
      return b.date.seconds - a.date.seconds;
    })

    work = value.filter(doc => {
      return doc.type === "work";
    });

    project = value.filter(doc => {
      return doc.type === "project";
    });

    console.log(project);
  }


  if (value === undefined) {
    return (
      <div className="work mt-6 container mb-8">
        <h2>Work</h2>
        <div className="work--loading mt-6">
          <div className="lds-ripple">
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="work mt-6 container">
      <h2>Work</h2>
      <div className="work--project-container">
        {work.map((data, i) => {
          return <Project 
          key={i}
          project={data}
          />;
        })}
      </div>
      <h2>Projects</h2>
      <div className="work--project-container">
        {project.map((data, i) => {
          return <Project 
          key={i}
          project={data}
          />;
        })}
      </div>
    </div>
  );
};

export default Home;

