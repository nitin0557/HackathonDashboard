import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ChallengeDetails from "./ChallengeDetails";

interface Challenge {
  id: number;
  challengeName: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  levelType: "Easy" | "Medium" | "Hard";
  status: "Active" | "Upcoming" | "Past";
}

interface EditDetailsProps {
  challenges: Challenge[];
  updateChallenge: (updatedChallenge: Challenge) => void;
  deleteChallenge: (id: number) => void;
}

const EditDetails: React.FC<EditDetailsProps> = ({
  challenges,
  updateChallenge,
  deleteChallenge,
}) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams<{ id: string }>();
  const challenge = challenges.find((ch) => ch.id === parseInt(id!));
  const navigate = useNavigate();

  const handleDelete = () => {
    if (challenge) {
      deleteChallenge(challenge.id);
      navigate("/");
    }
  };

  return (
    <>
      <Container fluid className="bg-dark text-white p-5">
        <Row className="align-items-center">
          <Col md={8}>
            <h1 className="mb-4">Edit Challenge Details</h1>
            <p className="lead">
              Use this interface to edit the details of your AI/Data Science
              challenges. Keep your challenges updated to reflect the latest
              information.
            </p>
            <Button variant="primary" className="me-2" onClick={handleShow}>
              Edit Details
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete Challenge
            </Button>
          </Col>
          <Col md={4} className="text-center">
            <img
              src={challenge?.image}
              alt="Challenge"
              className="img-fluid"
              style={{ width: "50%" }}
            />
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Challenge Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChallengeDetails
            challenges={challenges}
            updateChallenge={updateChallenge}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Container className="my-5">
        <h3>Overview</h3>
        <p>{challenge?.description}</p>
      </Container>
    </>
  );
};

export default EditDetails;
