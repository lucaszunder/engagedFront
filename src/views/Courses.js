/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import { withRouter } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import PageTitle from "../components/common/PageTitle";
import api from "../services/apiClient";
import { useAuth } from "../context/UserContext";

const Courses = ({ history }) => {
  const [courses, setCourses] = useState([]);
  const { role } = useAuth();

  useEffect(() => {
    const getAllCourses = async () => {
      const response = await api.get("/courses");
      return setCourses(response.data);
    };
    getAllCourses();
  }, []);

  const createElement = string => {
    return ReactHtmlParser(string);
  };

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row
        noGutters
        className="page-header py-4"
        style={{ placeContent: "space-between" }}
      >
        <PageTitle
          sm="4"
          title="Cursos"
          subtitle="Todos os cursos"
          className="text-sm-left"
        />
        {role === "contentCreator" && (
          <Button
            size="sm"
            theme="white"
            onClick={e => history.push("/new-course")}
          >
            Criar Curso
          </Button>
        )}
      </Row>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {courses.map((Course, idx) => (
          <Col lg="4" key={idx}>
            <Card
              style={{ minHeight: "95%" }}
              small
              className="card-Course mb-4"
            >
              <CardBody>
                <h5 className="card-title">{Course.name}</h5>
                <div className="card-text text-muted">
                  {createElement(Course.description)}
                </div>
              </CardBody>
              <CardFooter className="border-top d-flex">
                <div className="my-auto ml-auto">
                  <Button
                    size="sm"
                    theme="white"
                    onClick={e => history.push(`/course/${Course.id}`)}
                  >
                    Acessar Curso
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </div>
    </Container>
  );
};

export default withRouter(Courses);
