import { Link } from "react-router-dom";
import styled from "styled-components";
import { ConteinerPost } from "../../components/ConteinerPost";
import veio from "../../img/image 4.svg";

export default function Posts(){
    return(
        <ConteinerPost>
            <Timeline>
                <h1>
                    timeline
                </h1>
                <CaixaInsert>
                    <img src={veio} alt="imagem de perfil"/>
                    <CaixaPostInputs>
                        <form onSubmit="">
                            <CaixaInputs>
                                <input className="primeiro" placeholder="What are you going to share today?"/>
                                <input placeholder="https://..."/>
                                <input className="ultimo" placeholder="Awesome article about #javascript"/>
                            </CaixaInputs>
                        </form>
                        <ButtonPost>
                            <button type="submit">Publish</button>
                        </ButtonPost>
                    </CaixaPostInputs>
                </CaixaInsert>
                <CaixaMaps>
                    <img src={veio} alt="imagem de perfil"/>
                    <MapsConteudos>
                        <p className="nome">Juvenal Juvêncio</p>
                        <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</p>
                        <p>[parte do Link ainda a ser implementada]</p>
                    </MapsConteudos>
                </CaixaMaps>
            </Timeline>
            <HashTags>
                <p className="titulo">trending</p>
                <Link to="">
                    <p># javascript</p>
                </Link>
                <Link to="">
                    <p># react</p>
                </Link>
                <Link to="">
                    <p># react-native</p>
                </Link>
                <Link to="">
                    <p># material</p>
                </Link>
                <Link to="">
                    <p># web-dev</p>
                </Link>
                <Link to="">
                    <p># mobile</p>
                </Link>
                <Link to="">
                    <p># css</p>
                </Link>
                <Link to="">
                    <p># html</p>
                </Link>
                <Link to="">
                    <p># node</p>
                </Link>
                <Link to="">
                    <p># sql</p>
                </Link>
            </HashTags>
        </ConteinerPost>
    )
    
};


const Timeline = styled.div`
        flex-direction: column;
        margin-top: 78px;
        width: 611px;

        h1{
            font-family: 'Oswald';
            font-size: 43px;
            font-weight: 700;
            color: #ffffff;
        };
`;

const CaixaInsert = styled.div`
        display: flex;
        margin-top: 43px;
        padding: 16px;
        width: 611px;
        justify-content: space-around;
        flex-direction: row;
        background-color: #ffffff;
        border-radius: 10px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 100%;
        }
`;

const CaixaPostInputs = styled.div`
        flex-direction: column;
`;

const CaixaInputs = styled.div`
        input{
            border-radius: 10px;
            width: 503px;
            height: 40px;
            background-color: #EFEFEF;
            margin-bottom: 5px;
            margin-left: 30px;
            font-family: 'Lato';
            font-size: 15px;
            font-weight: 300;
            color: #949494;
        };

        .primeiro{
                width: 445px;
                height: 40px;
                color: #707070;
                background-color: #ffffff;
                font-size: 20px;

        }

        .ultimo{
               height: 66px; 
        }

`;

const ButtonPost = styled.div`
        display: flex;
        justify-content: flex-end;
        button{
            background-color: #1877F2;
            width: 112px;
            height: 31px;
            border-radius: 10px;
            color: #ffffff;
            font-family: 'Lato';
            font-size: 14px;
            font-weight: 700;
        };
`;

const CaixaMaps = styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 29px;
        width: 611px;
        background-color: #171717;
        border-radius: 10px;
        padding: 16px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 100%;
        };
`;

const MapsConteudos = styled.div`
        flex-direction: column;
        margin-left: 30px;

        p{
            flex-wrap: wrap;
            font-family: 'Lato';
            font-size: 17px;
            font-weight: 400;
            color: #B7B7B7;
            margin-bottom: 7px;
        };

        .nome{
            color: #ffffff;
        }
`;

const HashTags = styled.div`
        flex-direction: column;
        width: 301px;
        height: 406px;
        background-color: #171717;
        margin-top: 185px;
        margin-left: 25px;
        border-radius: 10px;
        color: #ffffff;
        
        p{
            font-family: 'Lato';
            font-size: 19px;
            font-weight: 700;
            margin: 16px;
        }

        .titulo{
            font-family: 'Oswald';
            font-size: 27px;
            font-weight: 700;
        }
`;