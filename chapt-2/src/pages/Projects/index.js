// external
import { useState, useEffect } from "react";

// local
import Link from "../../components/Link";
import List from "../../components/List";
import "./styles.css";

export default function Projects({ userName }) {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );

      const result = await data.json();

      if (result) {
        setProjects(result);
        console.log(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName]);

  return (
    <div className="Projects-container">
      <h2>Projects</h2>
      {loading ? <span>Loading...</span> : 
      <div>
        <List items={projects.map((project) =>({
            field: project.name,
            value: <Link url={project.html_url} title={project.html_url} />, }
        ))} />
    </div>}
    </div>
  );
}
