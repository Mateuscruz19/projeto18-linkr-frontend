import styled from 'styled-components';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../services/api.js';
import { AuthContext } from '../../contexts/AuthContext.js';

export default function Signin() {
  const [form, setForm] = useState({});
  const { login } = useContext(AuthContext);

  function handleForm({ value, name }) {
    setForm({ ...form, [name]: value });
  }

  function handleSendForm(e) {
    e.preventDefault();
    if (!form.email || !form.password) {
      return alert('Preencha os campos corretamente');
    }

    signIn(form)
      .then((res) => {
        if (res.data === 'Unauthorized') return alert('Verifique os dados inseridos');
        login(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <Background>
      <TittleBox>
        <TittleBig>linkr</TittleBig>
        <TittleDesc>
          save, share and discover <br />
          the best links on the web
        </TittleDesc>
      </TittleBox>
      <RightTable>
        <Form>
          <ContainerBot>
            <InputLoginStyled
              data-test='email'
              placeholder='email'
              name='email'
              type='email'
              onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })}
            ></InputLoginStyled>
            <InputLoginStyled
              data-test='password'
              placeholder='password'
              name='password'
              type='password'
              onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })}
            ></InputLoginStyled>
            <Entrar data-test='login-btn' onClick={handleSendForm}>
              <p>Log in</p>
            </Entrar>
            <RegisterBox data-test='sign-up-link' className='link' to='/registro'>
              First time?<span> Create an account!</span>
            </RegisterBox>
          </ContainerBot>
        </Form>
      </RightTable>
    </Background>
  );
}

const Background = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #151515;
  @media screen and (max-width: 800px) {
    display: block;
    height: auto;
    overflow: hidden;
  }
`;
const TittleBox = styled.div`
  height: 400px;
  width: 500px;
  margin-left: 10%;
  margin-bottom: 5%;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    padding: 20px 0px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const TittleDesc = styled.p`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 23px;
    line-height: 34px;
  }
`;

const TittleBig = styled.p`
  font-family: 'Passion One';
  font-style: normal;
  font-weight: 700;
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;
  color: #ffffff;
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 76px;
    line-height: 84px;
  }
`;

const RightTable = styled.main`
  width: 600px;
  height: 100vh;
  background: #333333;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80vh;
  }
`;

const Form = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 150px;
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    margin-top: 40px;
    padding: 0 22px;
  }
`;

const ContainerBot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 0px;
  }
`;

const InputLoginStyled = styled.input`
  width: 429px;
  height: 65px;
  left: 956px;
  top: 395px;
  background: #ffffff;
  border-radius: 6px;
  padding-left: 17px;

  &::placeholder {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 40px;
    color: #9f9f9f;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Entrar = styled.button`
  width: 429px;
  height: 65px;
  background: #1877f2;
  border-radius: 6px;
  border: none;
  outline: none;

  p {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const RegisterBox = styled(Link)`
  width: 427px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #deb876;
  cursor: pointer;
  margin-bottom: 50px;
  font-family: 'Lato';
  text-decoration-line: underline;
  color: #ffffff;
  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
