import React, { useState } from "react";
import axios from 'axios';

const Form: React.FC = () => {


    const initialDataState: InitialDataState = {
        name: "",
        city: "",
        skills: []
    }

    const initialSkills: InitialSkills = [];
    const initialSkill = ""
    const [skills, setSkills]= useState(initialSkills);
    const [skill, setSkill] = useState(initialSkill);
    const [dataForm, setDataForm] = useState(initialDataState)

    const [error, setError] = useState("");

    // add to dataform the name and the city
    const handleChange = (event: any) => {
        setDataForm(
            (prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value
            })
        );
    }

    // controlled the value of skill
    const handleChangeSkill = (event: any) => {
        setSkill(event.target.value);
    }

    // add the skill to the array of skills and add the array to the dataform
    const handleChangeSkills = () => {
        setSkills([...skills, skill]);
        setSkill("");
        setDataForm((prevState) => ({
            ...prevState,
            skills: [...prevState.skills, {title: skill, votes: 0}]
        }));
    }

    // let user deletes skills
    const handleDeleteSkills = (event: any) => {
        // eslint-disable-next-line no-console
        console.log(event.target.innerText)
        if (skills.length === 1) {
            setSkills([]);
        } else {
            const index = skills.indexOf(event.target.innerText);
            setSkills(skills.splice(index-1, 1));
        }
        // Need to update the dataForm<----------------------------------------------------!
    }

    // create the wilder at submit
    const handleSubmit = async () => {
        try {
            const result = await axios.post("http://localhost:3000/api/wilders/", dataForm);
            if (result.data.success) {
                setError("");
            }
        } catch (err: any) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        }
    };

    return (
        <section className="addForm">
            <h2>Add a Wilder</h2>
            <form
                onSubmit={ handleSubmit }
            >
                <div>
                    <label htmlFor="name-input">Name :
                        <input
                            id="name-input"
                            type="text"
                            placeholder="Type the name"
                            name="name"
                            value={dataForm.name}
                            required
                            onChange={ handleChange }
                        />
                    </label>
                </div>
                <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="city-input">City :
                        <input
                            id="city-input"
                            type="text"
                            placeholder="Type the city"
                            name="city"
                            value={dataForm.city}
                            required
                            onChange={ handleChange }
                        />
                    </label>
                </div>
                <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="skills-input">Skills :
                        <input
                            id="skill-input"
                            type="text"
                            name= "skill"
                            placeholder="Type a skill"
                            value={skill}
                            onChange={ handleChangeSkill }
                        />
                    </label>
                </div>
                <button type="button" onClick={ handleChangeSkills } className="formButton">Add a skill</button>
                {error !== "" ? <p>{error}</p> : null}
                <div className="recapForm">
                    <p>Name : <span className="recapText">{dataForm.name}</span></p>
                    <p>City : <span className="recapText">{dataForm.city}</span></p>
                    <p>Skills (click on the skill to delete it) :</p>
                    <div>
                        {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                        {skills.length !== 0 && skills.map((skill) => <button type="button" key={skill} value={skill} onClick={handleDeleteSkills}>{skill}</button>)}
                    </div>
                </div>
                <button type="button" className="formButton">Add the Wilder</button>
            </form>
        </section>
    );

}

export default Form;