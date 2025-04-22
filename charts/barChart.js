export function drawBarChart() {
  new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'Votes',
        data: [12, 19, 3],
        backgroundColor: ['red', 'blue', 'yellow']
      }]
    }
  });
}