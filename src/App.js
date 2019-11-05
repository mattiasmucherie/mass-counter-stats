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
      display: true
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
          }
        }
      ],
      yAxes: [
        {
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
        backgroundColor: "rgba(19, 111, 99,0.4)",
        borderColor: "rgba(19, 111, 99,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(19, 111, 99,1)",
        pointBackgroundColor: "rgba(19, 111, 99,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(19, 111, 99,1)",
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
        backgroundColor: "rgba(224, 202, 60,0.4)",
        borderColor: "rgba(224, 202, 60,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(224, 202, 60,1)",
        pointBackgroundColor: "rgba(224, 202, 60,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(224, 202, 60,1)",
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
        backgroundColor: "rgba(243,66,19,0.4)",
        borderColor: "rgba(243,66,19,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(243,66,19,1)",
        pointBackgroundColor: "rgba(243,66,19,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(243,66,19,1)",
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
        backgroundColor: "rgba(221,151,135,0.4)",
        borderColor: "rgba(221,151,135,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(221,151,135,1)",
        pointBackgroundColor: "rgba(221,151,135,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(221,151,135,1)",
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
        backgroundColor: "rgba(45,216,129,0.4)",
        borderColor: "rgba(45,216,129,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(45,216,129,1)",
        pointBackgroundColor: "rgba(45,216,129,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(45,216,129,1)",
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
        backgroundColor: "rgba(123,30,122,0.4)",
        borderColor: "rgba(123,30,122,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(123,30,122,1)",
        pointBackgroundColor: "rgba(123,30,122,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(123,30,122,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: beerLog.Klara
      },
      {
        label: "Filip",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(180,197,228,0.4)",
        borderColor: "rgba(180,197,228,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(180,197,228,1)",
        pointBackgroundColor: "rgba(180,197,228,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(180,197,228,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: beerLog.Filip
      },
      {
        label: "Malin",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(48,102,190,0.4)",
        borderColor: "rgba(48,102,190,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(48,102,190,1)",
        pointBackgroundColor: "rgba(48,102,190,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(48,102,190,1)",
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
