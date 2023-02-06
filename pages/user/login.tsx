import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

function Login() {

    const [email, setEmail] = useState('');
    const {setUser} = useContext(UserContext);
    const router = useRouter();

    const onSubmit = (e) => {
        e.preventDefault();
        if(email){
            setUser(email);
            console.log(router);
            router.push('/');
        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <input type="text" placeholder="email" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;