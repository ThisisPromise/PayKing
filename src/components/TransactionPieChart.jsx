
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Data", value: 12, color: "#1400AF" },
  { name: "Airtime", value: 18, color: "#33964B" },
  { name: "Electricity", value: 25, color: "#EB001B" },
  { name: "Deposit", value: 20, color: "#FF7E00" },
  { name: "Cable TV", value: 15, color: "#50555C" },
  { name: "Crypto", value: 10, color: "#FFD600" },
];

const COLORS = data.map((item) => item.color);

const TransactionPieChart = () => {
  return (
    <div className="flex flex-col items-center justify-center 
      w-[90%] sm:w-[382px] lg:w-[300px] h-[369px] lg:h-[250px]">
      
      <h2 className="text-center font-semibold text-lg mb-2">Total Transactions</h2>
      
      <PieChart width={300} height={250} className="lg:w-[250px] lg:h-[200px]">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80} 
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill={COLORS[index % COLORS.length]}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                className="text-xs lg:text-[10px] font-medium"
              >
                {data[index].name} ({(percent * 100).toFixed(0)}%) 
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default TransactionPieChart;
