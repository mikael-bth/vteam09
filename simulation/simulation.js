let destinations = []
let distance = {}
let moveCount = {}
var scooters

async function updateSimulation() {
    while (true) {
        await new Promise(r => setTimeout(r, 2000));
        scooters = await getScooters();
        scooters = scooters.data;

        createDestinations();
        moveScooters();
    }
}

async function getScooters() {
    const response = await fetch("http://localhost:8080/v1/scooters");
    return response.json();
}

async function updateScooterPos(id, pos) {
    let data = {
        "id": id,
        "position": pos
    };
    let response = await fetch("http://localhost:8080/v1/scooter/position", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

function createDestinations() {
    scooters.forEach(scooter => {
        if (destinations.indexOf(scooter.id) == -1) {
            const lat = 56.16 + (Math.random() / 1000);
            const lng = 15.58 + (Math.random() / 1000);
            
            destinations.push(scooter.id)

            const scooterPos = scooter.position.split(",");
            const scooterLat = scooterPos[0];
            const scooterLng = scooterPos[1];

            const latDist = scooterLat - lat
            const lngDist = scooterLng - lng

            distance[scooter.id + "lat"] = latDist
            distance[scooter.id + "lng"] = lngDist

            moveCount[scooter.id] = 0
        }
    });
}

function moveScooters() {
    scooters.forEach(async (scooter) => {
        if (moveCount[scooter.id] <= 10) {
            // Add if tick distance it biggen then current distansce to desition doi 
            const scooterPos = scooter.position.split(",");
            let scooterLat = parseFloat(scooterPos[0]);
            let scooterLng = parseFloat(scooterPos[1]);

            scooterLat += distance[scooter.id + "lat"] / 10;
            scooterLng += distance[scooter.id + "lng"] / 10;
            // Add else move rest of destination that is left to be in right position acording to db

            console.log(await updateScooterPos(scooter.id, `${scooterLat},${scooterLng}`))

            moveCount[scooter.id] = moveCount[scooter.id] + 1
        } else {
            destinations.splice(destinations.indexOf(scooter.id), 1);
        }
    });
}
