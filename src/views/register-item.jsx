import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavbarWidget } from "../widgets/navbar";
import { useState } from "react";

export function RegisterItemView(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [foundAt, setFoundAt] = useState("");

  return (
    <Container>
      <Form className="w-75 mx-auto">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome do item perdido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do item perdido"
                value={name}
                onChange={(ev, data) => {
                  setName(ev.target.value);
                }}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Local encontrado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex.: Estacionamento"
                value={place}
                onChange={(ev, data) => {
                  setPlace(ev.target.value);
                }}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Data que foi encontrado</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Nome do item perdido"
                value={foundAt}
                onChange={(ev, data) => {
                  setFoundAt(ev.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Descreva a situação"
            style={{ height: "100px" }}
            value={description}
            onChange={(ev, data) => {
              setDescription(ev.target.value);
            }}
          />
        </Form.Group>

        <Row>
          <Col>
            <Button
              className="w-100"
              variant="dark"
              type="button"
              onClick={() => {}}
            >
              Clear
            </Button>
          </Col>

          <Col>
            <Button className="w-100" variant="success" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
