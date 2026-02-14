import { FiCheck } from 'react-icons/fi'
import './NewFamily.css'

const steps = [
    '교회 방문 시 안내데스크에서 새가족 등록카드를 작성해 주세요.',
    '새가족 도우미가 배정되어 교회 생활을 안내해 드립니다.',
    '매월 첫째 주일 새가족 환영 세미나에 참석해 주세요.',
    '4주간의 새가족 양육과정을 통해 신앙의 기초를 다집니다.',
    '소그룹(셀)에 배정되어 성도들과 교제를 시작합니다.',
]

function NewFamily() {
    return (
        <section className="new-family" id="new-family">
            <div className="container">
                <div className="section-header">
                    <p className="en-title">Welcome</p>
                    <h2>새가족 안내</h2>
                    <div className="divider"></div>
                </div>

                <div className="new-family-content">
                    <div className="new-family-message">
                        <h3>환영합니다!</h3>
                        <p>
                            GNC 교회를 찾아주신 모든 분들을 진심으로 환영합니다.
                            처음 오시는 분들이 편안하게 예배에 참여하시고,
                            교회 공동체에 자연스럽게 정착하실 수 있도록
                            최선을 다해 돕겠습니다.
                        </p>
                        <p>
                            어떤 배경이든, 어떤 상황에 계시든 여러분은
                            하나님 안에서 소중한 존재입니다.
                            함께 예배하고 함께 성장하는 기쁨을 누리시길 바랍니다.
                        </p>
                        <div className="new-family-cta">
                            <a href="#contact" className="cta-button">문의하기</a>
                        </div>
                    </div>

                    <div className="new-family-steps">
                        <h3>등록 안내</h3>
                        <div className="steps-list">
                            {steps.map((step, index) => (
                                <div className="step-item" key={index}>
                                    <div className="step-number">
                                        <FiCheck size={16} />
                                    </div>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewFamily
