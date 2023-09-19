import Link from 'next/link'
import s from './Header.module.css'
import Image from 'next/image'

const Header = () => (
    <header className={s.header}>
        <Link href='/' className={s.logo}>To-Do</Link>
        <div className={s.userName} >UserName</div>
        <Link href='/profile'>
            <Image src='profileIcon.svg' alt='Profile Icon' width={30} height={30} />
        </Link>
    </header>
)

export { Header }