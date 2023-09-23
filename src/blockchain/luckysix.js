import { ethers } from "ethers";
import LuckySix from './LuckySix.json'

const contractAddress = "0x5d65cff1f21fcfedd194ef7e15e66ae31ab6dcb7";

export const LuckySixInstance = () => {

    async function getDrawnNumbersForRound(roundNumber) {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const LuckySixContract = new ethers.Contract(contractAddress, LuckySix.abi, provider);

            console.log(await LuckySixContract.drawnNumbers(roundNumber))
        } catch(err) {
            console.log(err);
        }
    }

    return { getDrawnNumbersForRound };
} 