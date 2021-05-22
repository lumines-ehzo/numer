import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './pages/Home'

afterEach(cleanup)

describe('getByText', () => {
  it('should render `6104062630212`', () => {
    const { getByText } = render(<App />)
    getByText('6104062630212')
  })
})
// it("adds correctly",()=>{
//   expect(1+1).toEqual(2);
// })
