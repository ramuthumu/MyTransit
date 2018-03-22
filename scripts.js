
var links= ["https://svc.metrotransit.org/NexTrip/645/2/SHNA?format=json","https://svc.metrotransit.org/NexTrip/535/1/MA8S?format=json","https://svc.metrotransit.org/NexTrip/535/4/76NE?format=json","https://svc.metrotransit.org/NexTrip/645/3/7SMA?format=json"]

for (var i in links) {
    var request = new XMLHttpRequest();
    request.open('GET', links[i], true);

request.onload = function () {
    // Begin accessing JSON data here
    const app = document.getElementById('root');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);

    if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);
    data.forEach(vehicle => {
        // Log each movie's title
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const h1 = document.createElement('h3');
        h1.textContent = vehicle.Description;
        const p = document.createElement('p');
        p.textContent = vehicle.DepartureText
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);

    });
} else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
}
}
}
request.send();
