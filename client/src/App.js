import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SaveBooks from "./pages/SaveBooks";
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
    
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;


