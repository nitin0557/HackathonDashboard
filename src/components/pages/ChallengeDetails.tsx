import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

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

interface ChallengeDetailsProps {
  challenges: Challenge[];
  updateChallenge: (updatedChallenge: Challenge) => void;
  closeModal: () => void;
}

const ChallengeDetails: React.FC<ChallengeDetailsProps> = ({
  challenges,
  updateChallenge,
  closeModal,
}) => {
  const { id } = useParams<{ id: string }>();
  const challenge = challenges.find((ch) => ch.id === parseInt(id!));
  const navigate = useNavigate();

  const [challengeName, setChallengeName] = useState<string>(
    challenge?.challengeName || ""
  );
  const [startDate, setStartDate] = useState<string>(
    challenge?.startDate || ""
  );
  const [endDate, setEndDate] = useState<string>(challenge?.endDate || "");
  const [description, setDescription] = useState<string>(
    challenge?.description || ""
  );
  const [image, setImage] = useState<string>(challenge?.image || "");
  const [levelType, setLevelType] = useState<"Easy" | "Medium" | "Hard">(
    challenge?.levelType || "Easy"
  );

  const handleEdit = () => {
    if (challenge) {
      const updatedChallenge: Challenge = {
        ...challenge,
        challengeName,
        startDate,
        endDate,
        description,
        image,
        levelType,
      };
      updateChallenge(updatedChallenge);
      navigate("/");
    }
    closeModal();
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleEdit}>
          <Form.Group controlId="challengeName">
            <Form.Label>Challenge Name</Form.Label>
            <Form.Control
              type="text"
              value={challengeName}
              onChange={(e) => setChallengeName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImage(URL.createObjectURL(e.target.files[0]));
                }
              }}
              required
            />
          </Form.Group>

          <Form.Group controlId="levelType">
            <Form.Label>Level Type</Form.Label>
            <Form.Control
              as="select"
              value={levelType}
              onChange={(e) =>
                setLevelType(e.target.value as "Easy" | "Medium" | "Hard")
              }
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Challenge
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ChallengeDetails;
