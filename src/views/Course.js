/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Carddescription,
  CardFooter,
  Badge,
  Button,
  CardBody
} from "shards-react";
import { withRouter } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import api from "../services/apiClient";
import { useAuth } from "../context/UserContext";

const Course = ({ history, match }) => {
  const [course, setCourse] = useState([
    {
      title: "Aula 1",
      description:
        "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
      date: "29 February 2019"
    },
    {
      title: "Aula 2",
      description:
        "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
      date: "29 February 2019"
    }
  ]);
  const {role} = useAuth()

  useEffect(() => {
    const getCourse = async () => {
      const course = await api.get(`/lessons/all/${match.params.id}`);
      setCourse(course.data);
    };
    getCourse();
  }, []);

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
          title={course[0].name? `${course[0].Course.name}`: ``}
          subtitle="Aulas do curso"
          className="text-sm-left"
        />
         {role === "contentCreator" && (
          <Button
            size="sm"
            theme="white"
            onClick={e => history.push(`/course/${match.params.id}/create`)}
          >
            Criar Aula
          </Button>
        )}
        <Button size="sm" theme="white" onClick={e => history.goBack()}>
          voltar
        </Button>
      </Row>

      {/* Second Row of lessons */}
      <Row>
        {!!course
          ? course.map((lesson, index) => (
              <Col lg="12" sm="12" key={index}>
                <Card
                  small
                  className="card-lesson card-lesson--aside card-lesson--1"
                  onClick={e=> history.push(`/course/${course[0].Course.id}/lesson/${lesson.id}`)}
                >
                  <CardBody>
                    <h5 className="card-title">{lesson.name}</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p className="card-text d-inline-block mb-3">
                        {lesson.description}
                      </p>
                      <span className="text-muted">{lesson.date}</span>
                    </div>
                  </CardBody>
                </Card>

                {index !== course.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      placeContent: "center",
                      padding: "2%"
                    }}
                  >
                    <i
                      style={{ fontSize: "50px" }}
                      className="material-icons mr-1"
                    >
                      arrow_downward
                    </i>
                  </div>
                )}
              </Col>
            ))
          : ""}
      </Row>
    </Container>
  );
};

export default withRouter(Course);
