import axios from 'axios';
import React from "react";
import SkillsCard from '../SkillsCard/SkillsCard';

const WilderCard: (wilder: IWilder) => JSX.Element = (wilder: IWilder) => {

    const {name, city, skills} = wilder;
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/wilders/${wilder._id}/delete`);
            // eslint-disable-next-line no-alert
            alert("Wilder has been deleted.");
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log("error");
        }
    }
    // figure how to refresh the page after deleting an element

    // passer la méthode handledelete à wilders et la récupérer ici en props ??

    return (
        <div className="card">
            <button type="button" onClick={handleDelete} className="deleteButton">X</button>
            <img className="card-img" src="https://i.ibb.co/dKhF5q2/silhouette.png" alt="card"/>
            <div className="card-body">
                <h2 className="card-title">{ name }</h2>
                <p className="city">{ city }</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna nibh, faucibus mollis convallis nec, commodo ullamcorper lorem...</p>
                <h3>Wild Skills</h3>
                <SkillsCard skills={skills}/>
            </div>
        </div>
    )
}

export default WilderCard;