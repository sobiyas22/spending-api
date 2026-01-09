import transactionModel from "../models/transaction.model";


const createTransaction = async (req, res) => {
    try {
        const { user_id, amount, category, type } = req.body;

        if (amount <= 0) {
            return res.status(400).json({ error: "Amount must be positive" });
        }

        const newTransaction = new transactionModel({ user_id, amount,category, type });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const getTransactionById = async (req, res) => {
    try {
        const transaction = await transactionModel.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: "Transaction not found" });
        }
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const deleteTransaction = async (req, res) => {
    try {
        const transaction = await transactionModel.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: "Transaction not found" });
        }
        transaction.isDeleted = true;
        await transaction.save();
        res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export { createTransaction, getTransactionById, deleteTransaction };