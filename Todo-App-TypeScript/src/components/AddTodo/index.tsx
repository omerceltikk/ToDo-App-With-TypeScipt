import React, { useState } from "react";
import styles from "./styles.module.css";
import Form from "./Form";

const AddTodo: React.FC = () => {

  const [view, setView] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div  className={styles.header}>
        Don’t call it a dream, call it a plan.
      </div>
      <div
        className={`${
          view === true ? styles.displayNone : styles.displayBlock
        } ${styles.addTodoView}`}
      >
        <Form />
      </div>
      <div onClick={() => setView(view == true ? false : true)}>clickme</div>
    </div>
  );
};

export default AddTodo;
