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
