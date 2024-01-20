//import logo from './logo.svg';
import Background from "./Background";
import './App.css';
import TextContent from "./TextContent";
import {Helmet} from "react-helmet";



function App() {
  return (

    <div className="App" >
        <Helmet>
            <title>test</title>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        </Helmet>
        <Background/>
             <header className="App-header">
                <TextContent/>
        </header>

    </div>
  );
}

export default App;
