export function drawPieChart() {
  new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['pink', 'purple', 'cyan']
      }]
    }
  });
}