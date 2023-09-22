import { Input } from './input';
import { Name } from './name';
import { Button } from './button';
import { Crypto } from './currency';


export const Body = () => {
    return (
        <div>
            <Name/>
            <Input/>
            <Crypto></Crypto>
            <Button/>
        </div>
    )
}