import { useLazyQuery } from "@apollo/client";
import React from "react";
import { GET_WEATER_QUERY } from "../graphql/Queries";

export default function Home() {
    const [getWeather, {loadinng, data, error}]=useLazyQuery(GET_WEATER_QUERY, {
        variables:{name:'Sri Lanka'}
    })

    if (error) return <h1>Error found</h1>;
    if(data){
        console.log('Data');
        
    }
  return (
    <div className="home">
        <h1>Search for Weather</h1>
      <input type="text" placeholder="City Name" />
      <button onClick={()=>{getWeather()}}>Submit</button>
    </div>
  );
}
