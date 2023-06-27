import React from "react"

export default function Clk()
{
    const [time, setTime] = React.useState(new Date())

    React.useEffect( () => {
        const intervalid = setInterval(() =>
    {
        setTime(new Date());
    }, 1000);

    return () => {
        clearInterval(intervalid);
    }

}, []);

const seconds = time.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;

const mins = time.getMinutes();
const minsDegrees = ((mins / 60) * 360)  + 90;

const hour = time.getHours();
const hourDegrees = ((hour / 12) * 360) + 90;
    return(
    <div className="clock">
        <div className="clock-face">
            <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)`}}></div>
            <div className="hand mins-hand" style={{ transform: `rotate(${minsDegrees}deg)`}}></div>
            <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)`}}></div>
        </div>
    </div>
 );
}