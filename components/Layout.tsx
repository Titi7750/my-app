import { UserContext } from "@/context/UserContext";
import { useState } from "react";
import Navbar from "./Navbar";

function Layout({ children }) {

    const [user, setUser] = useState(null)

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <Navbar />
                {children}
            </UserContext.Provider>
        </>
    )
}

export default Layout;