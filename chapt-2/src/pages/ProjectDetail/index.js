import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//local
import Link from "../../components/Link";

export default function Project({ userName }) {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/repos/${userName}/${name}`
      );

      const result = await data.json();

      if (result) {
        setProject(result);
        setLoading(false);
      }
    }
    if (userName && name) {
      fetchData();
    }
  }, [userName, name]);

  return (
    <div>
        <h2>Project: {project.name}</h2>
        { loading ? (
            <span>Loading...</span>
        ) : (
            <div>
                <p>name: <code>{project.name}</code></p>
               <p>html url: <Link url={project.html_url} title={project.html_url} /></p>
                <p>descrption: <code>{project.description}</code></p>
                <p>created: <code>{project.created_at}</code></p>
                <p>last updated: <code>{project.updated_at}</code></p>
                <p>stargazerscount: <code>{project.stargazers_count}</code></p>
            </div>
        )}
    </div>
  )
}
