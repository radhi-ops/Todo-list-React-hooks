import React, { useState } from "react";
import {
  Form,
  ListGroup,
  Col,
  Row,
  InputGroup,
  FormControl
} from "react-bootstrap";

const ToDo = props => {
  const [Item, setIem] = useState("");
  const [Tasks, setTasks] = useState(props.tasks);
  const [List, setList] = useState(props.list);
  const handleSubmit = event => {
    if (Tasks) {
      setList(List.concat(Tasks));
    }
    setTasks("");
    event.preventDefault();
  };

  const handleRemove = elem => {
    setList(List.filter(item => item !== elem));
    setTasks("");
  };

  const handleUpdate = (position, value) => {
    console.log(position, value);
    List[position] = value;

    setTasks("");
    showlist();
  };

  const showlist = () => {
    return List.map((item, i) => (
      <ListGroup.Item as="li" key={i}>
        <Row>
          <Col xs={"10"}>
            <Form.Control
              readOnly={false}
              onChange={e => {
                handleUpdate(i, e.target.value);
                setIem(e.target.value);
              }}
              type="text"
              name={Item}
              value={item}
            ></Form.Control>
          </Col>

          <Col>
            {" "}
            <i
              onClick={() => handleRemove(item)}
              class="fa fa-trash"
              style={{ color: "red" }}
            ></i>{" "}
          </Col>
        </Row>
      </ListGroup.Item>
    ));
  };
  return (
    <div style={{ width: "50%", margin: "2% auto" }}>
      <Form.Label style={{ fontFamily:"Arial,sans-serif", color:"red", fontWeight:"bold"}}>
        My To Do List
      </Form.Label>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Add task"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
          value={Tasks}
          onChange={e => {
            setTasks(e.target.value);
          }}
        />
        <InputGroup.Prepend>
          <InputGroup.Text id="btnGroupAddon">
            {" "}
            <i
              onClick={e => {
                handleSubmit(e);
              }}
              class="fa fa-plus"
              style={{ color: "blue" }}
            ></i>{" "}
          </InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>
      <ListGroup as="ul">{showlist()}</ListGroup>
    </div>
  );
};

export default ToDo;
