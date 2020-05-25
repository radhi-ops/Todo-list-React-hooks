import React, { useState } from "react";
import PropTypes from "prop-types";
import "./profile.css";

const ProfileComponent = props => {
  // const { fullName, bio, profession, nameAlert } = props;
  const [Tasks, setTasks] = useState(props.tasks);
  const [List, setList] = useState(props.list);
  const [Oldtask, setUpdate] = useState("");
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

  const handleChange = event => {
    setTasks(event.target.value);
  };

  const handleUpdate = () => {
    List[List.findIndex(e => e === Oldtask)] = Tasks;

    setTasks("");
  };
  return (
    <div style={{ margin: "2% 2%" }}>
      {/* {props.nameAlert()} */}
      <h1 style={{ textTransform: "capitalize", textDecoration: "underline" }}>
        {props.fullName}
      </h1>
      <p
        style={{
          fontFamily: "Arial,sans-serif",
          fontSize: "2em",
          color: "grey"
        }}
      >
        {props.bio}
      </p>
      <h3
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: "1.5em",
          color: "blue"
        }}
      >
        My Profession : {props.profession}
      </h3>
      {props.children}

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={Tasks}
            id="tasks"
            placeholder="ADD/Remove Tasks"
            onChange={e => handleChange(e)}
            style={{ marginRight: "2%" }}
          />
          <button type="submit">Add Tasks</button>
          <button type="button" onClick={() => handleRemove(Tasks)}>
            Remove Tasks
          </button>
          <button type="button" onClick={() => handleUpdate(Tasks)}>
            Update
          </button>
        </form>
        <ul>
          {List.map((item, i) => (
            <li
              className="item"
              onClick={() => {
                setTasks(item);
                setUpdate(item);
              }}
              key={i}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
ProfileComponent.defaultProps = {
  bio: "Information",
  profession: "None"
};

ProfileComponent.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  nameAlert: PropTypes.func.isRequired
};
export default ProfileComponent;
