export function drawPolarAreaChart() {
  new Chart(document.getElementById('polarAreaChart'), {
    type: 'polarArea',
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{
        data: [11, 16, 7],
        backgroundColor: ['orange', 'blue', 'green']
      }]
    }
  });
}