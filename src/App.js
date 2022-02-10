import './App.scss';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/home/Home";

const App = () => {
    return (
        <div className={'App'}>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link to="/svg-graph">SVG Graph</Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="svg-graph/*" element={<SvgGraph/>}/>*/}
                </Routes>
            </Router>
        </div>
    )
};

export default App;
