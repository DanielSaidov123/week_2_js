import {
  sort_arr_Task,
  print_all_Tasks,
  Deletion_Task_id,
  add_Task_to_arr,
  create_arr_Tasks,
  create_Task,
} from "./utils/Tasks.js";
import input from "analiza-sync";

function init() {
  console.log("Welcome to the task management app");
  const arr_of_Tasks = create_arr_Tasks();
  do {
    console.log(`1. Create a task
2. Delete task
3. See tasks
4. Sort all array
5. exit`);
    var inp = input("enter number 1-5: ");
    if (inp == "1") {
      const name = input("enter name of Task: ");
      const details = input("Enter details for the task: ");
      const status = input("enter status of Task: ");
      const obj_Task = create_Task(name, details, status);
      add_Task_to_arr(obj_Task, arr_of_Tasks);
    }
    if (inp == "2") {
      const id = input("enter id for Delete: ");
      Deletion_Task_id(id, arr_of_Tasks);
    }
    if (inp == "3") {
      print_all_Tasks(arr_of_Tasks);
    }
    if (inp == "4") {
      let keys = "";
      let revers = false;
      console.log(`1. Normal sort by date
2. reversed sorting by date
3. sorting by status`);
      const key = input("enter key for sorted: ");
      if (key == "1") {
        keys = "Date";
      } else if (key == "2") {
        (keys = "Date"), (revers = true);
      } else if (key == "3") {
        keys = "status";
      }
      sort_arr_Task(arr_of_Tasks, keys, revers);
    }
  } while (inp !== "5");
}
init();
