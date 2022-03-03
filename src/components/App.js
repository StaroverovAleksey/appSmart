import React from "react";
import ListPage from "./pages/ListPage/ListPage";
import Loading from "./Loading";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import InfoPage from "./pages/InfoPage";

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path={'/list/:page'} element={<ListPage/>}/>
            <Route path={'/info/:id'} element={<InfoPage/>}/>
            <Route path={'*'} element={<Navigate to={'/list/1'}/>}/>
        </Routes>
        <Loading/>
    </BrowserRouter>;
};

export default App;