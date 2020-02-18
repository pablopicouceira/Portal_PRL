import React from "react";

export function VictoryPie() {
  const [validos, setValidos] = useState([]);
  useEffect(() => {
    getProjectsByUser().then(response => setProjects(response.data));
  }, []);
  console.log(projects);
  return <h1>{projects.length} actuaciones creadas</h1>;
}
