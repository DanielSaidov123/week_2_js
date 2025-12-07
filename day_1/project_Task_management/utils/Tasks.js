import { nanoid } from "nanoid";

function create_Task(name, details, status) {
  return {
    id: nanoid(),
    name,
    details,
    status,
    Date:new Date()
  };
}

function create_arr_Tasks( ){
    return []
 } 
 