import React from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { removeTodo } from "../../redux/slice/TodoSlice";
interface ItemState {
  data: any;
}
const ListItem = ({ data }: ItemState) => {
  
  const dispatch: AppDispatch = useDispatch();
  function handleDelete() {
    dispatch(removeTodo(data.id));
  }
  return (
    <div>
      <div className={styles.listItem}>
        <div className={styles.area}>
          <div className={styles.text}>
            <i className="fa-solid fa-check fa-lg"></i>
            <div className={styles.title}>{data.title}</div>
          </div>
          <div>{data.description.slice(0, 150)}</div>
          <div>
            <i className="fa-solid fa-pen-to-square"></i>
            <i onClick={() => handleDelete()} className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
