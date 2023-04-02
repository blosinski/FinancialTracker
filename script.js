document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const salaryInput = document.querySelector("input[type='text']");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const salary = parseInt(salaryInput.value);

    if (isNaN(salary) || salary <= 0) {
      alert("Please enter a valid salary.");
      return;
    }

    const gas = 0.15 * (salary / 12);
    const bills = 0.25 * (salary / 12);
    const insurance = 0.2 * (salary / 12);
    const other = 0.4 * (salary / 12);

    const ctx1 = document.getElementById("myChart1").getContext("2d");
    const myChart1 = new Chart(ctx1, {
      type: "pie",
      data: {
        labels: ["Gas", "Bills", "Insurance", "Other"],
        datasets: [
          {
            data: [gas, bills, insurance, other],
            backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#8c1aff"]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        aspectRatio: 1,
        scales: {
          display: false
        },
        title: {
          display: true,
          text: 'Essentials'
        }
      }
    });

    const ctx2 = document.getElementById("myChart2").getContext("2d");
    const myChart2 = new Chart(ctx2, {
      type: "pie",
      data: {
        labels: ["Food", "Entertainment", "Clothing", "Transportation", "Other"],
        datasets: [
          {
            data: [0.10 * (salary / 12), 0.03 * (salary / 12), 0.06 * (salary / 12), 0.10 * (salary / 12), 0.71 * (salary / 12)],
            backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#8c1aff", "#4bc0c0"]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        aspectRatio: 1,
        scales: {
          display: false
        },
        title: {
          display: true,
          text: 'Common'
        }
      }
    });

    const ctx3 = document.getElementById("myChart3").getContext("2d");
    const myChart3 = new Chart(ctx3, {
      type: "pie",
      data: {
        labels: ["Travel", "Hobbies", "Gifts", "Savings"],
        datasets: [
          {
            data: [0.05 * (salary / 12), 0.04 * (salary / 12), 0.03 * (salary / 12), 0.88 * (salary / 12)],
            backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#8c1aff"]
          }
        ]
      },
      options: {
        maintainAspectRatio:
        false,
        aspectRatio: 1,
        scales: {
          display: false
        },
        title: {
          display: true,
          text: 'Miscellaneous'
        }
      }
    });
  });
});
