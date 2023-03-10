import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/api.js"

export default function Signin() {

    const [form, setForm] = useState({});

  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({...form,[name]: value,});
  }

  function handleSendForm (event) {
    event.preventDefault();
    console.log(form)
    if(!form.username || !form.email || !form.password || !form.picture){
      return alert("Preencha os campos corretamente");
    }
    console.log(form)
    signUp(form).then((res) => {
      console.log(res)
      alert("Registrado com sucesso!")
      navigate("/");
    })
    .catch((err) => {
     alert("Erro ao registrar o usuario,verifique os campos inseridos.");
     err.response.data.map((e) => {
     return console.log(e)
     })
    })
  }


    return(
        <Background>
            <TittleBox>
                <TittleBig>linkr</TittleBig>
                <TittleDesc>save, share and discover <br/>the best links on the web</TittleDesc>
            </TittleBox>
            <RightTable>
            <Form>
                <ContainerBot>
                    <Email placeholder="email" name="email" type="email"
                     onChange={(e) => handleForm({ name: e.target.name, value: e.target.value,})}>
                    </Email>
                    <Senha placeholder="password" name="password" type="password"
                    onChange={(e) => handleForm({name: e.target.name,value: e.target.value,})}>
                    </Senha>
                    <Senha placeholder="username" name="username"
                    onChange={(e) => handleForm({name: e.target.name,value: e.target.value,})}>
                    </Senha>
                    <Senha placeholder="picture" name="picture"
                    onChange={(e) => handleForm({name: e.target.name,value: e.target.value,})}>
                    </Senha>
                <Entrar onClick={handleSendForm}><p>Sign Up</p></Entrar>
                <Link className="link" to="/">
                <RegisterBox>Switch back to log in</RegisterBox>
                </Link>
                </ContainerBot>
                </Form>
            </RightTable>
        </Background>
    )
}


const Background = styled.div`

    height: 100%;
    min-height: 100vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#151515;
`
const TittleBox = styled.div`


    height:400px;
    width:500px;
    margin-left:10%;
    margin-bottom:5%;
`
const TittleDesc = styled.p`

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;

`


const TittleBig = styled.p`

    font-family: 'Passion One';
    font-style: normal;
    font-weight: 700;
    font-size: 106px;
    line-height: 117px;
    letter-spacing: 0.05em;
    color: #FFFFFF;

    `


const RightTable = styled.main`

    width: 600px;
    height: 100vh;
    background: #333333;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    display:flex;


`

const Form = styled.form`

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom:150px;

`;



const ContainerBot = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    margin-top:30px;

`



const Email = styled.input`

    width: 429px;
    height: 65px;
    left: 956px;
    top: 395px;
    background: #FFFFFF;
    border-radius: 6px;

    &::placeholder{

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 40px;
    color: #9F9F9F;

    }


`


const Senha = styled.input`

    width: 429px;
    height: 65px;
    left: 956px;
    top: 395px;
    background: #FFFFFF;
    border-radius: 6px;

    &::placeholder{

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 40px;
    color: #9F9F9F;

    }
`

const Entrar = styled.button`

    width: 429px;
    height: 65px;

    background: #1877F2;
    border-radius: 6px;
    border:none;
    outline:none;

    p{

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #FFFFFF;

    }

    &:active {
            transform: scale(0.98);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }

`


const RegisterBox = styled.p`

    width: 427px;

    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #deb876;
    cursor: pointer;
    margin-bottom:50px;
    font-family: 'Lato';
    text-decoration-line: underline;
    color: #FFFFFF;

    &:hover{
        text-decoration: underline;
        text-decoration-color:blue;
    }

`