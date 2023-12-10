"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavList({ session }) {
    const pathname = usePathname();

    return (
        <nav className='nav-main'>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className={`nav-link${pathname === "/" ? " active" : ""}`} href="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className={`nav-link${pathname === "/profile" ? " active" : ""}`} href="/profile">Profile</Link>
                </li>

                {
                    !session ? (
                        <li className="nav-item">
                            <Link className='nav-link' href="/api/auth/signin">Login</Link>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link className='nav-link' href="/api/auth/signout">Logout</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}
