document.addEventListener("DOMContentLoaded", () => {
  // COLORS
  const root = document.querySelector(":root")
  const secondary_hard = getComputedStyle(root).getPropertyValue("--secondary_hard")
  const danger_hard = getComputedStyle(root).getPropertyValue("--danger_hard")
  const gray = getComputedStyle(root).getPropertyValue("--gray")


  const fundsChart = document.getElementById("fundsChart")


  //   assets
  let delayed
  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  // just DUMMY DATA (will be replaced from Api)
  //   each array must be of 12 entry (if no data in any month then it's value is 0)
  const fundsData = {
    income: [0, 400, 900, 800, 800, 900, 200, 300, 800, 400, 900, 790],
    expenses: [
      -0, -500, -800, -810, -560, -550, -200, -780, -280, -900, -100, -67,
    ],
  }

  const tooltipLine = {
    id: "tooltipLine",
    beforeDraw: (chart) => {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const ctx = chart.ctx
        ctx.save()
        const activePoint = chart.tooltip._active[0]

        ctx.beginPath()
        ctx.setLineDash([5, 7])
        ctx.moveTo(activePoint.element.x, activePoint.element.y)
        ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
        ctx.lineWidth = 2
        ctx.strokeStyle = "#333"
        ctx.stroke()
        ctx.restore()
      }
    },
  }
  const commonConfig = {
    plugins: [tooltipLine],
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          yAlign: "bottom",
          backgroundColor: gray,
          titleColor: "#333",
          bodyColor: "#333",
          cornerRadius: 8,
        },
      },
      animations: {
        tension: {
          delay: 300,
          duration: 100,
          easing: "linear",
          from: 0,
          to: 0.4,
        },
      },
      animation: {
        onComplete: () => {
          delayed = true
        },
        delay: (context) => {
          let delay = 0
          if (
            context.type === "data" &&
            context.mode === "default" &&
            !delayed
          ) {
            delay = context.dataIndex * 100 + context.datasetIndex * 1
          }
          return delay
        },
      },
      responsive: true,
      scales: {
        x: {
          grid: {
            // display: false,
            borderDash: [2],
          },
        },
        y: {
          grid: {
            // display: false,
            borderDash: [5],
          },
          ticks: {
            callback: function (value) {
              return `${value} SAR`
            },
          },
        },
      },
    },
  }

  const fundsChartInitializer = (chartCanvas, comingData) => {
    const fundsDataSet = {
      labels: xLabels,
      datasets: [
        {
          label: "Income",
          data: comingData.income,
          pointBackgroundColor: secondary_hard,
          borderColor: secondary_hard,
          radius: 3,
          hitRadius: 17,
        },
        {
          label: "Expenses",
          data: comingData.expenses,
          pointBackgroundColor: danger_hard,
          borderColor: danger_hard,
          radius: 3,
          hitRadius: 17,
        },
      ],
    }

    const fundsConfig = {
      ...commonConfig,
      type: "line",
      data: fundsDataSet,
    }

    return new Chart(chartCanvas, fundsConfig)
  }

  fundsChartInitializer(fundsChart, fundsData)
})
