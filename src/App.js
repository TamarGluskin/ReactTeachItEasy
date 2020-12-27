import React from 'react';
import './App.css';
import LogIn from './comps/logIn';
import NewTeacher from './comps/newTeacher';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from './comps/Menu';
import Menutry from './comps/menutry';
import Teacher from './comps/Teacher';
import addStudent from './comps/addStudent';
import CustomTable from './comps/CustomTable';
import Student from './comps/Classes1';
import Subject from './comps/Subject';
import Try from './comps/try';
import Book from './comps/Book';
import Classes from './comps/Student';
import MapOfClass from './comps/MapOfClass';
import MyButtons from './comps/MyButtons';
import Calendar from "./comps/Calendar/index";
import StudentCard from './comps/StudentCard';
import Header from './comps/Header';
import Basic from './comps/Basic';

import 'moment-timezone';
//import addStudent from './comps/addStudent';


function App() {
  return (
    <div className="App">
      <Basic> </Basic>
      <switch>
        {<Route path="/" component={LogIn} exact />}
        <Route path="/newTeacher" component={NewTeacher} />
        <Route path="/addStudent" component={addStudent} />
        {<Route path="/logIn" component={LogIn} />}
        {<Route path="/menu" component={Menu} />}
        {<Route path="/menutry" component={Menutry} />}
        {<Route path="/teacher" component={Teacher} />}
        {<Route path="/subject" component={Subject} />}
        {<Route path="/customTable" component={CustomTable} />}
        {<Route path="/student" component={Student} />}
        {<Route path="/book" component={Book} />}
        {<Route path="/classes" component={Classes} />}
        {<Route path="/mapOfClass" component={MapOfClass} />}
        {<Route path="/myButtons" component={MyButtons} />}
        {<Route path="/calendar" component={Calendar} />}
        {<Route path="/studentCard" component={StudentCard} />}
        {<Route path="/header" component={Header} />}
        {<Route path="/basic" component={Basic} />}

        {<Route path="/try" component={Try} />}

      </switch>

    </div>
  );
}

export default App;
//<header className="App-header"> </header>