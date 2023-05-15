console.log("Script ready")

let map;
let markers = [];

window.onload = function() {
    setMarkers();
    updateMap();
}

window.initMap = initMap;

async function updateMap() {
    while (true) {
        await new Promise(r => setTimeout(r, 5000));
        updateMarkers();
        console.log("map reloaded")
    }
}

async function getScooters() {
    const response = await fetch("http://localhost:8080/v1/scooters");
    return response.json();
}

async function setMarkers() {
    let scooters = await getScooters();
    scooters = scooters.data

    scooters.forEach(scooter => {
        const scooterPos = scooter.position.split(",");
        const scooterLatLng = {lat: parseFloat(scooterPos[0]), lng: parseFloat(scooterPos[1])};
        const scooterLive = scooter.live === 1 ? "Scooter is live" : "Scooter is not live";
        const scooterActive = scooter.active === 1 ? "Scooter is active" : "Scooter is not active";
        const scooterService = scooter.service === 1 ? "Scooter needs service" : "Scooter doesn't need service";
        const marker = new google.maps.Marker({
            position: scooterLatLng,
            map: map,
            name: scooter.id,
            title: `Scooter ${scooter.id}`,
            battery: `Battery: ${scooter.battery}`,
            location: `Location: Lat ${scooterPos[0]}, Long ${scooterPos[1]}`,
            live: scooterLive,
            active: scooterActive,
            service: scooterService
        });
      
        marker.addListener('click', function() {
            var infoWindow = new google.maps.InfoWindow({
                content: `<h3>${this.title}</h3>
                <p>${this.location}</p>
                <p>${this.battery}</p>
                <p>${this.live}</p>
                <p>${this.active}</p>
                <p>${this.service}</p>`
            });
        
            infoWindow.open(map, this);
        });
        markers.push(marker)
    });
}

async function updateMarkers() {
    let scooters = await getScooters();
    scooters = scooters.data
    markers.forEach((marker, index) => {
        scooterIndex = scooters.findIndex(scooter => scooter.id === marker.name)
        if (scooterIndex === -1) {
            marker.setMap(null);
            markers.slice(index, 1)
        } else {
            const scooterPos = scooters[scooterIndex].position.split(",");
            const scooterLatLng = {lat: parseFloat(scooterPos[0]), lng: parseFloat(scooterPos[1])};
            const scooterLive = scooters[scooterIndex].live === 1 ? "Scooter is live" : "Scooter is not live";
            const scooterActive = scooters[scooterIndex].active === 1 ? "Scooter is active" : "Scooter is not active";
            const scooterService = scooters[scooterIndex].service === 1 ? "Scooter needs service" : "Scooter doesn't need service";
            console.log(scooterLatLng)
            marker.setPosition(scooterLatLng);
            marker.location = `Location: Lat ${scooterPos[0]}, Long ${scooterPos[1]}`;
            marker.battery = `Battery: ${scooters[scooterIndex].battery}`;
            marker.live = scooterLive;
            marker.active = scooterActive,
            marker.service = scooterService
        }
    });
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 56.16156, lng: 15.58661},
        zoom: 12
    });
}