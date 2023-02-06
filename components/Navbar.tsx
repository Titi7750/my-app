import { UserContext } from '@/context/UserContext';
import Link from 'next/link'
import { useContext } from 'react';

function Navbar() {

  const { user, setUser } = useContext(UserContext)

  const logout = () => {
    setUser(null)
  }

  return (
    <nav>
      <Link href={'/'}>Accueil</Link>
      <Link href={'/about'}>A propos</Link>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/contact'}>Contact</Link>
      {!user && <Link href={'/user/login'}>Login</Link>}
      {user && <Link  href={'dashboard'}>Dashboard</Link>}
      {user && <button onClick={logout}>Bonjour <strong>{user}</strong>. Déconnectez-vous</button>}
    </nav>
  )
}

export default Navbar;