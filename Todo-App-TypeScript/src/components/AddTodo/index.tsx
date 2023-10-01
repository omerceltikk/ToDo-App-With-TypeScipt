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
      <div className={styles.expand}>
        <div className={styles.btn} onClick={() => setView(view == true ? false : true)}>
          <div className={styles.btntext}>Expand Area</div>
          { view == true ?
        <i className="fa-solid fa-angles-down "></i> :
        <i className="fa-solid fa-angles-up"></i> 
         }
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
