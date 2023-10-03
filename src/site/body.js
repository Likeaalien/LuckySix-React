import { Input } from './bodyItems';
import { Name } from './bodyItems';
import { Button } from './bodyItems';
import { Crypto } from './bodyItems';
import { RoundNumber } from "./bodyItems";


export const Body = () => {
    return (
        <div>
            <Name/>
            <Input/>
            <Crypto/>
            <Button/>
            <RoundNumber/>
        </div>
    )
}