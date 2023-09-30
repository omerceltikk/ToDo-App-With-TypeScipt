import React from "react";
import styles from "./styles.module.css";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addTodo } from "../../redux/slice/TodoSlice";
// interface FormProps {
//   submittedData: (data: customFormFieldProps) => void;
// }
interface RootState {
  todos: any
}
type customFormFieldProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
}
const Form:React.FC = () => {
  const selectorData = (state: RootState) => state.todos.data;
  const updatedData = useSelector(selectorData);
  let uniqueID = Math.floor(Math.random() * 10000000000) ;
  const dispatch: AppDispatch = useDispatch();
  const [data, setData] = React.useState<customFormFieldProps>({
    id: uniqueID,
    title: "",
    description: "",
    date: "",
    category: "",
  });
  function handleChange(e: any) {
    setData({ ...data, id: uniqueID,  [e.target.name]: e.target.value });

  }
  function HandleSumbit(e: any) {
    e.preventDefault();
    if(data.date == "" || data.category == "" || data.title.length < 5 || data.description.length<5){
      alert("please correctly complete the fields")
    }else{
      console.log(data);
      dispatch(addTodo(data));
      localStorage.setItem("todos", JSON.stringify([...updatedData,data]))
    }
    // onSubmit(data) dispach ile gönderilecek;
    // e.clear();
  }
  return (
    <div>
      <form onSubmit={(e) => HandleSumbit(e)} className={styles.formArea}>
        <div className={`${styles.inputArea} ${styles.item1}`}>
          <label htmlFor="title">Add a Title</label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className={`${styles.inputArea} ${styles.item2}`}>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            rows={6}
            id="description"
            name="description"
          />
        </div>
        <div className={`${styles.inputArea} ${styles.item3}`}>
          <label htmlFor="date">Planned Finish Date</label>
          <input
            onChange={handleChange}
            className={styles.date}
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className={`${styles.inputArea} ${styles.item4}`}>
          <label htmlFor="category">Add a Category</label>
          <select onChange={handleChange} id="category" name="category">
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

export default Form;
