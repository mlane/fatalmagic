import { render } from '@testing-library/react'
import App from '../App'

test('displays heading', () => {
  const { getByRole } = render(<App />)
  expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
})
