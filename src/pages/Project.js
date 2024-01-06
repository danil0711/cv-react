import BtnGitHub from "../Components/btnGitHub/BtnGitHub";
import img from "./../img/projects/02-big.jpg"
import { projects } from "../helpers/projectsList";

import {useParams} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackButton from "../Components/BackButton/BackButton";


const Project = () => {
    const {id} = useParams();
    const project = projects[id]

    console.log(project);
    return (
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>
                <p>Кликни на картинку, чтобы протестировать!</p>

                <a href={project.gitHubPages} target="_blank"><img src={project.bigImg} alt="" className="project-details__cover"/></a>
                
                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>

                <div className="project-details__desc_full">
                <p>{project.description}</p>
                </div>

                <BtnGitHub link={project.gitHubLink}/>
                <BackButton/>
                    <Routes>
                        <Route path="/back" element={<BackButton/>}></Route>
                    </Routes>
            </div>
        </div>
    </main>   
    );
}
 
export default Project;