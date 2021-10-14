import React, { Component } from "react";

import propTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";

import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: props.label,
      type: props.type,
      dataLabel: props.dataLabel,
      borderWidth: props.borderWidth,
      fill: props.fill,
      chartData: props.chartData,
      PieChart: "",
      DoughnutChart: "",
      LineChart: "",
    };

    if (this.state.type === "doughnut") {
      const data = {
        labels: this.state.dataLabel,
        datasets: [
          {
            label: this.state.labels,
            data: this.state.chartData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      this.state.DoughnutChart = <Doughnut data={data} />;
    }

    if (this.state.type === "line") {
      const data = {
        labels: this.state.dataLabel,
        datasets: [
          {
            label: this.state.labels,
            data: this.state.chartData,
            fill: this.state.fill,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 0.2)",
          },
        ],
      };

      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      this.state.LineChart = <Line data={data} options={options} />;
    }

    if (this.state.type === "pie") {
      console.log(this.state.labels);
      const data = {
        labels: this.state.dataLabel,
        datasets: [
          {
            label: this.state.labels,
            data: this.state.chartData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      this.state.PieChart = <Pie data={data} />;
    }
  }

  render() {
    return (
      <div>
        {this.state.DoughnutChart}
        {this.state.LineChart}
        {this.state.PieChart}
      </div>
    );
  }
}

Chart.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  dataLabel: propTypes.array.isRequired,
  chartData: propTypes.array.isRequired,
  fill: propTypes.bool.isRequired,
};
