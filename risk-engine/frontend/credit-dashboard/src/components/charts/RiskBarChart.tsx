import { Bar, BarChart, Legend, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", lowRisk: 145, mediumRisk: 89, highRisk: 32 },
  { month: "February", lowRisk: 168, mediumRisk: 102, highRisk: 35 },
  { month: "March", lowRisk: 152, mediumRisk: 95, highRisk: 40 },
  { month: "April", lowRisk: 139, mediumRisk: 110, highRisk: 44 },
  { month: "May", lowRisk: 175, mediumRisk: 88, highRisk: 28 },
  { month: "June", lowRisk: 161, mediumRisk: 97, highRisk: 36 },
]

const chartConfig = {
  lowRisk: {
    label: "Low Risk (DTI < 20%)",
    color: "#22c55e",
  },
  mediumRisk: {
    label: "Medium Risk (DTI 20-40%)",
    color: "#eab308",
  },
  highRisk: {
    label: "High Risk (DTI > 40%)",
    color: "#ef4444",
  },
} satisfies ChartConfig

export function RiskBarChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={10} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        <Bar dataKey="lowRisk" fill="var(--color-lowRisk)" radius={4} />
        <Bar dataKey="mediumRisk" fill="var(--color-mediumRisk)" radius={4} />
        <Bar dataKey="highRisk" fill="var(--color-highRisk)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
