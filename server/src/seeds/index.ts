import { seedUsers } from "./user-seeds";
import sequelize from "../config/connection";

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  process.exit(0);
};

seedAll();
