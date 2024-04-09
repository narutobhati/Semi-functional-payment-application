export function Button({title,onclick}){
    return (
        <div className="px-4 py-3">
            <button onClick={onclick} className="w-full py-1.5 rounded text-slate-50 text-center bg-slate-500" >{title} </button>
        </div>
            
    )
}