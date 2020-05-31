import React from 'react';
import ToDo from "./Component/Todolist"

const data =[];
function App() {
  return (
    <div>
      <ToDo
      tasks=""
      list={data}
    />
    </div>
  );
}

export default App;
