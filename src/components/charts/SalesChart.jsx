import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";
import { userData } from "../../MockData/mockData";
import "./salesChart.css";

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={userData}>
        <Line type="monotone" dataKey="Product Sold" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
