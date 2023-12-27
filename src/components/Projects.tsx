import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ImageConstants, projects } from "../utils/constants";

export const Projects = () => {
  const tabs: JSX.Element[] = [];
  const tabPanes: JSX.Element[] = [];

  for (let i = 1; i <= Math.ceil(projects.length / 6); i++) {
    const eventKey = `tab${i}`;
    const tabName = `Tab ${i}`;
    tabs.push(
      <Nav.Item key={eventKey}>
        <Nav.Link eventKey={eventKey}>{tabName}</Nav.Link>
      </Nav.Item>
    );
    const numElements = Math.min(projects.length - (i - 1) * 6, 6);
    tabPanes.push(
      <Tab.Pane eventKey={eventKey}>
        <Row>
          {
            projects.slice((i - 1) * 6, numElements + (i - 1) * 6).map((project, index) =>
              <ProjectCard
                key={index}
                {...project}
              />
            )
          }
        </Row>
      </Tab.Pane>
    );
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12} className="mt-3">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated " : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="tab1">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {tabs}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated " : ""}>
                      {tabPanes}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={ImageConstants.projectsBackground} alt="lala"></img>
    </section>
  )
}
