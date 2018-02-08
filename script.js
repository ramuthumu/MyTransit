var requestURL = 'http://svc.metrotransit.org/NexTrip/535/4/76NE?format=json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
