export function Inputbox({tittle,placeholder,type,onchange}){
    return(
        <div className="py-2">
            <div className="pl-4 pb-1 font-medium ">
                {tittle}
            </div>
            <div className="px-4">
                <input onChange={onchange} placeholder={placeholder} className="px-1 py-1 w-full border rounded border-black" type={type}  /> 
            </div>
           
            

        </div>
    )
}