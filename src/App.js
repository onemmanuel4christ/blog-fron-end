import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import { Write } from "./pages/write/Write";
import SinglePost from "./pages/singlePost/SinglePost";
import { Topbar } from "./topbar/Topbar";
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar /> 
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/contact" element= {<Contact />} />
        <Route path="/login" element= {user ? <Home /> : <Login />} />
        <Route path="/register" element= {user ? <Home /> : <Register />} />
        <Route path="/write" element= {user ? <Write /> : <Register />} />
        <Route path="/settings" element= {user ? <Settings /> : <Register />} />
        <Route path="/post/:postid" element= {<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
