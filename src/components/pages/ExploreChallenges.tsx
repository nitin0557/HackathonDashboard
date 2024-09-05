import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Challenge {
  id: number;
  challengeName: string;
  startDate: string;
  endDate: string;
  image: string;
  levelType: string;
  status: "Active" | "Upcoming" | "Past";
}

interface ExploreChallengesProps {
  challenges: Challenge[];
}

const ExploreChallenges: React.FC<ExploreChallengesProps> = ({
  challenges,
}) => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [levelFilter, setLevelFilter] = useState<string[]>([]);

  const handleCardClick = (id: number) => {
    navigate(`/challenge/${id}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const level = e.target.value;
    setLevelFilter((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesSearch = challenge.challengeName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || challenge.status === statusFilter;
    const matchesLevel =
      levelFilter.length === 0 || levelFilter.includes(challenge.levelType);

    return matchesSearch && matchesStatus && matchesLevel;
  });

  return (
    <Container fluid className="bg-dark text-white p-5">
      <h2 className="text-center">Explore Challenges</h2>

      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div>
          <label>Status</label>
          <select value={statusFilter} onChange={handleStatusChange}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Past">Past</option>
          </select>
        </div>
        <div>
          <label>Level</label>
          <input
            type="checkbox"
            value="Easy"
            onChange={handleLevelChange}
          />{" "}
          Easy
          <input
            type="checkbox"
            value="Medium"
            onChange={handleLevelChange}
          />{" "}
          Medium
          <input
            type="checkbox"
            value="Hard"
            onChange={handleLevelChange}
          />{" "}
          Hard
        </div>
      </div>

      <Row className="mt-4">
        {filteredChallenges.map((challenge) => (
          <Col md={4} key={challenge.id} className="mb-4">
            <Card
              className="bg-light text-dark"
              onClick={() => handleCardClick(challenge.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img variant="top" src={challenge.image} />
              <Card.Body>
                <Card.Title>{challenge.challengeName}</Card.Title>
                <Card.Text>Status: {challenge.levelType}</Card.Text>
                {challenge.status === "Upcoming" && (
                  <Card.Text>Starts in: {challenge.startDate}</Card.Text>
                )}
                {challenge.status === "Past" && (
                  <Card.Text>Ended on: {challenge.endDate}</Card.Text>
                )}
                <Button variant="primary">Participate Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreChallenges;
