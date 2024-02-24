//import logo from './logo.svg';
//import Background from "./Background";
import Monitoring from "./monitoring/Monitoring";
import Home from "./Home";
import './App.css';
import TextContent from "./TextContent";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
<Router>
    <div className="App" >
        <Helmet>
            <title>test</title>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        </Helmet>


              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/second" element={<Monitoring/>} />
              </Routes>

    </div>
      </Router>
  );
}

export default App;
