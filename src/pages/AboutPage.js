import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
//import PartnersList from './features/partners/PartnersList';

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About" />
      <Row className="row-content">
        <Col sm="6">
          <h3>My Mission</h3>
          <p>
            I take pride in helping out the non-profit sector and have
            contributed many hours volunteering my services. I have participated
            in engaging clients by delivering data both effectively and
            efficiently. I am always up for helping out a non-profit!
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3>Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Year Began</dt>
                <dd className="col-6">2020</dd>
                <dt className="col-6">No. of Happy Clients</dt>
                <dd className="col-6">7</dd>
                <dt className="col-6">Monetary Value of Services</dt>
                <dd className="col-6">$69,035</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                Life's most persistent and urgent question is, 'What are you doing for others?'
                </p>
                <footer className="blockquote-footer">
                Martin Luther King, Jr.{" "}
                  <cite title="Source Title">
                   </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h3>Community Partners</h3>
        </Col>
        {/*<PartnersList />*/}
      </Row>
    </Container>
  );
};

export default AboutPage;
