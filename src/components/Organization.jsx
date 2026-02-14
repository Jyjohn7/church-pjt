import { FiUsers, FiMusic, FiBook, FiSmile, FiHeart, FiStar } from 'react-icons/fi'
import './Organization.css'

const departments = [
    {
        icon: <FiBook size={28} />,
        name: '교육부',
        description: '영아부, 유치부, 초등부, 중고등부의 신앙 교육을 담당합니다.',
    },
    {
        icon: <FiUsers size={28} />,
        name: '청년부',
        description: '대학생 및 청년들의 신앙 성장과 교제를 위한 모임입니다.',
    },
    {
        icon: <FiMusic size={28} />,
        name: '찬양팀',
        description: '예배를 이끄는 찬양과 악기 연주를 담당합니다.',
    },
    {
        icon: <FiHeart size={28} />,
        name: '봉사부',
        description: '교회 내 봉사와 지역사회 섬김 활동을 진행합니다.',
    },
    {
        icon: <FiSmile size={28} />,
        name: '교제부',
        description: '성도 간 친교와 교제 행사를 기획하고 운영합니다.',
    },
    {
        icon: <FiStar size={28} />,
        name: '선교부',
        description: '국내외 선교사 지원 및 선교 활동을 추진합니다.',
    },
]

function Organization() {
    return (
        <section className="organization" id="organization">
            <div className="container">
                <div className="section-header">
                    <p className="en-title">Organization</p>
                    <h2>교회 조직</h2>
                    <div className="divider"></div>
                    <p>GNC 교회의 각 부서와 사역팀을 소개합니다</p>
                </div>

                <div className="org-grid">
                    {departments.map((dept, index) => (
                        <div className="org-card" key={index}>
                            <div className="org-icon">{dept.icon}</div>
                            <h3>{dept.name}</h3>
                            <p>{dept.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Organization
