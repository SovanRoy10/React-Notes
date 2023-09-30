import { useContext } from "react"
import UserContext from "../context/userContext"


export default function Profile() {
    const {user} = useContext(UserContext)
    // console.log(user)

 if(!user) return <div>Please log in</div>
 return  <div>welcome {user.username} </div>
 
}
