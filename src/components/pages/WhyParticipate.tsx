import { Container, Row, Col, Card } from "react-bootstrap";

function WhyParticipate() {
  return (
    <Container className="my-5">
      <h2 className="text-center">Why Participate in AI Challenges?</h2>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="p-3 mb-4">
            <Card.Body>
              <Card.Title>Prove your skills</Card.Title>
              <Card.Text>
                Gain substantial experience by solving real-world problems and
                pit against others to come up with innovative solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 mb-4">
            <Card.Body>
              <Card.Title>Learn from community</Card.Title>
              <Card.Text>
                One can look and analyze the solutions submitted by the other
                Data Scientists in the community and learn from them.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 mb-4">
            <Card.Body>
              <Card.Title>Challenge yourself</Card.Title>
              <Card.Text>
                There is nothing for you to lose by participating in a
                challenge. You can fail safe, learn out of the entire experience
                and bounce back harder.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 mb-4">
            <Card.Body>
              <Card.Title>Earn recognition</Card.Title>
              <Card.Text>
                You will stand out from the crowd if you do well in AI
                challenges, it not only helps you shine in the community but
                also earns rewards.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WhyParticipate;
