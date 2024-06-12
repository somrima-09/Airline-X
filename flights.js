const flightData = [
    {
        "class": "Economy",
        "depart": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "21:30",
            "from": "DEL",
            "to": "BLR",
            "arrival": "03:05",
            "duration": "5h 35m",
            "stops": "1 stop (2h 20m at Pune)"
        },
        "return": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "05:20",
            "from": "BLR",
            "to": "DEL",
            "arrival": "09:35",
            "duration": "4h 15m",
            "stops": "1 stop (30m at Gwalior)"
        },
        "price": "11,417",
        "currency": "INR"
    },
    {
        "class": "Economy",
        "depart": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "21:30",
            "from": "DEL",
            "to": "BLR",
            "arrival": "03:05",
            "duration": "5h 35m",
            "stops": "1 stop (2h 20m at Pune)"
        },
        "return": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "05:20",
            "from": "BLR",
            "to": "DEL",
            "arrival": "09:35",
            "duration": "4h 15m",
            "stops": "1 stop (30m at Gwalior)"
        },
        "price": "11,417",
        "currency": "INR"
    },
    {
        "class": "Economy",
        "depart": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "21:30",
            "from": "DEL",
            "to": "BLR",
            "arrival": "03:05",
            "duration": "5h 35m",
            "stops": "1 stop (2h 20m at Pune)"
        },
        "return": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "05:20",
            "from": "BLR",
            "to": "DEL",
            "arrival": "09:35",
            "duration": "4h 15m",
            "stops": "1 stop (30m at Gwalior)"
        },
        "price": "11,417",
        "currency": "INR"
    },
    {
        "class": "Economy",
        "depart": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "21:30",
            "from": "DEL",
            "to": "BLR",
            "arrival": "03:05",
            "duration": "5h 35m",
            "stops": "1 stop (2h 20m at Pune)"
        },
        "return": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "05:20",
            "from": "BLR",
            "to": "DEL",
            "arrival": "09:35",
            "duration": "4h 15m",
            "stops": "1 stop (30m at Gwalior)"
        },
        "price": "11,417",
        "currency": "INR"
    },
    {
        "class": "Economy",
        "depart": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "14:05",
            "from": "DEL",
            "to": "BLR",
            "arrival": "18:10",
            "duration": "4h 5m",
            "stops": "1 stop (30m at Gwalior)"
        },
        "return": {
            "airline": "Air India Express",
            "logo": "/assets/airindiaexpress.png",
            "time": "05:20",
            "from": "BLR",
            "to": "DEL",
            "arrival": "09:35",
            "duration": "4h 15m",
            "stops": "1 stop (30m at Gwalior)"
        },
        "price": "12,141",
        "currency": "INR"
    }
];

function renderFlightData(data) {
    const container = document.getElementById('flight-results');

    data.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.className = 'flight-card';

        const flightDetails = document.createElement('div');
        flightDetails.className = 'flight-details';

        const departSegment = document.createElement('div');
        departSegment.className = 'flight-segment';

        departSegment.innerHTML = `
            <div class="flight-time">
                <img src="${flight.depart.logo}" alt="${flight.depart.airline}">
                <span>${flight.depart.time} ${flight.depart.from} → ${flight.depart.arrival} ${flight.depart.to}</span>
            </div>
            <div class="flight-duration">${flight.depart.duration}</div>
            <div class="flight-stop">${flight.depart.stops}</div>
        `;

        const returnSegment = document.createElement('div');
        returnSegment.className = 'flight-segment';

        returnSegment.innerHTML = `
            <div class="flight-time">
                <img src="${flight.return.logo}" alt="${flight.return.airline}">
                <span>${flight.return.time} ${flight.return.from} → ${flight.return.arrival} ${flight.return.to}</span>
            </div>
            <div class="flight-duration">${flight.return.duration}</div>
            <div class="flight-stop">${flight.return.stops}</div>
        `;

        flightDetails.appendChild(departSegment);
        flightDetails.appendChild(returnSegment);

        const flightPrice = document.createElement('div');
        flightPrice.className = 'flight-price';

        flightPrice.innerHTML = `
            <div>${flight.currency} ${flight.price} / guest</div>
            <button>Select</button>
        `;

        flightCard.appendChild(flightDetails);
        flightCard.appendChild(flightPrice);

        container.appendChild(flightCard);
    });
}

document.addEventListener('DOMContentLoaded', () => renderFlightData(flightData));

