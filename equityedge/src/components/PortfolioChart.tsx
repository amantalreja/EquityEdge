import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Mock data representing portfolio value over the last 7 days
const data = [
  { name: 'Day 1', value: 24850 },
  { name: 'Day 2', value: 25100 },
  { name: 'Day 3', value: 25050 },
  { name: 'Day 4', value: 25300 },
  { name: 'Day 5', value: 25550 },
  { name: 'Day 6', value: 25309 },
  { name: 'Day 7', value: 25650 },
];

const PortfolioChart = () => {
  return (
    // ResponsiveContainer makes the chart fill its parent container
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* The grid in the background */}
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        {/* The X-axis (bottom labels) */}
        <XAxis dataKey="name" />
        {/* The Y-axis (side labels) */}
        <YAxis domain={['dataMin - 100', 'dataMax + 100']} />
        {/* The tooltip that appears on hover */}
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--b1) / 0.8)',
            borderColor: 'hsl(var(--b3))'
          }}
        />
        <Legend />
        {/* The actual line on the chart */}
        <Line
          type="monotone"
          dataKey="value"
          stroke="hsl(var(--p))" // Uses the DaisyUI primary color
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PortfolioChart;