import { UserContext } from "@/context/UserContext"
import { useContext } from "react"

function Dashboard() {

    const { user } = useContext(UserContext)

    return (
        <>
            {user && <h1>Bonjour <strong>{user}</strong>. Vous êtes connecté</h1>}
            {!user && <h1>Vous devez d'abord vous connecter</h1>}
        </>
    )
}

export default Dashboard