import React from "react";
import ErrorPage from "./pages/ErrorPage";
import {connect} from "react-redux";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {fetchError} = this.props;
        if (prevProps.fetchError !== fetchError && fetchError) {
            this.setState({hasError: true});
        }
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if (hasError) {
            return <ErrorPage/>;
        }

        return children;
    }
}

const mapStateToProps = (state) => {
    return {
        fetchError: state.reducer.fetchError
    }
}

export default connect(mapStateToProps)(ErrorBoundary);