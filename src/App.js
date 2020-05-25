import React from 'react';
import myImage from "./pic.jpg";
import ProfileComponent from "./profile/ProfileComponent"

const data =[];
const name = "My name is radhi harrar";
function App() {
  const handleName =  () => {
    alert(`${name}`)
  } ;
  return (
    <div>
      <ProfileComponent
      fullName={name}
      bio="I'm a full stack js student"
      profession="Student"
      nameAlert={handleName}
      tasks=""
      list={data}
    >
      <div>
        <img src={myImage} alt="pic" width="30%" height="250px" style={{marginBottom:"2%"}}/>
      </div>
    </ProfileComponent>
    </div>
  );
}

export default App;
