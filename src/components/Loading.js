import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: wheat;
`;

const Loader = styled.h2`
  font-size: 64px;
  font-weight: bold;
  text-align: center;
`;

const Loading = ({loading}) => {
    if (!loading) {
        return null;
    }
    return <Container>
        <Loader>{'Загрузка...'}</Loader>
    </Container>;
};

const mapStateToProps = (state) => {
    return {
        loading: state.reducer.loading
    }
}

export default connect(mapStateToProps)(Loading);