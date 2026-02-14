import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import './Contact.css'

const contact_info = [
    {
        icon: <FiMapPin size={22} />,
        title: '주소',
        lines: ['서울특별시 OO구 OO로 123', 'GNC 교회'],
    },
    {
        icon: <FiPhone size={22} />,
        title: '전화',
        lines: ['02-1234-5678'],
    },
    {
        icon: <FiMail size={22} />,
        title: '이메일',
        lines: ['info@gncchurch.org'],
    },
    {
        icon: <FiClock size={22} />,
        title: '사무실 운영시간',
        lines: ['평일 09:00 ~ 18:00', '토요일 09:00 ~ 13:00'],
    },
]

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <p className="en-title">Contact</p>
                    <h2>오시는 길</h2>
                    <div className="divider"></div>
                </div>

                <div className="contact-content">
                    <div className="contact-map">
                        <div className="map-placeholder">
                            <FiMapPin size={40} />
                            <p>지도 영역</p>
                            <span>Google Maps 또는 카카오맵 연동 예정</span>
                        </div>
                    </div>

                    <div className="contact-info-grid">
                        {contact_info.map((item, index) => (
                            <div className="contact-info-item" key={index}>
                                <div className="contact-icon">{item.icon}</div>
                                <div>
                                    <h4>{item.title}</h4>
                                    {item.lines.map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact-transport">
                    <h3>교통 안내</h3>
                    <div className="transport-grid">
                        <div className="transport-item">
                            <span className="transport-badge subway">지하철</span>
                            <p>O호선 OO역 O번 출구에서 도보 5분</p>
                        </div>
                        <div className="transport-item">
                            <span className="transport-badge bus">버스</span>
                            <p>OOO, OOO, OOO번 버스 'OO정류장' 하차</p>
                        </div>
                        <div className="transport-item">
                            <span className="transport-badge car">자가용</span>
                            <p>교회 건물 지하 주차장 이용 가능 (주일 무료)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
