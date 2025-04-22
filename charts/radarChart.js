export function drawRadarChart() {
  new Chart(document.getElementById('radarChart'), {
    type: 'radar',
    data: {
      labels: ['Speed', 'Power', 'Accuracy'],
      datasets: [{
        label: 'Player 1',
        data: [20, 10, 30],
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderColor: 'red'
      }]
    }
  });
}