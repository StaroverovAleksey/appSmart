import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 180px;
  text-align: center;
  background-color: #efc8c8;
  box-shadow: -2px 0 10px 0 rgba(50, 50, 50, 0.75);
  border-radius: 5px;
  cursor: pointer;
  
  a {
    text-decoration: none;
    color: black;
  }
`;

const Name = styled.h2`
  margin: 10px 0;
  height: 50px;
  text-decoration: none;
`;

const Avatar = styled.img``;

const Description = styled.p`
  word-wrap: break-word;
  height: 60px;
  margin: 0 5px;
`;

const Card = ({character}) => {

    const formatText = (text, limit) => {
        if (text.length < limit) {
            return text;
        } else {
            return `${text.substring(0, limit)}...`;
        }
    }

    return <Container>
        <Link to={`/info/${character.id}`}>
            <Name>{formatText(character.name, 22)}</Name>
            <Avatar src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`}
                    alt={`${character.name}_avatar`}
                    width={100}
                    height={150}
            />
            <Description>{formatText(character.description, 50)}</Description>
        </Link>



    </Container>;
};

export default Card;