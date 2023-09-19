import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, About, Contact, Login, Blog, Error, Create, StoreItem, Admin, Store} from "./components";
import "./index.css";
import PrivateRoute from "./PrivateRoute"
import { AuthProvider } from "./contexts/AuthContext"


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/login" exact component={() =><Login />} />
          <Route path="/blog" exact component={() =><Blog />} />
          <Route path="/error" exact component={() =><Error />} />
          {/* <Route path="/:slug" component={Post} /> */}
          <Route path="/store" exact component={() =><Store />} />
          <PrivateRoute path="/create" exact component={() =><Create />} />
          <PrivateRoute path="/additems" exact component={() =><StoreItem />} />
          <PrivateRoute path="/admin" exact component={() =><Admin />} />
        </Switch>
        <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
