import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase/init";
import { Line } from "react-chartjs-2";

function App() {
  const [beerLog, addBeerLog] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const names = [
      "Mattias",
      "Hampus",
      "Fredrik",
      "Andrea",
      "Axelina",
      "Klara",
      "Filip",
      "Guest",
      "Malin"
    ];
    const beerLogLocal = {};
    for (let i = 0; i < names.length; i++) {
      await db
        .collection("mass")
        .doc(names[i])
        .onSnapshot(doc => {
          const beerAccumulated = [];
          let beerCount = parseFloat(doc.data().numBeer.toFixed(1));

          doc
            .data()
            .time.reverse()
            .forEach(obj => {
              beerAccumulated.push({
                x: new Date(obj.time),
                y: beerCount
              });
              beerCount -= obj.amount;
            });
          beerLogLocal[names[i]] = beerAccumulated.reverse();
          if (names[i] === "Malin") {
            addBeerLog(beerLogLocal);
            setLoading(false);
          }
        });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const chartOptions = {
    maintainAspectRatio: false,
    title: {
      text: "Trainee 2018 Beer Consumption",
      display: true,
      fontSize: 18,
      fontColor: "#fafafa"
    },
    hover: {
      mode: "nearest"
    },
    legend: {
      display: true,
      position: "bottom",
      labels: { usePointStyle: true }
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "week"
          },
          gridLines: {
            display: true,
            color: "#383330"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "#383330"
          },
          scaleLabel: {
            display: true,
            labelString: "Litres Beer"
          }
        }
      ]
    }
  };
  let chartData = {
    datasets: [
      {
        label: "Mattias",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(206, 184, 136,0.4)",
        borderColor: "rgba(206, 184, 136,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(206, 184, 136,1)",
        pointBackgroundColor: "rgba(206, 184, 136,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(206, 184, 136,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: beerLog.Mattias
      },
      {
        label: "Fredrik",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(94, 56, 133,0.4)",
        borderColor: "rgba(94, 56, 133,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(94, 56, 133,1)",
        pointBackgroundColor: "rgba(94, 56, 133,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(94, 56, 133,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: beerLog.Fredrik
      },
      {
        label: "Hampus",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(0, 93, 109,0.4)",
        borderColor: "rgba(0, 93, 109,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(0, 93, 109,1)",
        pointBackgroundColor: "rgba(0, 93, 109,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(0, 93, 109,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: beerLog.Hampus
      },
      {
        label: "Andrea",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(225, 169, 62,0.4)",
        borderColor: "rgba(225, 169, 62,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(225, 169, 62,1)",
        pointBackgroundColor: "rgba(225, 169, 62,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(225, 169, 62,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: beerLog.Andrea
      },
      {
        label: "Axelina",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(137, 106, 115,0.4)",
        borderColor: "rgba(137, 106, 115,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(137, 106, 115,1)",
        pointBackgroundColor: "rgba(137, 106, 115,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(137, 106, 115,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: beerLog.Axelina
      },
      {
        label: "Klara",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(93, 167, 169,0.4)",
        borderColor: "rgba(93, 167, 169,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(93, 167, 169,1)",
        pointBackgroundColor: "rgba(93, 167, 169,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(93, 167, 169,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: beerLog.Klara
      },
      {
        label: "Filip",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(96, 178, 105,0.4)",
        borderColor: "rgba(96, 178, 105,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(96, 178, 105,1)",
        pointBackgroundColor: "rgba(96, 178, 105,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(96, 178, 105,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: beerLog.Filip
      },
      {
        label: "Malin",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(227, 82, 5,0.4)",
        borderColor: "rgba(227, 82, 5,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(227, 82, 5,1)",
        pointBackgroundColor: "rgba(227, 82, 5,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(227, 82, 5,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: beerLog.Malin
      }
    ]
  };
  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <div class="lds-heart">
            <div></div>
          </div>
        ) : (
          <Line data={chartData} options={chartOptions} />
        )}
      </header>
    </div>
  );
}

export default App;
