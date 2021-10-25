import styled, {keyframes, css} from 'styled-components'

export const Title = styled.h1`
  color: #fff;
  /* font-size: 24px;
  color: ${props => props.error ? 'red' : '#7159c1'};
  font-family: Arial, Helvetica, sans-serif;

  small{
    font-size: 14px; 
    color: #333;
  } */
`;
 
export const Container = styled.div`
  max-width: 700px; /*definindo largura maxima para conteiner */
  background: #fff; /* cor de fundo branco*/
  border-radius: 4px; /* a o radio de borda de 4px*/
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px; /*espaçamento interno de 30px */
  margin: 80px auto; /* margem em cima de 80 px, e nas latereais como auto, assim ficando centralizado*/
  
  h1{
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center; /* ficar alinhado o texto e icons */
  }
  svg {
    margin-right: 10px; /*espaçamento do icons com texto */
  }
`;
export const Form = styled.form`
  margin-top: 30px; /*margin de cima, para ficar com espaçamento do h1 para form */
  display: flex; 
  flex-direction: row; /*garente que o buton mais, e form fica um ao lado do outro */

  input {
    flex: 1; /*isso faz com que o form ocupe todo espaço possivel */
    border: 1px solid #eee;
    padding: 10px 15px; /* altura e largura de 10px e 15px */
    border-radius: 4px; /*aredonda a borda do input */
    font-size: 16px; /*tamanho da fonte */
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

// possopegar propriedades dos componentes também
export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  /*aqui a estilização vai ocorrer apenas quando estiver desabilitado*/
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;



