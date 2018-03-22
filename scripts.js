
var links= ["https://svc.metrotransit.org/NexTrip/645/2/SHNA?format=json","https://svc.metrotransit.org/NexTrip/535/1/MA8S?format=json","https://svc.metrotransit.org/NexTrip/535/4/76NE?format=json","https://svc.metrotransit.org/NexTrip/645/3/7SMA?format=json"]

for (var i in links) {
    var request = new XMLHttpRequest();
    request.open('GET', links[i]);
    request.timeout = 2000
    
request.onload = function (i) {
    
    // Begin accessing JSON data here
    const app = document.getElementById('root');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);

    if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);
    data.forEach(vehicle => {
        // Log each movie's title
        if(vehicle.Actual==true){
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const h1 = document.createElement('h3');
        h1.textContent = vehicle.Description;
        const p = document.createElement('p');
        p.textContent = vehicle.DepartureText;
        const p1 = document.createElement('p');
        p1.textContent = vehicle.Route;
        const p2 = document.createElement('p');
        p2.textContent = vehicle.RouteDirection;
            
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(p1);
        card.appendChild(p2)
        }
    });
} else {
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = request.status;
        app.appendChild(errorMessage);
}
}
    request.send();
}

