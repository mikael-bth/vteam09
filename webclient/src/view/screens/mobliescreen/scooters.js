import React from 'react';
import { Divider } from 'primereact/divider';

function Scooters() {
    const [Scooters, setScooters] = React.useState([]);

    React.useEffect(() => {
        fetch("/v1/scooters")
            .then((res) => res.json())
            .then((data) => setScooters(data));
    }, []);

    return (
        <div className="Body">
            <h1 className="pageHeader">Available scooters</h1>
            {!Scooters.data ? "Download..." : Scooters.data.map((scooter, index) => (
                <>
                <h3>Scooter {scooter.id}</h3>
                <p>Battery: {scooter.battery}</p>
                <p>Zone: {scooter.zone}</p>
                {index === Scooters.data.length - 1 ? <p></p> : <Divider />}
                </>
            ))}
        </div>
    )
}

export default Scooters;
