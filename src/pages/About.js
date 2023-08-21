import {skills} from '../data'
import './About.css'

export default function About(){


    return(
        <div className="about-container">
            
            <h1>Enter the Wu</h1>
            <div className="paragraph">
                <p>Hello, I am Johnny Wu. I have a Bachelor of Science in Mechanical Engineering from Syracuse University. I have 3 years of Manufacturing engineering experience. (Mechanical Engineering + Manufacturing Engineer = Meme). I am the back to back coding Bootcamp practitioner. Having completed Flatiron Coding School and Google & Comcast sponsored Per Scholas software engineering cohort. I enjoy learning new technologies to add into my bag(repertoire). Inspired by Comic books and Super Heroes (Ironman and Batman) creating gadgets and inventions was my fuel to become an engineer. However, in this digital age creating things aren't just physical anymore but, now also digital. Transitioning into tech, to help build components, features, and your ideas to fruition.  </p>
                <p> My hobbies include: fishing, basketball, 3D printing, CAD (Computer-Aided Design), eating, sleeping, and coding.</p>
            </div>
            
            <h3>Skills</h3>
            <div className="skill-container">
                
                {skills.map((skill, index)=> {
                    return(
                        <div key={index}>
                        <p className="skill">{skill.program}</p>
                        <img className= "plogo" src={skill.logo} alt={skill.program}/>  
                        </div>
                    )
                })}
            
            </div>
        </div>
    )
}