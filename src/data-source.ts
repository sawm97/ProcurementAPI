import { DataSource } from "typeorm"; // Import the DataSource class from TypeORM

import { SUPABASE_URL } from "./config"; 

export const ProcurementDB = new DataSource({
    type: "postgres",
    url: SUPABASE_URL || "", // Use the SUPABASE_URL environment variable
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
})
    