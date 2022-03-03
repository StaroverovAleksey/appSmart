import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getCharacter} from "../../store/actions";

const Container = styled.div`
  display: inline-block;
  margin: 0 auto;
  padding: 10px;
  background-color: #b0acac;
  box-shadow: -2px 0 10px 0 rgba(50, 50, 50, 0.75);
  border-radius: 5px;
  cursor: pointer;
`;

const InfoPage = ({characters, getCharacter}) => {

    const id = parseInt(useParams().id);
    const navigate = useNavigate();

    const [character, setCharacter] = useState(characters.find((value) => value.id === id));

    useEffect(() => {
        if (!character) {
            getCharacter(id);
        }
    }, []);

    useEffect(() => {
        setCharacter(characters.find((value) => value.id === id));
    });


    if(!character) {
        return null;
    }

    return <Container>
        <button onClick={() => navigate(-1)}>{'Назад'}</button>
        <h2>{'Комиксы'}</h2>
        <ul>
            {character.comics.items.map((value) => {
                return <li>{value.name}</li>
            })}
        </ul>

        <h2>{'Сериалы'}</h2>
        <ul>
            {character.series.items.map((value) => {
                return <li>{value.name}</li>
            })}
        </ul>

        <h2>{'Истории'}</h2>
        <ul>
            {character.stories.items.map((value) => {
                return <li>{value.name}</li>
            })}
        </ul>

        <h2>{'События'}</h2>
        <ul>
            {character.events.items.map((value) => {
                return <li>{value.name}</li>
            })}
        </ul>
    </Container>;
};

const mapStateToProps = (state) => {
    return {
        characters: state.reducer.characters
    }
}

export default connect(mapStateToProps, {getCharacter})(InfoPage);