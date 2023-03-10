import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTrendings } from "../services/api";
import axios from "axios";

export default function TrendingsBar(props){

	const nav = useNavigate()

	const [trendings, setTrendings] = useState([]);

	useEffect(() => {
		//const prom = getTrendings;
		const prom = axios.get(`${process.env.REACT_APP_API_URL}/trending`)
		prom.then((res) => setTrendings(res.data));
	},[])

		// <InfoHashtags># javascript</InfoHashtags>

	return(
		<HashTags>
		<TitleHashtag>trending</TitleHashtag>

		<ContainerHashtags>
			{trendings.map((e, i) => (
				<InfoHashtags key={i} onClick={()=>nav(`/hashtag/${e.name.substring(1)}`)}> {e.name} </InfoHashtags>
			))}
		</ContainerHashtags>
	  </HashTags>
	)
}

const InfoHashtags = styled.p`
  font-family: "Lato";
  font-size: 19px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
  cursor: pointer;
`;

const TitleHashtag = styled.h1`
  width: 100%;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
  padding: 9px 0px 12px 16px;
  border-bottom: 1px solid #484848;
`;

const HashTags = styled.div`
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: #171717;
  border-radius: 16px;
  color: #ffffff;
  position: sticky;
  top: 100px;
`;

const ContainerHashtags = styled.div`
  width: 100%;
  padding: 22px 16px 20px 16px;
`;