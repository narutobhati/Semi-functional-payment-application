import {Link} from "react-router-dom"
export function Appbar(){
    return(
        <div className="flex justify-between mx-5 my-5 rounded shadow">
            <div className="px-1 font-semibold font-sans font-semibold text-2xl py-2 "> SunPay App</div>
            <div className="flex mx-2 ">
                <div className="font-sans text-xl py-2.5 mx-2 font-semibold">Hello </div>
                 <div className="flex justify-center flex-col mt-2 mr-5 ">
                <Link to={'/signup'}>  <button onClick={()=>{
                    localStorage.clear();
                }}   type="button" className="  bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                LogOut </button></Link>
               
            </div>
                <div className="bg-slate-400 rounded-full py-2.5 px-4 text-xl font-sans font-bold m-1">S</div>
                <div> </div>
            </div>
            
        </div>
    )
}
