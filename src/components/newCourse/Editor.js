import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, Button } from "shards-react";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import api from "../../services/apiClient";

const Editor = ({ history }) => {
  const [data, setData] = useState({
    name: "",
    description: ""
  });

  const onSubmit = async () => {
    const newCourse = await api.post("/courses", data);
    Swal.fire({
      icon: "success",
      title: `O ${newCourse.data.name} foi criado!`,
      text: "Seu curso foi criado com sucesso!"
    });
    history.push("/courses");
  };

  const handleChange = event => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  return (
    <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post">
          <FormInput
            size="lg"
            className="mb-3"
            name="name"
            value={data.name}
            onChange={e => handleChange(e)}
            placeholder="Título do seu curso"
          />
          <ReactQuill
            name="description"
            onChange={e => setData({ ...data, description: e })}
            className="add-new-post__editor mb-1"
            placeholder="Descrição"
          />
        </Form>
        <Button
          theme="accent"
          size="sm"
          className="ml-auto"
          onClick={e => onSubmit()}
        >
          <i className="material-icons">file_copy</i> Publicar
        </Button>
      </CardBody>
    </Card>
  );
};
export default withRouter(Editor);
