const { User } = require('../models');

const userController = {
    // CRUD operations
    async getUsers(req, res) {
        try {
            const usersData = await User.find({});
            res.json(usersData);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async getUser(req, res) {
        try {
            const userData = await User.findById(req.params.userId);
            if (!userData) return res.status(404).json({ message: 'User not found' });
            res.json(userData);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async addUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async updateUser(req, res) {
        try {
            const updatedUserData = await User.findByIdAndUpdate(req.params.userId, req.body, { runValidators: true, new: true });
            if (!updatedUserData) return res.status(404).json({ message: 'User not found' });
            res.json(updatedUserData);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async deleteUser(req, res) {
        try {
            const deleteUserData = await User.findOneAndDelete({ _id: req.params.userId });
            if (!deleteUserData) return res.status(404).json({ message: 'User not found' });
            res.json({ message: `User ${deleteUserData.username} terminated.` });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async addFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );
            if (!newFriend) return res.status(404).json({ message: 'User not found' });
            res.json(newFriend);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async removeFriend(req, res) {
        try {
            const notFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!notFriend) return res.status(404).json({ message: 'User not found' });
            res.json({ message: `Friendship with user ${req.params.friendId} terminated.` });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
};

module.exports = userController;
