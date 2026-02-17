import { FiPlay } from 'react-icons/fi'
import './Sermons.css'

const sermon_items = [
    {
        title: '믿음의 여정, 새로운 시작',
        pastor: '홍길동 목사',
        date: '2026년 2월 9일',
        scripture: '히브리서 11:1-6',
    },
    {
        title: '사랑으로 하나 되는 공동체',
        pastor: '홍길동 목사',
        date: '2026년 2월 2일',
        scripture: '고린도전서 13:1-13',
    },
    {
        title: '하나님의 인도하심을 따라',
        pastor: '홍길동 목사',
        date: '2026년 1월 26일',
        scripture: '시편 23:1-6',
    },
]

function Sermons() {
    return (
        <section className="sermons" id="sermons">
            <div className="container">
                <div className="section-header">
                    <p className="en-title">Sermons</p>
                    <h2>설교 영상</h2>
                    <div className="divider"></div>
                    <p>은혜로운 말씀을 다시 들으실 수 있습니다</p>
                </div>

                <div className="sermons-grid">
                    {sermon_items.map((item, index) => (
                        <div className="sermon-card" key={index}>
                            <div className="sermon-thumbnail">
                                <div className="sermon-play-btn">
                                    <FiPlay size={24} />
                                </div>
                            </div>
                            <div className="sermon-info">
                                <h3>{item.title}</h3>
                                <p className="sermon-scripture">{item.scripture}</p>
                                <div className="sermon-meta">
                                    <span>{item.pastor}</span>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sermons-more">
                    <a href="#" className="sermons-more-btn">더 많은 설교 보기</a>
                </div>
            </div>
        </section>
    )
}

export default Sermons
