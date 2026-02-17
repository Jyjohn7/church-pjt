import './Gallery.css'

const gallery_items = [
    { title: '주일예배', color: '#2a3f6e' },
    { title: '성탄절 행사', color: '#1B2A4A' },
    { title: '청년부 수련회', color: '#3a5080' },
    { title: '선교 활동', color: '#1a3050' },
    { title: '봉사 활동', color: '#2d4a7a' },
    { title: '교회 야유회', color: '#1e3560' },
]

function Gallery() {
    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <div className="section-header">
                    <p className="en-title">Gallery</p>
                    <h2>갤러리</h2>
                    <div className="divider"></div>
                    <p>GNC 교회의 아름다운 순간들을 함께 나눕니다</p>
                </div>

                <div className="gallery-grid">
                    {gallery_items.map((item, index) => (
                        <div
                            className="gallery-item"
                            key={index}
                            style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)` }}
                        >
                            <div className="gallery-overlay">
                                <span>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
