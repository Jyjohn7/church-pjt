import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'
import './Events.css'

const event_items = [
    {
        category: '행사',
        title: '2026년 부활절 특별 예배',
        date: '2026년 4월 5일',
        time: '오전 10:00',
        location: '본당 대예배실',
        description: '부활의 기쁨을 함께 나누는 특별한 예배에 온 가족을 초대합니다.',
    },
    {
        category: '공지',
        title: '상반기 성경통독 프로그램',
        date: '2026년 3월 1일 ~ 6월 30일',
        time: '매일',
        location: '온라인 & 오프라인',
        description: '매일 정해진 분량의 말씀을 읽으며 성경 전체를 통독하는 프로그램입니다.',
    },
    {
        category: '행사',
        title: '봄 야외 예배 및 친교',
        date: '2026년 4월 19일',
        time: '오전 11:00',
        location: '교회 인근 공원',
        description: '봄을 맞아 야외에서 드리는 감사 예배와 성도 간 교제의 시간입니다.',
    },
    {
        category: '교육',
        title: '새가족 환영 세미나',
        date: '매월 첫째 주일',
        time: '오후 1:00',
        location: '교육관 201호',
        description: '새가족을 위한 교회 소개 및 신앙 안내 세미나입니다.',
    },
]

function Events() {
    return (
        <section className="events" id="events">
            <div className="container">
                <div className="section-header">
                    <p className="en-title">News & Events</p>
                    <h2>소식 및 행사</h2>
                    <div className="divider"></div>
                    <p>GNC 교회의 주요 소식과 다가오는 행사를 확인하세요</p>
                </div>

                <div className="events-grid">
                    {event_items.map((item, index) => (
                        <div className="event-card" key={index}>
                            <span className={`event-category ${item.category === '공지' ? 'notice' : item.category === '교육' ? 'education' : ''}`}>
                                {item.category}
                            </span>
                            <h3>{item.title}</h3>
                            <p className="event-description">{item.description}</p>
                            <div className="event-details">
                                <div className="event-detail">
                                    <FiCalendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                                <div className="event-detail">
                                    <FiClock size={14} />
                                    <span>{item.time}</span>
                                </div>
                                <div className="event-detail">
                                    <FiMapPin size={14} />
                                    <span>{item.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Events
