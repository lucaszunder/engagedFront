/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "shards-react";
import { withRouter } from "react-router-dom";
import img from "../images/content-management/1.jpeg";

import PageTitle from "../components/common/PageTitle";
import api from "../services/apiClient";

const Lesson = ({ history, match }) => {
  const [lesson, setLesson] = useState({
    //   title: "Aula 1",
    //   description:
    //     "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
    //   date: "29 February 2019",
    //   content: [
    //     {
    //       body:
    //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       type: "text"
    //     },
    //     {
    //       body:
    //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       type: "video"
    //     },
    //     {
    //       body:
    //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       type: "text"
    //     },
    //     {
    //       body:
    //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       type: "image"
    //     }
    //   ]
  });

  useEffect(() => {
    const getLesson = async () => {
      const lesson = await api.get(`/lessons/${match.params.lesson_id}`);
      setLesson(lesson.data);
    };
    getLesson();
  }, []);

  const callComponent = item => {
    switch (item.type) {
      case "text":
        return <p style={{ padding: "4% 0% 2% 0" }}>{item.name}</p>;
        break;
      case "video":
        return (
          <video style={{ width: "100%", padding: "0% 0%" }} controls>
            <source
              src={`http://localhost:3334/files/${item.name}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        );
        break;
      case "image":
        return (
          <img
            style={{ width: "100%", padding: "0% 0%" }}
            alt={item.description}
            src={`http://localhost:3334/files/${item.name}`}
          />
        );
        break;
      default:
        break;
    }
  };

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row
        noGutters
        style={{ placeContent: "space-between" }}
        className="page-header py-4"
      >
        <PageTitle
          sm="4"
          title="Aula: "
          subtitle="curso:"
          className="text-sm-left"
        />
        <Button size="sm" theme="white" onClick={e => history.goBack()}>
          voltar
        </Button>
      </Row>

      {/* Second Row of lessons */}
      <Row>
        <Col lg="12" sm="12" className="mb-4">
          <Card small className="card-lesson card-lesson--aside card-lesson--1">
            <CardBody>
              <div
                className="card-title"
                style={{ whiteSpace: "space-between" }}
              >
                <h5>{lesson.title}</h5>
                <span className="text-muted">{lesson.date}</span>
              </div>
              {lesson.contents
                ? lesson.contents.map(item => callComponent(item))
                : ""}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Lesson);
