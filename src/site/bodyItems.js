import './style.css' 
import './style2.css'
import { useState } from 'react';
import { LuckySixInstance } from '../blockchain/luckysix';


export const Name = () => {
    return(
        <div className='Name'>
            <p>Lucky Six</p>
        </div>
    )
}
export const Input = () => {
    return (
        <div className='Input'>
            <input type="number"></input> 
            <input type="number"></input> 
            <input type="number"></input> 
            <input type="number"></input> 
            <input type="number"></input> 
            <input type="number"></input> 
        </div>
    )
}
export const Crypto = () => {
    return(
        <div className="crypto-input">
            <input type="number" id="cryputoAmount" min="0"/>
            <select id="cryptoCurrency">
                <option value="ETH">ETH</option>
            </select>
        </div>
    )
}
export const Button = () => {
    return (
        <div className="Click">
            <button className='Play'>Roll</button>
        </div>
    )
}
export function RoundNumber () {

    const LuckySix = LuckySixInstance();
    const [roundNumber, setRoundNumber] = useState("");
    const [inputNumber, setInputNumber] = useState("");

    const getRoundNumber = async () => {
        const tmp = await LuckySix.getDrawnNumbersForRound(inputNumber);
        setRoundNumber(tmp.toString());
    }

    return(
        <div>
            <input type="Number" onChange={(v) => setInputNumber(v.target.value)}></input>
            <button onClick={getRoundNumber}>Enter</button>
            {`\t${roundNumber}`}
        </div>
    )

}
