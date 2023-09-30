import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import SideBar from "./components/SideBar";
import TodoArea from "./components/TodoArea";

const App: React.FC = () => {
  return (
    <>
      <div className="general">
        <AddTodo />
        <SideBar />
        <TodoArea />
      </div>
    </>
  );
};

export default App;
