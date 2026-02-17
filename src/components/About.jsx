import { FiBookOpen, FiHeart, FiGlobe } from 'react-icons/fi'
import './About.css'

const vision_items = [
    {
        icon: <FiBookOpen size={32} />,
        title: '말씀 중심',
        description: '하나님의 말씀을 삶의 중심에 두고, 말씀으로 양육되는 성숙한 신앙 공동체를 추구합니다.',
    },
    {
        icon: <FiHeart size={32} />,
        title: '사랑의 교제',
        description: '그리스도의 사랑 안에서 서로를 돌보고, 진정한 교제와 나눔이 있는 따뜻한 공동체를 만들어갑니다.',
    },
    {
        icon: <FiGlobe size={32} />,
        title: '세상을 향한 선교',
        description: '지역사회와 세계를 향해 복음을 전하며, 그리스도의 빛으로 세상을 변화시키는 사명을 감당합니다.',
    },
]

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-header">
                    <p className="en-title">About Us</p>
                    <h2>교회 소개</h2>
                    <div className="divider"></div>
                </div>

                <div className="about-greeting">
                    <div className="about-greeting-image">
                        <div className="pastor-placeholder">
                            <span>담임목사</span>
                        </div>
                    </div>
                    <div className="about-greeting-content">
                        <h3>담임목사 인사말</h3>
                        <p>
                            GNC 교회를 방문해 주셔서 감사합니다.
                        </p>
                        <p>
                            우리 교회는 하나님의 은혜(Grace) 위에 세워진 공동체(Community)로서,
                            모든 사람이 하나님의 사랑을 경험하고 그 사랑 안에서 함께 성장하는 것을
                            비전으로 삼고 있습니다.
                        </p>
                        <p>
                            예배와 말씀, 기도와 교제를 통해 예수 그리스도를 닮아가며,
                            이웃과 세상을 섬기는 건강한 교회가 되기를 소망합니다.
                            언제든 편안하게 방문해 주세요. 여러분을 진심으로 환영합니다.
                        </p>
                        <p className="pastor-name">담임목사 <strong>홍길동</strong> 드림</p>
                    </div>
                </div>

                <div className="about-vision">
                    {vision_items.map((item, index) => (
                        <div className="vision-card" key={index}>
                            <div className="vision-icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
