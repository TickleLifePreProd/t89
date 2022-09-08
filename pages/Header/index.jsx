
  import { useEffect } from 'react';
  import axios from 'axios';
  import Link from 'next/link';
  
  export default function Header() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://tyfldvsnwfxrcthgfpjt.supabase.co/storage/v1/object/public/projects/2aec5cb0-4847-4bb0-aef2-4e4526a4f3b1/t89/Header/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("HeaderID").innerHTML = res.data;
        
        //* css
        axios.get("https://tyfldvsnwfxrcthgfpjt.supabase.co/storage/v1/object/public/projects/2aec5cb0-4847-4bb0-aef2-4e4526a4f3b1/t89/Header/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("HeaderID").appendChild(createCssElement)
          axios.get("https://tyfldvsnwfxrcthgfpjt.supabase.co/storage/v1/object/public/projects/2aec5cb0-4847-4bb0-aef2-4e4526a4f3b1/t89/Header/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='HeaderID'>
      </div>
    )
  }