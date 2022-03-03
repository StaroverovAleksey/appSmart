import React, {useEffect} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {Link, Navigate, useParams} from "react-router-dom";
import {loadingPage} from "../../../store/actions";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
  a, p {
    font-size: 26px;
    margin: 0 10px 0 0;
  }
`;

const Pagination = ({loadingPage}) => {

    const page = parseInt(useParams().page);
    useEffect(async () => {
        loadingPage(page);
    });

    if (isNaN(page)) {
        return <Navigate to={'/list/1'}/>
    }

    return <Container>
        {page > 1 ?
            <Link to={`/list/${page - 1}`}>{page - 1}</Link>
        : null}
        <p>{page}</p>
        <Link to={`/list/${page + 1}`}>{page + 1}</Link>
    </Container>;
};

const mapStateToProps = (state) => {
    return {
        page: state.reducer.page
    }
}

export default connect(mapStateToProps, {loadingPage})(Pagination);