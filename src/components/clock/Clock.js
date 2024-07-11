import { useEffect, useState } from "react";

function Clock(props){

    let [date, setDate] = useState(new Date())

    // useEffect is going to run at least once when the component is rendered
    useEffect(()=>{
        let timerID = setInterval( () => tick(), 1000 );

        console.log("eric")
        
        //cleanup function that will run after this component is re-rendered
        return () => {
            clearInterval(timerID);
        }
    },[])


    let tick = () => {
        setDate(new Date());
    }

    return (
        <div className="Clock">
            <h2>It is {date.toLocaleString()}</h2>
        </div>
    )
}

export default Clock;