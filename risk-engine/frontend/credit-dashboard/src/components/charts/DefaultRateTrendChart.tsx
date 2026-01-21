import { Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", defaultRate: 2.4, industryAvg: 3.1 },
  { month: "February", defaultRate: 2.2, industryAvg: 3.0 },
  { month: "March", defaultRate: 2.5, industryAvg: 2.9 },
  { month: "April", defaultRate: 2.1, industryAvg: 2.8 },
  { month: "May", defaultRate: 1.9, industryAvg: 2.7 },
  { month: "June", defaultRate: 1.8, industryAvg: 2.6 },
]

const chartConfig = {
  defaultRate: {
    label: "Portfolio Default Rate (%)",
    color: "#ef4444",
  },
  industryAvg: {
    label: "Industry Average (%)",
    color: "#94a3b8",
  },
} satisfies ChartConfig

export function DefaultRateTrendChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <LineChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) => `${value}%`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="defaultRate"
          stroke="var(--color-defaultRate)"
          strokeWidth={2}
          dot={{ fill: "var(--color-defaultRate)" }}
        />
        <Line
          type="monotone"
          dataKey="industryAvg"
          stroke="var(--color-industryAvg)"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ fill: "var(--color-industryAvg)" }}
        />
      </LineChart>
    </ChartContainer>
  )
}
