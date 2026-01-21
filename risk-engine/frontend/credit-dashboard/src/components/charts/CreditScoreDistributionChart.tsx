import { Area, AreaChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", excellent: 120, good: 180, fair: 95, poor: 45 },
  { month: "February", excellent: 135, good: 175, fair: 88, poor: 42 },
  { month: "March", excellent: 142, good: 185, fair: 82, poor: 38 },
  { month: "April", excellent: 155, good: 190, fair: 78, poor: 35 },
  { month: "May", excellent: 162, good: 188, fair: 72, poor: 32 },
  { month: "June", excellent: 170, good: 195, fair: 68, poor: 28 },
]

const chartConfig = {
  excellent: {
    label: "Excellent (750+)",
    color: "#22c55e",
  },
  good: {
    label: "Good (700-749)",
    color: "#3b82f6",
  },
  fair: {
    label: "Fair (650-699)",
    color: "#eab308",
  },
  poor: {
    label: "Poor (<650)",
    color: "#ef4444",
  },
} satisfies ChartConfig

export function CreditScoreDistributionChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <AreaChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={10} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="poor"
          stackId="1"
          fill="var(--color-poor)"
          stroke="var(--color-poor)"
        />
        <Area
          type="monotone"
          dataKey="fair"
          stackId="1"
          fill="var(--color-fair)"
          stroke="var(--color-fair)"
        />
        <Area
          type="monotone"
          dataKey="good"
          stackId="1"
          fill="var(--color-good)"
          stroke="var(--color-good)"
        />
        <Area
          type="monotone"
          dataKey="excellent"
          stackId="1"
          fill="var(--color-excellent)"
          stroke="var(--color-excellent)"
        />
      </AreaChart>
    </ChartContainer>
  )
}
