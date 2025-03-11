

import { Bar, BarChart, CartesianGrid,XAxis } from "recharts"

import type { ChartConfig } from "@/components/ui/chart"
import { ChartContainer,ChartTooltipContent,ChartTooltip } from "@/components/ui/chart"


const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;


export function MyChart() {
  return (
      <ChartContainer config={chartConfig} className="h-[200px] w-100" >
      <BarChart accessibilityLayer data={chartData}>
      <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" 
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={5} />
      </BarChart>
      </ChartContainer>
  )
}
