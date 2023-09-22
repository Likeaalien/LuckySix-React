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