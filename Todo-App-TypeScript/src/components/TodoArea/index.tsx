import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import ListItem from "../ListItem";
import CardItem from "../CardItem";
interface RootState {
  todos: any;
}
interface ItemState {
  item: {
    id: number;
    title: string;
    description: string;
    date: string;
    isDone: boolean;
  };
}
const TodoArea: React.FC = () => {
  const [listStatus, setListStatus] = useState<string>("list");
  const [data, SetData] = useState<any>([]);
  const selectorData = (state: RootState) => state.todos.data;
  const category = (state: RootState) => state.todos.categoryStatus;
  const isDone = (state: RootState) => state.todos.doneStatus;

  const updatedData = useSelector(selectorData);
  const categoryData = useSelector(category);
  const isDoneData = useSelector(isDone);

  useEffect(() => {
    if (categoryData == "all" && isDoneData == "all") {
      SetData(updatedData);
    } else if (categoryData != "all" && isDoneData == "all") {
      const newData = updatedData.filter(
        (item: any) => item.category == categoryData
      );
      SetData(newData);
    } else if (isDoneData != "all" && categoryData != "all") {
      const newData = updatedData.filter(
        (item: any) =>
          item.category == categoryData && item.isDone == isDoneData
      );
      SetData(newData);
    } else if (categoryData == "all" && isDoneData != "all") {
      const newData = updatedData.filter(
        (item: any) => item.isDone == isDoneData
      );
      SetData(newData);
    }
  }, [categoryData, updatedData, isDoneData]);
  console.log(isDoneData);
  
  function handleChange(e: any) {
    setListStatus(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div onChange={(e) => handleChange(e)} className={styles.buttons}>
        <div>
          <input type="radio" id="list" name="listStyle" value="list" />
          <label htmlFor="list">
            <i className="fa-solid fa-list fa-lg"></i>
          </label>
        </div>
        <div>
          <input type="radio" id="card" name="listStyle" value="card" />
          <label htmlFor="card">
            <i className="fa-solid fa-table fa-lg"></i>
          </label>
        </div>
      </div>
      {listStatus == "list" &&
        data?.map((item: ItemState["item"]) => (
          <ListItem key={item.id} data={item} />
        ))}
      {listStatus == "card" &&
        data?.map((e: ItemState["item"]) => <CardItem key={e.id} data={e} />)}
    </div>
  );
};

export default TodoArea;
