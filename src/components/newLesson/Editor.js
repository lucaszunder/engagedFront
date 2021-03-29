import React, { useState } from "react";
import ReactQuill from "react-quill";
import {
  Card,
  CardBody,
  Form,
  FormInput,
  Button,
  Col,
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => {
  const [data, setData] = useState({
    title: "",
    contents: [{ type: "none", value: "" }]
  });

  const handleChange = event => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const onSubmit = data => {
    console.log(data);
  };

  const updateType = (type, index) => {
    const contents = data.contents;
    contents.splice(index, 1, { type: type, value: "" });
    setData({ ...data, contents });
  };

  const deleteContent = index => {
    const contents = data.contents;
    if (contents.length === 1) {
      return;
    }
    contents.splice(index, 1);
    setData({ ...data, contents });
  };

  return (
    <>
      <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <FormInput
              size="lg"
              className="mb-3"
              name="title"
              value={data.title}
              onChange={e => handleChange(e)}
              placeholder="Título da sua aula"
            />
          </Form>
        </CardBody>
      </Card>
      {data.contents.map((content, index) => {
        return content.type === "none" ? (
          <>
            <Card small className="card-Course mb-4">
            <div
                style={{
                  display: "flex",
                  placeContent: "space-between",
                  padding: "2%"
                }}
              >
                <h4
                  style={{
                    padding: "0px",
                    marginBottom: "0px"
                  }}
                >
                  Bloco {index + 1}
                </h4>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center",
                    backgroundColor: "#8B0000",
                    border: "0"
                  }}
                  onClick={e => deleteContent(index)}
                >
                  <h6
                    style={{
                      fontSize: "15px",
                      color: "white",
                      padding: "0px",
                      marginBottom: "0px"
                    }}
                  >
                    Deletar bloco {index + 1}
                  </h6>
                  <i
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      padding: "0px",
                      marginBottom: "0px"
                    }}
                    className="material-icons"
                  >
                    delete
                  </i>
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap"
                }}
              >
                <Col lg="4">
                  <Card
                    style={{ minHeight: "95%" }}
                    small
                    className="card-Course mb-4"
                  >
                    <CardBody
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        cursor: "pointer"
                      }}
                      onClick={e => updateType("text", index)}
                    >
                      <i
                        style={{ fontSize: "100px" }}
                        className="material-icons"
                      >
                        text_fields
                      </i>
                      <h3 className="mb-0">Criar Texto</h3>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card
                    style={{ minHeight: "95%" }}
                    small
                    className="card-Course mb-4"
                  >
                    <CardBody
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        cursor: "pointer"
                      }}
                      onClick={e => updateType("video", index)}
                    >
                      <i
                        style={{ fontSize: "100px" }}
                        className="material-icons"
                      >
                        video_library
                      </i>
                      <h3 className="mb-0">Criar vídeo</h3>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card
                    style={{ minHeight: "95%" }}
                    small
                    className="card-Course mb-4"
                  >
                    <CardBody
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        cursor: "pointer"
                      }}
                      onClick={e => updateType("image", index)}
                    >
                      <i
                        style={{ fontSize: "100px" }}
                        className="material-icons"
                      >
                        image
                      </i>
                      <h3 className="mb-0">Criar imagem</h3>
                    </CardBody>
                  </Card>
                </Col>
              </div>
            </Card>
          </>
        ) : content.type === "text" ? (
          <>
            <Card small className="card-Course mb-4">
              <div
                style={{
                  display: "flex",
                  placeContent: "space-between",
                  padding: "2%"
                }}
              >
                <h4
                  style={{
                    padding: "0px",
                    marginBottom: "0px"
                  }}
                >
                  Bloco {index + 1}
                </h4>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center",
                    backgroundColor: "#8B0000",
                    border: "0"
                  }}
                  onClick={e => deleteContent(index)}
                >
                  <h6
                    style={{
                      fontSize: "15px",
                      color: "white",
                      padding: "0px",
                      marginBottom: "0px"
                    }}
                  >
                    Deletar bloco {index + 1}
                  </h6>
                  <i
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      padding: "0px",
                      marginBottom: "0px"
                    }}
                    className="material-icons"
                  >
                    delete
                  </i>
                </Button>
              </div>
              <ReactQuill
                style={{ backgroundColor: "white", padding: "2%" }}
                name="description"
                value={data.contents[index].value}
                onChange={e => {
                  var contents = data.contents;
                  contents[index].value = e;
                  setData({ ...data, contents });
                }}
                className="add-new-post__editor mb-1"
                placeholder="Descrição"
              />
            </Card>
          </>
        ) : (
          <>
            <Card small className="card-Course mb-4">
            <div
                style={{
                  display: "flex",
                  placeContent: "space-between",
                  padding: "2%"
                }}
              >
                <h4
                  style={{
                    padding: "0px",
                    marginBottom: "0px"
                  }}
                >
                  Bloco {index + 1}
                </h4>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center",
                    backgroundColor: "#8B0000",
                    border: "0"
                  }}
                  onClick={e => deleteContent(index)}
                >
                  <h6
                    style={{
                      fontSize: "15px",
                      color: "white",
                      padding: "0px",
                      marginBottom: "0px"
                    }}
                  >
                    Deletar bloco {index + 1}
                  </h6>
                  <i
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      padding: "0px",
                      marginBottom: "0px"
                    }}
                    className="material-icons"
                  >
                    delete
                  </i>
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <Card
                  style={{
                    width: "30%",
                    cursor: "pointer",
                    padding: "2%",
                    margin: "2%"
                  }}
                >
                  <h4>upload</h4>
                </Card>
              </div>
            </Card>
          </>
        );
      })}

      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          cursor: "pointer",
          margin: "1%"
        }}
        onClick={e =>
          setData({
            ...data,
            contents: [...data.contents, { type: "none", value: "" }]
          })
        }
      >
        <i style={{ fontSize: "30px" }} className="material-icons">
          add_circle_outlined
        </i>
        <h5>Novo bloco de conteúdo</h5>
      </Card>
      {/* <ReactQuill
            name="description"
            onChange={e=> setData({...data, description:e})}
            className="add-new-post__editor mb-1"
            placeholder="Descrição"
          /> */}

      <Button
        theme="accent"
        size="sm"
        className="ml-auto"
        onClick={e => onSubmit(data)}
      >
        <i className="material-icons">file_copy</i> Publicar
      </Button>
    </>
  );
};
export default Editor;
