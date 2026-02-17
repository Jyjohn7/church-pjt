import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
    it('컨테이너가 렌더링되어야 한다', () => {
        const { container } = render(<App />)
        expect(container.querySelector('.app')).toBeInTheDocument()
    })

    it('네비게이션이 존재해야 한다', () => {
        render(<App />)
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
    })
})
