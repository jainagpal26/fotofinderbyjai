
import './App.css';
import{useEffect,useState} from "react"
import Navbar from "./components/Navbar"
import Text from "./components/Text"
import React from 'react';
import Image from "./components/Image"
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



 const API_KEY="22848208-14cd1e1d0dad02dd5d472e493"
const URL="https://pixabay.com/api/"



function App() {

const [data,setData]=useState([])
const [text,Settext]=useState("")
const [input,Setinput]=useState(4)

  const getImages = async () => {
    try{
      const getData=  await fetch(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${input}`,{
            method:"GET"
        })

        const data=await getData.json()
    
        setData(data.hits)
     
   } catch(err){
       console.log(err,`error while fetching`)
   }
   
   }
const Handleinput1=(text)=>{
  if(text==="girl"){
    toast.dark("Ladki ka chakkar babu bhaiya ",{
      position:"bottom-right",autoClose: 3000,
    })
  }else if(text==="sex"){
    toast.warning(" You Naughty-Naughty,Rha nhi jaata ",{
      position:"bottom-right",autoClose: 3000,
    })
  }
  Settext(text)
}
const Handleinput2=(input)=>{
  Setinput(input)

}

  useEffect(() => {
    if (input>200 || input<3){
  
    toast.error("Please find images between 3-200 ",{
      position:"bottom-right",autoClose: 3000,
    })
     
      return;
       
    }
    getImages()
  },[input,text])

  return (
<>
<Navbar/>
<Text Handleinput1={Handleinput1} Handleinput2={Handleinput2}/>
<Image data={data}/>
<ToastContainer />

</>


  );
}

export default App;
