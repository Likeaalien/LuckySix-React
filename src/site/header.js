import { LuckySixInstance } from '../blockchain/luckysix';
import './style.css' 

export const Header = () => {

    const LuckySix = LuckySixInstance();

    return (
        <div className="Header">
            <button onClick={() => LuckySix.getDrawnNumbersForRound(10)}>Connect your wallet</button>
        </div>
    )
}