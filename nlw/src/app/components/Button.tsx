interface ButtonProps {
    text?:string
}



export function Button (props :ButtonProps){


return <button className="bg-amber-500 rounded-sm px-2">{props.text || 'Enviar'}</button>

}