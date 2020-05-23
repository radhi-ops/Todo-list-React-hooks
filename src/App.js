import React from 'react';
import myImage from "./pic.jpg";
import ProfileComponent from "./profile/ProfileComponent"


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
    >
      <div>
        <img src={myImage} alt="pic" width="50%" height="350px"/>
      </div>
    </ProfileComponent>
    </div>
  );
}

export default App;
