import { LuckySixInstance } from '../blockchain/luckysix';
import './style.css' 

export const Header = () => {

    const LuckySix = LuckySixInstance();

    return (
        <div className="Header">
            <button onClick={() => LuckySix.getDrawnNumbersForRound(4)}>Connect your wallet</button>
        </div>
    )
}