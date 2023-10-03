import './style2.css' 
import { useState } from 'react';

export function RoundNumber () {

    const [teodore, setTeodore] = useState("kur");

    const result = (event) => {
        setTeodore(event.target.value);
      };

    return(
    <div className="RoundNumber">
        <input type="Number" onChange={(v) => console.log(v.target.value)}></input>
        <button className="EnterRound" value={teodore} onClick={result}>Enter</button>
        {teodore}
    </div>
    )
}

