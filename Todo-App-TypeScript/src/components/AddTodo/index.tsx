import React from "react";
import styles from "./styles.module.css";
const AddTodo = () => {
  const date: number = new Date().getTime();
  console.log();
  function HandleSumbit(e: any) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <div className={styles.container}>
      <form onSubmit={(e) => HandleSumbit(e)} className={styles.formArea}>
        <div className={styles.header}>Don’t call it a dream, call it a plan.</div>
        <div className={`${styles.inputArea} ${styles.item1}`}>
          <label htmlFor="title">Add a Title</label>
          <input className={styles.input} type="text" name="title" id="title" />
        </div>
        <div className={`${styles.inputArea} ${styles.item2}`}>
          <label htmlFor="description">Description</label>
          <textarea cols={10} rows={6} id="description" />
        </div>
        <div className={`${styles.inputArea} ${styles.item3}`}>
          <label htmlFor="finishTime">Planned Finish Date</label>
          <input
            className={styles.date}
            type="date"
            name="finishTime"
            id="finishTime"
          />
        </div>
        <div className={`${styles.inputArea} ${styles.item4}`}>
          <label htmlFor="category">Add a Category</label>
          <select id="category" name="category">
            <option value="business">Business</option>
            <option value="daily">Daily</option>
            <option value="education">Education</option>
            <option value="social">Social</option>
          </select>
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
