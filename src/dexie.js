import Dexie from "dexie";

export const db = new Dexie("Hirewave");
db.version(2).stores({
  users: "++id,name,email,password,reminder, createdAt",
  jobs: "++id, jobPosition, contractType, flexibility, location, role, duties, aboutCandidate, compensations, companyName, logo, aboutCompany, recruiting, postedAt",
});
