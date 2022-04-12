import axios from 'axios';
import React, { useState, useEffect } from 'react';
import WilderCard from '../WilderCard/WilderCard';

const Wilders: React.FC = () => {

    const [wilders, setWilders] = useState<IWilder[]>([]);

    const fetchData = async () => {
        try {
            const result = await axios.get(
                "http://localhost:3000/api/wilders/"
            );
            setWilders(result.data.result);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="container">
            <h2>Wilders</h2>
            <div className="cardsContainer">
                { wilders && wilders.length !== 0 && wilders.map((wilder) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <WilderCard key={wilder._id} {...wilder} />
                ))}
            </div>
        </section>
    );
}

export default Wilders;