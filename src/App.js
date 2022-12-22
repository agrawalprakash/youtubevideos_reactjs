import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Allvideos from './components/Allvideos';
import AddVideo from './components/AddVideo';
import Header from './components/Header';
import Menus from './components/Menus';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  const btnHandle = () => {
    toast("This is my first message");
  }

  return (
  <div className="text-center">
   <Router>
    <ToastContainer />
    
      <Container>
        <Header></Header>
        <Row>
          <Col md={4}> 
             <Menus />
          </Col>
          <Col md={8}> 
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/add-videos" element={<AddVideo />} exact />
              <Route path="/view-videos" element={<Allvideos />} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
  </div>
  );
}

export default App;
