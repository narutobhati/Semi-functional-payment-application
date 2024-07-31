import { Appbar } from "../components/appbar";
import { Balance } from "../components/balance";
import { User } from "../components/user";


export function Dashboard(){

    return(
        <div>
            <Appbar></Appbar>
            <Balance ></Balance>
            <User></User>
        </div>
    )
    
} 