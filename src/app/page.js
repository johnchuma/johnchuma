"use client"

import Image from "next/image";
import Link from "next/link"
import {projects} from "./utils/projects"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "./components/hero"
import Languages from "./components/languages"
import Price from "./components/price"
import Websites from "./components/websites"
import Apps from "./components/apps"
import Ecommerce from "./components/ecommerce"
import MS from "./components/ms"


import LatestProject from "./components/latestProject"


export default function Home() {
    const [filteredProjects,setfilteredProjects] = useState([]);
    const [selected,setselected] = useState(0);
    const router = useRouter()
    useEffect(()=>{
      setfilteredProjects(projects)
    },[])


  return (
    <main className=" bg-white min-h-screen ">
      
     <HeroSection/>
     <Languages/>
     <Price/>
     <LatestProject/>
     <Websites/>
     <Apps/>
     <Ecommerce/>
     <MS/>


      
      <div>
      
       
        
      </div>
       
    </main>
  );
}
