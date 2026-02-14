import { FiSun, FiCalendar, FiMoon } from 'react-icons/fi'
import './Worship.css'

const worship_items = [
    {
        icon: <FiSun size={36} />,
        name: '주일예배',
        time: '매주 일요일',
        schedule: ['1부 예배: 오전 9:00', '2부 예배: 오전 11:00'],
        location: '본당 대예배실',
    },
    {
        icon: <FiCalendar size={36} />,
        name: '수요예배',
        time: '매주 수요일',
        schedule: ['저녁 7:30'],
        location: '본당 대예배실',
    },
    {
        icon: <FiMoon size={36} />,
        name: '금요기도회',
        time: '매주 금요일',
        schedule: ['저녁 8:00'],
        location: '본당 소예배실',
    },
]

function Worship() {
    return (
        <section className="worship" id="worship">
            <div className="container">
                <div className="section-header">
                    <p className="en-title">Worship</p>
                    <h2>예배 안내</h2>
                    <div className="divider"></div>
                    <p>하나님께 드리는 거룩한 예배에 여러분을 초대합니다</p>
                </div>

                <div className="worship-grid">
                    {worship_items.map((item, index) => (
                        <div className="worship-card" key={index}>
                            <div className="worship-icon">{item.icon}</div>
                            <h3>{item.name}</h3>
                            <p className="worship-time">{item.time}</p>
                            <div className="worship-schedule">
                                {item.schedule.map((s, i) => (
                                    <p key={i}>{s}</p>
                                ))}
                            </div>
                            <p className="worship-location">{item.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Worship
