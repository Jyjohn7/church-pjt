import { FiYoutube, FiInstagram, FiFacebook } from 'react-icons/fi'
import './Footer.css'

const footer_links = [
    { label: '교회 소개', href: '#about' },
    { label: '예배 안내', href: '#worship' },
    { label: '설교', href: '#sermons' },
    { label: '소식', href: '#events' },
    { label: '새가족', href: '#new-family' },
    { label: '오시는 길', href: '#contact' },
]

const social_links = [
    { icon: <FiYoutube size={20} />, href: '#', label: 'YouTube' },
    { icon: <FiInstagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <FiFacebook size={20} />, href: '#', label: 'Facebook' },
]

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-main">GNC</span>
                            <span className="logo-sub">교회</span>
                        </div>
                        <p className="footer-tagline">
                            하나님의 은혜 안에서 함께 성장하는 공동체
                        </p>
                    </div>

                    <div className="footer-nav">
                        <h4>바로가기</h4>
                        <ul>
                            {footer_links.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-contact-info">
                        <h4>연락처</h4>
                        <p>서울특별시 OO구 OO로 123</p>
                        <p>Tel. 02-1234-5678</p>
                        <p>info@gncchurch.org</p>
                    </div>

                    <div className="footer-social">
                        <h4>SNS</h4>
                        <div className="social-links">
                            {social_links.map((link, index) => (
                                <a
                                    href={link.href}
                                    key={index}
                                    className="social-link"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 GNC 교회. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
