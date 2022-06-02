import React from "react";
import { TodoProvider } from "./TodoContext/TodoContext";
import { AppUI } from "./AppUI";	


function App() {

  
  return (
    <div>
      <TodoProvider >
        <AppUI />
      </TodoProvider>
    </div>
  );
}

export default App;
