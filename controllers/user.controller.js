import userModel from "../models/user.model";


const createUser = async (req, res) => {
    try {
        const { name, monthlyLimit, balance } = req.body;

        if (balance < 0) {
            return res.status(400).json({ error: "Balance cannot be negative" });
        }

        const newUser = new userModel({ name, monthlyLimit, balance });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateUserInformation = async (req, res) => {
    try {
        const { name, monthlyLimit } = req.body;
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (name) user.name = name;
        if (monthlyLimit !== undefined) user.monthlyLimit = monthlyLimit;

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateUserbalance = async (userId, amount) => {
    try {
        const user = await userModel.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        user.balance += amount;
        if (user.balance < 0) {
            throw new Error("Insufficient balance");
        }

        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
};
export { createUser, getUserById, updateUserInformation, updateUserbalance };