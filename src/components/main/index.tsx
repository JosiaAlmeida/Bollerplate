import * as S from './style'

const Main = () =>{
    return (
        <S.Wrapper>
            <S.Logo src="reactJS.png" alt="React Avancado" />
            <S.Title>react avancado</S.Title> 
            <S.Description>TypeScript, ReactJS, NextJS e Styled Components</S.Description>
            <S.Illustration src="img2.jpg" alt="Mãos de uma moca mexendo no computador e tomando café" />
        </S.Wrapper>
    )
}

export default Main