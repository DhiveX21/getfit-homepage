import React, { Component } from "react";
import Chart from "elements/Chart";
import PropTypes from "prop-types";

export default class Statistics extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 p-2">
            <Chart
              dataLabel={["testing1", "testing2", "testing3", "testing4"]}
              type={"doughnut"}
              label={"test"}
              fill={true}
              chartData={[12, 120, 32, 100]}
            ></Chart>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-2">
            <Chart
              dataLabel={["testing1", "testing2", "testing3", "testing4"]}
              type={"pie"}
              label={"test"}
              fill={true}
              chartData={[12, 120, 32, 100]}
            ></Chart>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-2">
            <Chart
              dataLabel={["testing1", "testing2", "testing3", "testing4"]}
              type={"doughnut"}
              label={"test"}
              fill={true}
              chartData={[12, 120, 32, 100]}
            ></Chart>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-2">
            <Chart
              dataLabel={["testing1", "testing2", "testing3", "testing4"]}
              type={"pie"}
              label={"test"}
              fill={true}
              chartData={[12, 120, 32, 100]}
            ></Chart>
          </div>
        </div>
      </div>
    );
  }
}
