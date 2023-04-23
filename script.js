document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const salaryInput = document.querySelector("input[type='text']");
  const chartContainer = document.querySelector('.chart-container');
  const chartTitles = document.querySelectorAll('.chart-title');
  const chartWrappers = document.querySelectorAll('.chart-wrapper');
  const chart1 = document.getElementById('myChart1');
  const chart2 = document.getElementById('myChart2');
  const chart3 = document.getElementById('myChart3');
  let myChart1, myChart2, myChart3;
  let gas,
    bills,
    insurance,
    other,
    food,
    entertainment,
    clothing,
    transportation,
    other2,
    housing,
    utilities,
    debt,
    savings,
    other3;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const salary = parseInt(salaryInput.value);

    if (isNaN(salary) || salary <= 0) {
      alert('Please enter a valid salary.');
      return;
    }

    gas = Math.trunc(0.15 * (salary / 12) * 100) / 100;
    bills = Math.trunc(0.25 * (salary / 12) * 100) / 100;
    insurance = Math.trunc(0.2 * (salary / 12) * 100) / 100;
    other = Math.trunc(0.4 * (salary / 12) * 100) / 100;
    food = Math.trunc(0.1 * (salary / 12) * 100) / 100;
    entertainment = Math.trunc(0.03 * (salary / 12) * 100) / 100;
    clothing = Math.trunc(0.06 * (salary / 12) * 100) / 100;
    transportation = Math.trunc(0.1 * (salary / 12) * 100) / 100;
    other2 = Math.trunc(0.71 * (salary / 12) * 100) / 100;
    housing = Math.trunc(0.3 * (salary / 12) * 100) / 100;
    utilities = Math.trunc(0.1 * (salary / 12) * 100) / 100;
    debt = Math.trunc(0.15 * (salary / 12) * 100) / 100;
    savings = Math.trunc(0.2 * (salary / 12) * 100) / 100;
    other3 = Math.trunc(0.25 * (salary / 12) * 100) / 100;

    if (!myChart1) {
      myChart1 = new Chart(chart1, {
        type: 'pie',
        data: {
          labels: ['Gas', 'Bills', 'Insurance', 'Other'],
          datasets: [
            {
              data: [gas, bills, insurance, other],
              backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb', '#8c1aff'],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 1,
          scales: {
            display: false,
          },
          title: {
            display: true,
            text: 'Essentials',
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                return (
                  '$' +
                  parseFloat(data.datasets[0].data[tooltipItem.index]).toFixed(
                    2
                  )
                );
              },
            },
          },
        },
      });
    } else {
      myChart1.data.datasets[0].data = [gas, bills, insurance, other];
      myChart1.update();
    }
    if (!myChart2) {
      myChart2 = new Chart(chart2, {
        type: 'pie',
        data: {
          labels: [
            'Food',
            'Entertainment',
            'Clothing',
            'Transportation',
            'Other',
          ],
          datasets: [
            {
              data: [food, entertainment, clothing, transportation, other2],
              backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#8c1aff',
                '#4bc0c0',
              ],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 1,
          scales: {
            display: false,
          },
          title: {
            display: true,
            text: 'Common',
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                return (
                  '$' +
                  parseFloat(data.datasets[0].data[tooltipItem.index]).toFixed(
                    2
                  )
                );
              },
            },
          },
        },
      });
    } else {
      myChart2.data.datasets[0].data = [
        food,
        entertainment,
        clothing,
        transportation,
        other2,
      ];
      myChart2.update();
    }
    if (!myChart3) {
      myChart3 = new Chart(chart3, {
        type: 'pie',
        data: {
          labels: ['Housing', 'Utilities', 'Debt', 'Savings', 'Other'],
          datasets: [
            {
              data: [housing, utilities, debt, savings, other3],
              backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#8c1aff',
                '#4bc0c0',
              ],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 1,
          scales: {
            display: false,
          },
          title: {
            display: true,
            text: 'Financial',
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                return (
                  '$' +
                  parseFloat(data.datasets[0].data[tooltipItem.index]).toFixed(
                    2
                  )
                );
              },
            },
          },
        },
      });
    } else {
      myChart3.data.datasets[0].data = [
        housing,
        utilities,
        debt,
        savings,
        other3,
      ];
      myChart3.update();
    }
  });

  const exportBtn = document.getElementById('exportToCSV');
  exportBtn.addEventListener('click', function () {
    exportToCsv('data.csv');
  });

  function exportToCsv(filename) {
    const rows = [];
    // Add the headers to the CSV
    rows.push(['Category', 'Amount']);

    // Add the data to the CSV
    rows.push(['Gas', gas]);
    rows.push(['Bills', bills]);
    rows.push(['Insurance', insurance]);
    rows.push(['Other', other]);
    rows.push(['Food', food]);
    rows.push(['Entertainment', entertainment]);
    rows.push(['Clothing', clothing]);
    rows.push(['Transportation', transportation]);
    rows.push(['Other2', other2]);
    rows.push(['Housing', housing]);
    rows.push(['Utilities', utilities]);
    rows.push(['Debt', debt]);
    rows.push(['Savings', savings]);
    rows.push(['Other3', other3]);
    // Convert the rows array to a string
    const csvString = rows.map((row) => row.join(',')).join('\n');

    // Create a download link for the CSV and click it
    const link = document.createElement('a');
    link.setAttribute(
      'href',
      'data:text/csv;charset=utf-8,' + encodeURIComponent(csvString)
    );
    link.setAttribute('download', filename);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
