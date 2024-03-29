import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Header></Header>

        <Main></Main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
