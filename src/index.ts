import { PORT as port } from './config';
import express, { Application } from 'express';
import { ProcurementDB } from './data-source';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

import purchaseOrderRouter from './routers/purchase-orders.router';

import { ErrorMiddleware } from './middlewares/error.middleware';

const PORT = port || 3050;
const app: Application = express();

// Middleware
app.use(express.json());
app.use(
    morgan("combined", {
        stream: fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" }),
    }
));

// Router
app.use("/purchase-orders", purchaseOrderRouter);

// Error handling middleware
app.use(ErrorMiddleware);


// app.listen(PORT, () => {
//     try {
//         console.log(`Server is running on http://localhost:${PORT}`);
//     } catch (error) {
//         throw error
//     }
// });

ProcurementDB.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
        console.log("ProcurementDB connection has been initialized successfully.");
    })
    .catch((err) => {
        console.error("Error initializing ProcurementDB connection:", err);
    });