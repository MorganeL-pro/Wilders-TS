import React, { useEffect, useState } from "react";
import axios from 'axios';

interface Props {
    skill: ISkill;
  }


const Skill = ({ skill } : Props) : JSX.Element => {

    const [vote, setVotes] = useState(skill.votes);

    // need to catch my wilder to update her/him ----Need to change my update method

    useEffect(() => {

        const updateData = async () => {
            try {
                await axios.post("http://localhost:3000/api/wilders/update");
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        }
        updateData();
    }, [])

    const handleClick = () => {
        setVotes(vote + 1);
    }

    return(
        <>
            <button type="button" onClick={ handleClick }>{ skill.title } <span>{ vote }</span></button>
        </>
    )
}

export default Skill;