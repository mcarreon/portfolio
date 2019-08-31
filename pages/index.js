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
  }


  if (value === undefined) {
    return (
      <div className="work mt-6 container">
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

// Chrome Browser Extension that gives your browser tab new functionality. Allows you to take persisting notes in beautiful Markdown! Comes with a handy Markdown guide to assist in efficient note taking. Optimized for desktop use only.

// A Fantasy Football utility webapp that allows users to track QB success rates against specific opponents. Proof of concept built by a dedicated team of 4 developers. I handled the front-end portion and acted as lead developer. Users can create accounts and save the QBs that they want to track.

// A web app to assist companies in creating and scheduling carpools. Comes with an admin console and varying user permissions.
