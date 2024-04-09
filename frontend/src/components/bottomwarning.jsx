export function Bottomwarning({content,todo,address}){
    return (
        <div className="text-center px-4 pb-2">
    {content} <a href={address} class="underline font-bold  ">
  {todo}
</a>
        </div>
    )
}