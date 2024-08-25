"use client"
import { LoadingComponent } from "@/components/LoadingComponent";
import { db } from "@/lib/db";
import { Crops } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { useState ,useEffect} from "react";
import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Page ({params}) {
    const { cropID } =  params
    const [cropData, setCropData] = useState(null); 
    useEffect(() => {
      (async ()=>{
        const result =  await db.select().from(Crops).where(eq(Crops.cropID,cropID)).limit(1).execute();
        setCropData(result[0])
      })();
    }, [])

    if(!cropData) return (<div className="flex justify-center items-center min-h-screen h-full w-full"><LoadingComponent/></div>)
    
    return (
      <main className="pt-28 lg:pt-20 w-full h-full min-h-screen flex items-center flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              <div className="flex justify-start w-full">
                <Link href="/dashboard">
                  <Button className="bg-transparent text-white hover:bg-white/90 hover:text-black">{"<- Back"}</Button>
                </Link>
              </div>
          {cropData && <ResultChart cropData={cropData} />}
      </main>
    )
}


function ResultChart({cropData}) {
  const chartConfig = {
    desktop: {
      label: "Danger",
      color: "red",
    },
    mobile: {
      label: "Safe",
      color: "green",
    },
  }
  const danger  = cropData.predictionResults
  const chartData = [{ month: "prediction", danger, safe: 100-danger }]

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Crops Danger Level (Prediction)</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center">
                            
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {danger.toLocaleString()+"%"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Danger
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="safe"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="danger"
              stackId="a"
              cornerRadius={5}
              fill="red"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-5 text-sm -mt-28">
      <ul className="text-xs font-bold w-full px-3">
        <div className="flex gap-2 justify-between">
          <li>Crop Type:</li>
          <li>{cropData.cropType}</li>
        </div>
        <div className="flex gap-2 justify-between">
          <li>Location:</li>
          <li>{cropData.location}</li>
        </div>
        <div className="flex gap-2 justify-between">
          <li>Soil Type:</li>
          <li>{cropData.soilType}</li>
        </div>
        <div className="flex gap-2 justify-between">
          <li>Temperature:</li>
          <li>{cropData.temperature}</li>
        </div>
        <div className="flex gap-2 justify-between">
          <li>Rain Fall:</li>
          <li>{cropData.rainfall}</li>
        </div>
      </ul>
        <Card className="w-full">
          <div className="max-w-96 w-full p-4 flex flex-col gap-2">
            <div className="font-bold text-md">Suggestion:</div>
            <div>{cropData.suggestions}</div>
          </div>
        </Card>
      </CardFooter>
    </Card>
  )
}
