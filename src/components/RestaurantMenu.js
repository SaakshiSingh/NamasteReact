import { useEffect } from "react";
const RestaurantMenu=()=>{
    //load the data
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu= async ()=>{
        const data = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api")

        const json_data=await data.json();
    }
    return(
        <div>
            <img></img>
            <h1>Name of the res</h1>
            <h2> Some other info</h2>
            <h3>Menu</h3>
        </div>
    )
}

export default RestaurantMenu;