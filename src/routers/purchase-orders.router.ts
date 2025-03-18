import { Router } from "express";

const router = Router();

// Create a new Purchase Order
router.post("/", (req, res) => {
    try {
        res.status(201).send("Purchase Order created successfully.");
    } catch (err) {
        res.status(500).send(err);
    }
});

export default router