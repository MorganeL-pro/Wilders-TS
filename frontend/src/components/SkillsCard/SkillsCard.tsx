import React from "react";
import Skill from '../Skill/Skill';

interface Props {
    skills: ISkill[];
  }
  
  const Skills = ({ skills }: Props): JSX.Element => (

      <div className="skills">
      {skills.map((skill) => (
        // eslint-disable-next-line react/no-array-index-key
        <Skill key={ skill._id } skill={skill} />
        ))}
      </div>

  )

  
  export default Skills;
  