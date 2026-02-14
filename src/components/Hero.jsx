import { FiChevronDown } from 'react-icons/fi'
import './Hero.css'

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <p className="hero-subtitle">Grace & Community</p>
                <h1 className="hero-title">
                    하나님의 은혜 안에서<br />
                    함께 성장하는 공동체
                </h1>
                <p className="hero-description">
                    GNC 교회는 하나님의 말씀 위에 세워진 믿음의 공동체입니다.<br />
                    예수 그리스도의 사랑으로 세상을 섬기며, 모든 이를 환영합니다.
                </p>
                <div className="hero-buttons">
                    <a href="#worship" className="hero-btn primary">예배 안내</a>
                    <a href="#new-family" className="hero-btn secondary">새가족 환영</a>
                </div>
            </div>
            <a href="#about" className="hero-scroll-down" aria-label="아래로 스크롤">
                <FiChevronDown size={28} />
            </a>
        </section>
    )
}

export default Hero
