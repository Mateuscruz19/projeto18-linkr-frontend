import styled from "styled-components";

export default function MapsConteudos(avatar, name, description, tags){
    return(
        <CaixaMaps >
            <img src={avatar} alt="imagem de perfil" />
            <MapsConteudos>
                <p className="nome">{name}</p>
                    {description}
                    {tags.map(( index) => (
                        <HashtagasPosts key={index.id}>
                            <p>
                                {index.nameHashtag}
                            </p>
                        </HashtagasPosts>
                    ))}
                <p>{l.linkPost}</p>
            </MapsConteudos>
        </CaixaMaps>
    )
};

const CaixaMaps = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 29px;
  width: 611px;
  background-color: #171717;
  border-radius: 10px;
  padding: 16px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

const MapsConteudos = styled.div`
  flex-direction: column;
  margin-left: 30px;

  p {
    flex-wrap: wrap;
    font-family: "Lato";
    font-size: 17px;
    font-weight: 400;
    color: #b7b7b7;
    margin-bottom: 7px;
  }

  .nome {
    color: #ffffff;
  }
`;

const HashtagasPosts = styled.div`
    p{
        font-family: 'Lato';
        font-size: 17px;
        font-weight: 400;
        color: #ffffff;
    }
`;