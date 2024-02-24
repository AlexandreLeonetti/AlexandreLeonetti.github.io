//import logo from './logo.svg';
import Background from "./Background";
import SecondPage from "./SecondPage";
import './App.css';
import TextContent from "./TextContent";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function Home() {
  return (
    <div className="App" >
                <Background/>
              <header className="App-header">
                <TextContent/>
                </header>

    </div>
  );
}

export default Home;
