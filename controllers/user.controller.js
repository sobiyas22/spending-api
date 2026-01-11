import userModel from "../models/user.model.js";


const createUser = async (req, res) => {
    try {
        const { name, occupation, location } = req.body;
        console.log('req.body', req.body);
        const newUser = new userModel({ name, occupation, location });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log(error);
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
        const { name, occupation, location  } = req.body;
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (name) user.name = name;
        if (occupation !== undefined) user.occupation = occupation;
        if (location !== undefined) user.location = location;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export { createUser, getUserById, updateUserInformation, deleteUser };