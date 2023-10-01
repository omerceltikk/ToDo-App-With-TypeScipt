import React, { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { doneTodo, editTodo, removeTodo } from "../../redux/slice/TodoSlice";
interface ItemState {
  data: any;
}
const ListItem = ({ data }: ItemState) => {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>();
  const [editDescription, setEditDescription] = useState<string>();
  const [editData, setEditData] = useState<object>({})
  function handleEditChange(e: any) {
    if(e.target.name == "title"){
      setEditTitle(e.target.value);
    }else{
      setEditDescription(e.target.value);
    }
    setEditData({
      ...data,
      title: editTitle,
      description: editDescription
    })
    
  }
  const dispatch: AppDispatch = useDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked == true) {
      dispatch(
        doneTodo({
          id: data.id,
          isDone: "done",
        })
      );
    } else {
      dispatch(
        doneTodo({
          id: data.id,
          isDone: "inProgress",
        })
      );
    }
  }
  function handleDelete() {
    dispatch(removeTodo(data.id));
  }

  function handleEditTodo() {
    dispatch(editTodo(editData));  
    setEditStatus(false)
  }
  return (
    <div>
      <div className={`${styles.listItem}`}>
        <div
          className={`${styles.area} ${data.isDone == "done" && styles.done}`}
        >
          <div className={styles.text}>
            <input defaultChecked={data.isDone == "done" ? true : false} type="checkbox" onChange={(e) => handleChange(e)} />
            <div className={styles.title}>
              {editStatus == true ? (
                <input
                  type="text"
                  name="title"
                  className={styles.titleInput}
                  onKeyUp={handleEditChange}
                  placeholder={`${data.title}`}
                  defaultValue={data.title}
                />
              ) : (
                data.title
              )}
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.description}>
              {editStatus == true ? (
                <input
                  type="text"
                  name="description"
                  className={styles.titleInput}
                  onChange={handleEditChange}
                  placeholder={`${data.description}`}
                  defaultValue={data.description}
                />
              ) : (
                data.description
              )}
            </div>
          </div>
          {editStatus == false ? (
            <div className={styles.endArea}>
              <div className={styles.tag}>{data.category}</div>
              <i
                onClick={() => setEditStatus(true)}
                className="fa-solid fa-pen-to-square"
              ></i>
              <i
                onClick={() => handleDelete()}
                className="fa-solid fa-trash"
              ></i>
            </div>
          ) : (
            <div className={styles.endArea}>
              <i
                onClick={() => handleEditTodo()}
                className="fa-solid fa-check"
              ></i>
              <i
                onClick={() => setEditStatus(false)}
                className="fa-solid fa-x"
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
