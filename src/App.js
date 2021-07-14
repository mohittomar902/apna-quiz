import NavBar from './NavBar';
import './App.css';
import QuizQue from './QuizQue';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Rule from './Rule';

function App() {





  return (
    <Router>
    <div className="App">
      <NavBar/>
    <Switch>
      < Route path="/home" component={Home}/>
      <Route path="/start"  component={Rule} />
      <Route path="/javas" > <QuizQue sub={"javas"} name={"JavaScript"} siteUrl={"https://www.interviewbit.com/javascript-interview-questions/"}/></Route>
      <Route path="/react" > <QuizQue sub={"react"} name={"ReactJs"} siteUrl={"https://www.interviewbit.com/react-interview-questions/"}/></Route>
      <Route path="/node" > <QuizQue sub={"node"} name={"NodeJs"} siteUrl="https://www.interviewbit.com/node-js-interview-questions/"/></Route>
      <Route path="/html" > <QuizQue sub={"html"} name={"HTML"} siteUrl="https://www.interviewbit.com/html-interview-questions/"/></Route>
    
    </Switch>
    </div>

    </Router>
  );
}


export default App;
