import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const nav_items = [
    { label: '교회 소개', href: '#about' },
    { label: '예배 안내', href: '#worship' },
    { label: '설교', href: '#sermons' },
    { label: '소식', href: '#events' },
    { label: '갤러리', href: '#gallery' },
    { label: '새가족', href: '#new-family' },
    { label: '조직', href: '#organization' },
    { label: '오시는 길', href: '#contact' },
]

function Navbar() {
    const [is_open, set_is_open] = useState(false)
    const [is_scrolled, set_is_scrolled] = useState(false)

    useEffect(() => {
        const handle_scroll = () => {
            set_is_scrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handle_scroll)
        return () => window.removeEventListener('scroll', handle_scroll)
    }, [])

    const handle_link_click = () => {
        set_is_open(false)
    }

    return (
        <nav className={`navbar ${is_scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <a href="#" className="navbar-logo">
                    <span className="logo-main">GNC</span>
                    <span className="logo-sub">교회</span>
                </a>

                <ul className={`navbar-menu ${is_open ? 'active' : ''}`}>
                    {nav_items.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="navbar-link"
                                onClick={handle_link_click}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="navbar-toggle"
                    onClick={() => set_is_open(!is_open)}
                    aria-label="메뉴 토글"
                >
                    {is_open ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
