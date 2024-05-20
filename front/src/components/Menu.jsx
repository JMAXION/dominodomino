import { Link } from "react-router-dom"
export default function Menu({name,link}){
   
    return(
        <>
        <Link to= {link}>
            <li claasName="fromCenter">{name}</li>
            </Link>
        </>
    )
}

