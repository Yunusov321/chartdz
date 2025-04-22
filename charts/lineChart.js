export function drawLineChart() {
  new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar'],
      datasets: [{
        label: 'Sales',
        data: [3, 6, 9],
        borderColor: 'green'
      }]
    }
  });
}