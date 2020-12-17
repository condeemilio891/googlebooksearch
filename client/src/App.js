import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavePage from "./pages/SavePage";
import SearchBooks from "./pages/Search";
import MyNav from "./components/MyNav";
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <MyNav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/Search" component={SearchBooks}/>
          <Route exact pathe="/Save" component={SavePage}/>
    
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;


