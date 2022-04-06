import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import "./App.css";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoding, setIsLoding] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoding(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (isLoding) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }
  const { company, dates, title, duties } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, idx) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(idx)}
                className={`job-btn ${idx === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}

          <article className="jjob-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, idx) => {
              return (
                <div key={idx} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  {duty}
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
}

export default App;
