import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import Card from "./Card";
import Pagination from "./Pagination";

const Container = styled.div`
  align-content: center;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

const ListPage = ({characters}) => {

    return <>
        <Container>
            {characters.length ? characters.map((value) => {
                return <Card key={value.name} character={value}/>;
            })
            : <div>{'Нет данных'}</div>}
        </Container>
        <Pagination/>
    </>;
};

const mapStateToProps = (state) => {
    return {
        characters: state.reducer.characters
    }
}

export default connect(mapStateToProps)(ListPage);