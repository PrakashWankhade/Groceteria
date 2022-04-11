import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartTemplate = (props) => {
  const { title, Xdatakey, Linedatakey, data } = props;
  return (
    <LineChart
      width={1000}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={Xdatakey} />

      <Line type="monotone" dataKey={Linedatakey} stroke="#8884d8" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default LineChartTemplate;
