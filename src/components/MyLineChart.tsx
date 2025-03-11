import {
    LineChart,
    Line,
    CartesianGrid,
    YAxis,
    XAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  const data = [
    {
      city: "Jakarta",
      sales: 65,
      id: 1,
    },
    {
      city: "Bandung",
      sales: 76,
      id: 3,
    },
    {
      city: "Surabaya",
      sales: 67,
      id: 4,
    },
    {
      city: "Medan",
      sales: 24,
      id: 5,
    },
  ];
  
  export default function MyLineChart() {
    return (
     
        <LineChart width={400} height={400}data={data}>
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          <CartesianGrid stroke="#cdd" strokeDasharray="5 2" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip></Tooltip>
        </LineChart>
      
    );
  }
  