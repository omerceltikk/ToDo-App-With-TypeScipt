import { useEffect, useState } from "react";
import styles from "./stylex.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { filterCategory, filterDone } from "../../redux/slice/TodoSlice";
const SideBar: React.FC = () => {
  const item = localStorage.getItem("important");
  const impValue = item ? JSON.parse(item) : [];
  const [important, setImportant] = useState<string[]>(impValue);
  const dispatch: AppDispatch = useDispatch();

  async function handleChange(e: any) {
    dispatch(filterCategory(e.target.value));
  }
  function handleDone(e: any) {
    dispatch(filterDone(e.target.value));
  }
  function handleKeyDown(e: any) {
    if (important.length == 0 && e.key == "Enter") {
      setImportant([e.target.value]);
      localStorage.setItem("important", JSON.stringify(e.target.value));
      e.target.value = "";
    } else if (
      important.length > 0 &&
      important.length < 7 &&
      e.key == "Enter"
    ) {
      setImportant([...important, e.target.value]);
      localStorage.setItem(
        "important",
        JSON.stringify([...important, e.target.value])
      );
      e.target.value = "";
    } else if (important.length >= 7 && e.key == "Enter") {
      alert("the important notes capacity is 7.");
    }
  }
  function handleDelete(item: string) {
    const deleted = important.filter((e) => e != item);
    setImportant(deleted);
    localStorage.setItem("important", JSON.stringify(deleted));
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Filter Your Todo's</h3>
        <hr />
      </div>
      <div onChange={(e) => handleDone(e)} className={styles.doneArea}>
        <h4>Status</h4>
        <div className={styles.innerDoneArea}>
          <div>
            <input type="radio" id="allDone" name="isDone" value="all" />
            <label htmlFor="allDone">All</label>
          </div>
          <div>
            <input type="radio" id="done" name="isDone" value="done" />
            <label htmlFor="done">Done</label>
          </div>
          <div>
            <input
              type="radio"
              id="inProgress"
              name="isDone"
              value="inProgress"
            />
            <label htmlFor="inProgress">In Progress</label>
          </div>
        </div>
      </div>
      <div onChange={(e) => handleChange(e)} className={styles.category}>
        <h4>Category</h4>
        <div className={styles.innerCategoryArea}>
          <div>
            <input type="radio" id="allcategory" name="category" value="all" />
            <label htmlFor="allcategory">All</label>
          </div>
          <div>
            <input
              type="radio"
              id="business"
              name="category"
              value="business"
            />
            <label htmlFor="business">Business</label>
          </div>
          <div>
            <input type="radio" id="daily" name="category" value="daily" />
            <label htmlFor="daily">Daily</label>
          </div>
          <div>
            <input type="radio" id="social" name="category" value="social" />
            <label htmlFor="social">Social</label>
          </div>
        </div>
        <div>
          <input
            type="radio"
            id="education"
            name="category"
            value="education"
          />
          <label htmlFor="education">Education</label>
        </div>
      </div>
      <hr />
      <div className={styles.importants}>
        <h4>Important Notes</h4>
        <div>
          <input
            type="text"
            id="important"
            name="note"
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
        <ul>
          {important?.map((item, i) => (
            <li key={i}>
              {item}{" "}
              <i onClick={() => handleDelete(item)} className={styles.close}>
                x
              </i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
