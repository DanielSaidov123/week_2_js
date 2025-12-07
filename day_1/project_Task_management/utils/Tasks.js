import { nanoid } from "nanoid";

function create_Task(name, details, status) {
  return {
    id: nanoid(),
    name,
    details,
    status,
    Date: new Date(),
  };
}

function create_arr_Tasks() {
  return [];
}

function add_Task_to_arr(object_Task, arr_Tasks) {
  arr_Tasks.push(object_Task);
}

function Deletion_Task_id(id_Task, arr_Tasks) {
  let digit = false;
  for (let i = 0; i < arr_Tasks.length; i++) {
    if (arr_Tasks[i].id == id_Task) {
      arr_Tasks.splise(i, 1);
      digit = true;
    }
    if (digit) {
      console.log("is deletion");
    } else {
      console.log(`is not deletion`);
    }
  }
}







// function init() {
//   const arr_Tasks = create_arr_Tasks();
//   const obj_1 = create_Task("daniel", "few", "fwe");
//   const obj_2 = create_Task("daniel", "few", "fwe");
//   const obj_3 = create_Task("daniel", "few", "fwe");

//   add_Task_to_arr(obj_1, arr_Tasks);
//   add_Task_to_arr(obj_2, arr_Tasks);
//   add_Task_to_arr(obj_3, arr_Tasks);

//   console.log(arr_Tasks);
// }

// init();
