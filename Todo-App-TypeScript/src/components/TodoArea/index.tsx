import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import ListItem from "../ListItem";
import CardItem from "../CardItem";
import { filterCategory } from "../../redux/slice/TodoSlice";
interface RootState {
  todos: any;
}
interface ItemState {
  item: {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
  };
}
const TodoArea: React.FC = () => {
  const [listStatus, setListStatus] = useState<string>("list");

  const selectorData = (state: RootState) => state.todos.data;
  const filter = (state: RootState) => state.todos.filtered;
  const category = (state: RootState) => state.todos.categoryStatus;
  const date = (state: RootState) => state.todos.dateStatus;
 
  const updatedData = useSelector(selectorData);
  const filterData = useSelector(filter);
  const categoryData = useSelector(category);
  const dateData = useSelector(date);
 
  console.log(filterData);
  
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
      {listStatus == "list" && categoryData == true ?
        filterData?.map((e: ItemState) => <ListItem key={e.id} data={e} />) :
        updatedData?.map((e: ItemState) => <ListItem key={e.id} data={e} />)
        }
      {listStatus == "card" && categoryData ?
        filterData?.map((e: ItemState) => <CardItem key={e.id} data={e} />) :
        updatedData?.map((e: ItemState) => <CardItem key={e.id} data={e} />)
        }
    </div>
  );
};

export default TodoArea;
