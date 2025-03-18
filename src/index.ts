import express, { Application } from 'express';
// import { ProcurementDB } from './data-source';

import { PORT as port } from './config';

// Router
// import poRouter from './routers/po.router';

const PORT = port || 3030;
const app: Application = express();

app.use(express.json());

// app.use("/purchase-orders", poRouter);


app.listen(PORT, () => {
    try {
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        throw error
    }
});

// ProcurementDB.initialize()
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`Server is running on http://localhost:${PORT}`);
//         });
//         console.log("ProcurementDB connection has been initialized successfully.");
//     })
//     .catch((err) => {
//         console.error("Error initializing ProcurementDB connection:", err);
//    });