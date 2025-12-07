import { nanoid } from "nanoid";

export function create_Task(name, details, status) {
  return {
    id: nanoid(),
    name,
    details,
    status,
    Date: new Date(),
  };
}

export function create_arr_Tasks() {
  return [];
}

export function add_Task_to_arr(object_Task, arr_Tasks) {
  arr_Tasks.push(object_Task);
}

export function Deletion_Task_id(id_Task, arr_Tasks) {
  let digit = false;
  for (let i = 0; i < arr_Tasks.length; i++) {
    if (arr_Tasks[i].id == id_Task) {
      arr_Tasks.splice(i, 1);
      digit = true;
    }
    if (digit) {
      console.log("is deletion");
    } else {
      console.log(`is not deletion`);
    }
  }
}

export function print_all_Tasks(arr_Tasks) {
  arr_Tasks.forEach((task) => {
    console.log(task);
  });
}

export function sort_arr_Task(arr_object, key, reverse = false) {
  if (!Array.isArray(arr_object)) return;

  arr_object.sort((a, b) => {
    let result = 0;

    if (typeof a[key] === "string" && typeof b[key] === "string") {
      result = a[key].localeCompare(b[key]);
    } else if (typeof a[key] === "number" && typeof b[key] === "number") {
      result = a[key] - b[key];
    } else if (a[key] instanceof Date && b[key] instanceof Date) {
      result = a[key] - b[key];
    }

    if (reverse) {
      return -result;
    } else {
      return result;
    }
  });

  console.log(arr_object);
}
