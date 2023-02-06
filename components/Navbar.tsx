import Link from 'next/link'

function Navbar () {
    return (
        <nav>
        <Link href={'/'}>Accueil</Link>
        <Link href={'/about'}>A propos</Link>
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/contact'}>Contact</Link>
      </nav>
    )
}

export default Navbar;