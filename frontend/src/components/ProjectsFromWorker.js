import React, { useEffect, useState, Component } from "react";
import { getProjectsFromWorker } from "../http/workersService";

/*
class A extends Component{

    constructor(props) { 1
        super(props)
    }

    static getDerevi.... 2


    ComponentDidMount() { 4
        data = Axios.get

        this.setState({data})
    }

    componentWillMount

    render() {3
        return (this.state.data)
    }
}
*/

export default function ProjectsFromWorkers({ worker }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (worker) {
      getProjectsFromWorker(worker.id).then(response =>
        setProjects(response.data)
      );
    }

    //hacemos la llamada a la api
  }, [worker]);

  console.log(projects);

  return (
    <div className="App">
      <h1>Proyectos asociados</h1>
      {projects.length ? (
        <ul className="li">
          {projects.map((project, index) => (
            <li key={project.id}>{project.descripcion}</li>
          ))}
        </ul>
      ) : (
        "No hay proyectos"
      )}
    </div>
  );
}
