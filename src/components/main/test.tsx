import {render, screen} from '@testing-library/react'

import Main from '.'

//Component what should be test
describe('<Main />', ()=>{
    //Partial in test
    it('should render the heading',()=>{
        render(<Main />)
        expect(
            screen.getByRole('heading',{name: /react avancado/i})
            
        )
    })
    it('should make a snapShot', ()=>{
        const {container} = render(<Main />)
        expect(container.firstChild).toMatchSnapshot()
    })
    it('should render the background Color correct', ()=>{
        const {container} = render(<Main />)

        expect(container.firstChild).toHaveStyle({'background-color': '#06092b'})
    })
})