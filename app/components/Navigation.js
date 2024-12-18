import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css'

// Komponent nawigacji, który przyjmuje listę linków jako props
export default function Navigation() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <img src={logoImg.src} alt="A plate with food on it" />
                NextLevel Food
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/meals/share">Share Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                    <li>
                        <Link href="/meals/JakasStrona">Dynamic</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}
