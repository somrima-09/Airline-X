$(".nav li").on("click", function() {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });



  function navbar_movment(event)
{
        $(event.data.param1).slideToggle("fast");
      /*	$(event.data.param2).slideUp("fast");
        $(event.data.param3).slideUp("fast");
        $(event.data.param4).slideUp("fast"); */
};

document.addEventListener('DOMContentLoaded', function () {
    const availableFlightsCtx = document.getElementById('availableFlightsChart').getContext('2d');
    const totalBookingsCtx = document.getElementById('totalBookingsChart').getContext('2d');
    const totalEarningsCtx = document.getElementById('totalEarningsChart').getContext('2d');
    const flightStatusCtx = document.getElementById('flightStatusChart').getContext('2d');
    const flightsPerAirlineCtx = document.getElementById('flightsPerAirlineChart').getContext('2d');

    // Example data, replace with actual data from your server
    const availableFlightsData = {
        labels: ['101', '102', '103','201','202','301','302','401','402','403'],
        datasets: [{
            label: 'Available Flights',
            data: [30, 45, 60,20,25,50,60,35,50,40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const totalBookingsData = {
        labels: ['Jan', 'Feb', 'Mar','April', 'May', 'June','July', 'Aug', 'Sep','Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Bookings',
            data: [120, 150, 180,153,145,155,167,156,160,178,190,200],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    const totalEarningsData = {
        labels: ['Jan', 'Feb', 'Mar','April', 'May', 'June','July', 'Aug', 'Sep','Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Earnings (INR)',
            data: [20000, 22000, 24000,21000,18000,17000,15000,22000,24000,21000,24000,25000],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    };

    const flightStatusData = {
        labels: ['Arrived', 'Delayed', 'Cancelled'],
        datasets: [{
            label: 'Flight Status',
            data: [60, 30, 10],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };

    const flightsPerAirlineData = {
        labels: ['Emirates', 'Air Asia', 'Air India','Indigo'],
        datasets: [{
            label: 'Number of Flights',
            data: [20, 5, 15,10],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    new Chart(availableFlightsCtx, {
        type: 'bar',
        data: availableFlightsData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(totalBookingsCtx, {
        type: 'line',
        data: totalBookingsData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(totalEarningsCtx, {
        type: 'line',
        data: totalEarningsData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(flightStatusCtx, {
        type: 'pie',
        data: flightStatusData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Flight Status Distribution'
                }
            }
        }
    });

    new Chart(flightsPerAirlineCtx, {
        type: 'bar',
        data: flightsPerAirlineData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Fetch actual data from the server and update charts
    fetch('/dashboard-data')
        .then(response => response.json())
        .then(data => {
            updateChartData(availableFlightsData, data.availableFlights);
            updateChartData(totalBookingsData, data.totalBookings);
            updateChartData(totalEarningsData, data.totalEarnings);
            updateChartData(flightStatusData, data.flightStatus);
            updateChartData(flightsPerAirlineData, data.flightsPerAirline);
        })
        .catch(error => {
            console.error('Error fetching dashboard data:', error);
        });

    function updateChartData(chartData, newData) {
        chartData.labels = newData.labels;
        chartData.datasets[0].data = newData.data;
        chartData.update();
    }
});
