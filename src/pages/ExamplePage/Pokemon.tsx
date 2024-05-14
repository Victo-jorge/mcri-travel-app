import { useEffect } from "react";
import Header from "../../reusables/Header/Header";

const PokemonPage= () => {  

    useEffect(()=>{
        fetch('https://localhost:3000/flights',{
            method:"GET"
        }).then(response=>{
            return response.json();
        }).then(data=>{
            return console.log("data",data)
        })
    })  
    return  (
      <>
      <Header />

      <div className="page-contennt">
        <h1>Flightinfo Page</h1>

        <p>welcome to our flightinfo page.</p>




        

        


        
  return 
    <>
      <Header />

      <div className="page-content">
        <h1>Example Page</h1>
<button> victor</button>
        <p>This is an example page. Use this example to create your own pages</p>
      </div>
    </>
  


export default PokemonPage;
