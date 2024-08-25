"use client"
import { db } from "@/lib/db"
import { Button } from "./ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Crops } from "@/lib/schema"
import { useUser } from "@stackframe/stack"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const CreateCropDrawer = ({children}) => {
    const user = useUser({ or:"redirect"});
    const router = useRouter();

    const [location, setLocation] = useState("");
    const [soilType, setSoilType] = useState("");
    const [cropType, setCropType] = useState("");
    const [temperature, setTemperature] = useState("");
    const [rainfall, setRainfall] = useState("");
    const [loading, setLoading] = useState(false);

    const setInput = (loc="",soil_type="",crop_type="",temp="",rainfall="")=>{ 
        setLocation(loc);
        setSoilType(soil_type);
        setCropType(crop_type);
        setTemperature(temp);
        setRainfall(rainfall);
        setLoading(false);
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(location && soilType && cropType && temperature && rainfall){
            setLoading(true);
            try{
                let response =await axios.post(`/api/get-prediction`,{cropType,location,soilType,temperature,rainfall});
                const cropID = crypto.randomUUID()
                await db.insert(Crops).values({
                    createdBy:user.id,
                    location,soilType,cropType, 
                    temperature,rainfall, 
                    predictionResults : response.data.climate_effect,
                    suggestions: response.data.suggestions_for_farmers,       
                    cropID,
                }).execute()
                router.push(`/dashboard/results/${cropID}`);
            }catch(e){
                console.log("Error occured while adding crop",e)
                alert("Error while predicting. Please try again");
            }
            setLoading(false);
        }else{
            alert("All fields are required");
        }
    } 
    return (
    <Drawer className="" >
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="bg-slate-900 border-0 flex flex-col items-center">
        <form className="w-full lg:w-2/4 flex flex-col px-4 gap-4 text-white" onSubmit={handleSubmit}>
            <div className="flex justify-between gap-2 items-center">
                <DrawerHeader className="text-left pl-0">
                    <DrawerTitle>Generate Crop Prediction</DrawerTitle>
                    <DrawerDescription>
                        All details are required. Click generate when you're done.
                    </DrawerDescription>
                </DrawerHeader>
                <ExampleSelector setInput={setInput}>
                    <Button disabled={loading} className="bg-white text-black hover:bg-white/90 hover:text-black">Select Examples</Button>
                </ExampleSelector>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="cropType">Crop Type</Label>
                <Input required className="bg-slate-800 border-0" id="cropType" value={cropType} onChange={(e)=>setCropType(e.target.value)} placeholder="Exp: Wheat" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input required type="text" id="location" value={location} onChange={(e)=>setLocation(e.target.value)} className="bg-slate-800 border-0" placeholder="Exp: Punjab, Pakistan" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="soilType">Soil Type</Label>
                <Input required className="bg-slate-800 border-0" id="soilType" value={soilType} onChange={(e)=>setSoilType(e.target.value)} placeholder="Exp: Clay" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="temperature">Temperature</Label>
                <Input required className="bg-slate-800 border-0" id="temperature" value={temperature} onChange={(e)=>setTemperature(e.target.value)} placeholder="Exp: 30C" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="rainfall">Rain Fall</Label>
                <Input required className="bg-slate-800 border-0" id="rainfall" value={rainfall} onChange={(e)=>setRainfall(e.target.value)} placeholder="Exp: 300mm" />
            </div>
            <Button disabled={loading} className="mt-4 bg-white text-black hover:bg-white/90 hover:text-black" type="submit">{loading ? "Predicting...":"Generate Predictions"}</Button>
        </form>
        <DrawerFooter className="pt-2 w-full lg:w-2/4">
          <DrawerClose asChild>
            <Button disabled={loading} onClick={()=>setInput()} className=" bg-slate-800 border-0 text-white hover:bg-slate-800/90 hover:text-white" variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export {CreateCropDrawer}



const exampleData = {
    "Corn": {
      "location": "Iowa, USA",
      "soil_type": "Silty Loam",
      "temperature": "32°C",
      "rainfall": "400mm"
    },
    "Rice": {
      "location": "Punjab, Pakistan",
      "soil_type": "Clay",
      "temperature": "37°C",
      "rainfall": "100mm"
    },
    "Sugarcane": {
      "location": "Queensland, Australia",
      "soil_type": "Red Loam",
      "temperature": "33°C",
      "rainfall": "600mm"
    },
    "Coffee": {
      "location": "Minas Gerais, Brazil",
      "soil_type": "Volcanic",
      "temperature": "25°C",
      "rainfall": "700mm"
    },
    "Cotton": {
      "location": "Texas, USA",
      "soil_type": "Sandy Loam",
      "temperature": "40°C",
      "rainfall": "150mm"
    },
    "Tea": {
      "location": "Assam, India",
      "soil_type": "Acidic Red Loam",
      "temperature": "30°C",
      "rainfall": "900mm"
    },  
    "Olive": {
        "location": "Andalusia, Spain",
        "soil_type": "Chalky",
        "temperature": "35°C",
        "rainfall": "200mm"
    }
}
    


function ExampleSelector({children , setInput}) {
  const [position, setPosition] = useState("Custom")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Examples</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={(e)=>{
            if(e==="Custom"){
                setInput();
            }else{
                setInput(exampleData[e].location,
                    exampleData[e].soil_type,
                    e,
                    exampleData[e].temperature,
                    exampleData[e].rainfall);
            }
            setPosition(e);
        }}>
          <DropdownMenuRadioItem value="Custom">Custom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Rice">Rice</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Coffee">Coffee</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Tea">Tea</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Olive">Olive</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Corn">Corn</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Cotton">Cotton</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Sugarcane">Sugarcane</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
