/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SelectUserComponent from "../components/select-user/SelectUserComponent";

export default function SelectUser() {
  return (
    <Container fluid className="main-content-container">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Selecione um usuário"
          subtitle="Início"
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
      <Row style={{height: '70%'}}>
        <Col lg="6">
          <SelectUserComponent
            SelectUserComponent={{
              name: "Criador de conteúdo",
              avatar: "note_add",
              role: "contentCreator"
            }}
          />
        </Col>
        <Col lg="6">
          <SelectUserComponent
            SelectUserComponent={{
              name: "Estudante",
              avatar: "person",
              role: "student"
            }}
          />
        </Col>
      </Row>
      <div>
        <p style={{ textAlign: "center" }}>Challenge developed by Lucas Zunder</p>
      </div>
    </Container>
  );
}
