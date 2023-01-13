import "./AllTasks.css";
import data from "../data";
import { Button } from "antd";

const AllTasks = () => {
  const tasksHandler = () => {
    console.log("klik");
  };

  return (
    <div>
      {data.map((oneTask) => {
        const { id, name } = oneTask;

        return (
          <div className="one-task " key={id}>
            <h4>{name}</h4>

            <Button type="primary" onClick={tasksHandler}>Vymazat</Button>
          </div>
        );
      })}
    </div>
  );
};

export default AllTasks;
