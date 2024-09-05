import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import rocketimage from '../assets/icons/rocket.svg';
import CreateChallenge from './CreateChallenge';


interface Challenge {
  id: number;
  challengeName: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  levelType: 'Easy' | 'Medium' | 'Hard';
  status: 'Active' | 'Upcoming' | 'Past';
}


// Define the props structure for the Header component
interface HeaderProps {
  addChallenge: (challenge: Challenge) => void;
}

const Header: React.FC<HeaderProps> = ({ addChallenge }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="bg-dark text-white p-5">
        <Row>
          <Col md={8}>
            <h1>Accelerate Innovation with Global AI Challenges</h1>
            <p>
              AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
            </p>
            <Button variant="primary" onClick={handleShow}>
              Create Challenge
            </Button>
          </Col>
          <Col md={4} className="text-center">
            <img src={rocketimage} alt="Rocket" style={{ width: '50%' }} />
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Challenge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateChallenge addChallenge={addChallenge} closeModal={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
