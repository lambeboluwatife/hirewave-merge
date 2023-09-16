import Dexie from "dexie";

export const db = new Dexie("Hirewave");
db.version(1).stores({
  users: "++id,name,email,password,reminder, createdAt",
});
