"use client"
import {CreateCropDrawer} from "@/components/CreateCropDrawer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {db} from "@/lib/db"
import { Crops } from "@/lib/schema"
import { useUser } from "@stackframe/stack"
import { eq } from "drizzle-orm"
import Link from "next/link"
import { useState,useEffect } from "react"

const Page = ()=>{
    const user = useUser({or: "redirect"})
    const [crops, setCrops] = useState([])
    useEffect(()=>{
        (async ()=>{
            let result  = await db.select().from(Crops).where(eq(Crops.createdBy, user.id)).execute()
            setCrops(result ?? []);
        })()
    },[])

    if(!crops || crops.length == 0){
        return (<main className="pt-28 lg:pt-20 w-full h-full min-h-screen flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
            >
                <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                    You have no predictions yet
                </h3>
                <p className="text-sm text-muted-foreground">
                    Add your crop details now to start predicting.
                </p>
                <CreateCropDrawer>
                    <Button className="mt-4 bg-white text-black hover:bg-white/90 hover:text-black">Create Crop Prediction</Button>
                </CreateCropDrawer>
                </div>
            </div>
        </main>)
    }
    return (<main className="pt-28 lg:pt-20 w-full h-full min-h-screen flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex flex-1 items-start p-4">
            <div className="flex flex-wrap justify-start items-start gap-4">
                <CreateCropDrawer>
                    <Button className="w-full sm:w-52 h-56 bg-transparent hover:bg-slate-800/50 text-white flex justify-center items-center border border-dashed shadow-sm">
                        <p>Add Crop Prediction</p>
                    </Button>
                </CreateCropDrawer>
                {crops.map((ele, i) => (
                    <Card key={ele.cropID} className="w-full sm:w-52 h-56 bg-slate-800 text-white border-0">
                        <CardHeader>
                            <CardTitle>{ele.cropType}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-xs ">
                                <li>Location: {ele.location}</li>
                                <li>Soil Type: {ele.soilType}</li>
                                <li>Temperature: {ele.temperature}</li>
                                <li>Rain Fall: {ele.rainfall}</li>
                            </ul>
                        </CardContent>
                        <CardFooter className="w-full">
                            <Link href={`/dashboard/results/${ele.cropID}`}>
                                <Button className="bg-white text-black hover:bg-white/90 hover:text-black w-full">
                                    See Prediction
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    </main>)
}



export default Page