import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";


const COLORS = ["#82ca9d", "#ffc658", "#8884d8"]; // Updated colors for Completed, Todo, In-progress


export const Chart = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Bar Chart showing task status */}
      <h4 className="text-xl text-gray-600 font-semibold">Task Status Bar Chart</h4>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>


      {/* Line Chart showing task status */}
      <h4 className="text-xl text-gray-600 font-semibold">Task Status Line Chart</h4>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>


      {/* Pie Chart showing task distribution */}
      <h4 className="text-xl text-gray-600 font-semibold">Task Distribution Pie Chart</h4>
      <ResponsiveContainer width={"100%"} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#82ca9d"
            dataKey="total"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};


export default Chart;