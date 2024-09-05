import React, { useState } from "react";
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

interface CreateChallengeProps {
  addChallenge: (challenge: Challenge) => void;
  closeModal: () => void;
}

const CreateChallenge: React.FC<CreateChallengeProps> = ({
  addChallenge,
  closeModal,
}) => {
  const [challengeName, setChallengeName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [levelType, setLevelType] = useState<"Easy" | "Medium" | "Hard">(
    "Easy"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newChallenge: Challenge = {
      id: Date.now(),
      challengeName,
      startDate,
      endDate,
      description,
      image: image || "",
      levelType,
      status: "Active",
    };

    addChallenge(newChallenge);
    closeModal();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        <Form.Control type="file" onChange={handleImageChange} required />
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
  );
};

export default CreateChallenge;
