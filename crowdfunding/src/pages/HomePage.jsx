import React, { useState, useEffect } from "react"
import { allProjects } from "../data"
import ProjectCard from "../components/ProjectCard"

function HomePage() {
  const [projectList, setProjectList] = useState([])

  // When we mount our App, we want to store the contents
  // of allProjects in our state

  // useEffect(() => {
  //   setProjectList(allProjects)
  // }, [])
  // empty watching (second arg) means it only runs the function (setProjectList) once

  useEffect(() => {
    // When we mount our homepage, I want to get our projects from our DRF API
    // that we created in the DRF module through a get request

    fetch(`${process.env.REACT_APP_API_URL}projects/`)
    .then ((results) => {
    return results.json()
  })
  .then((data) => {
    setProjectList(data)
  })
  }, [])

  return (
    <div id="project-list">
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />
      })}
    </div>
  )
}

export default HomePage