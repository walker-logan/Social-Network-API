const { Thought } = require('../models');

const thoughtController = {
    async getThoughts(req, res) {
        try {
            const thoughtsData = await Thought.find({});
            res.json(thoughtsData);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async getThought(req, res) {
        try {
            const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thoughtData) return res.status(404).json({ message: 'Not a thought in this head' });
            res.json(thoughtData);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async addThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            res.json(newThought);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async deleteThought(req, res) {
        try {
            const deleteThoughtData = await Thought.findByIdAndDelete({ _id: req.params.thoughtId });
            if (!deleteThoughtData) return res.status(404).json({ message: 'Not a thought in this head' });
            res.json({ message: `Thought ${req.params.thoughtId} removed.` });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async updateThought(req, res) {
        try {
            const updateThoughtData = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
            if (!updateThoughtData) return res.status(404).json({ message: 'Not a thought in this head' });
            res.json(updateThoughtData);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async addReaction(req, res) {
        try {
            const newReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            if (!newReaction) return res.status(404).json({ message: 'No thought found' });
            res.json(newReaction);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    async deleteReaction(req, res) {
        try {
            const delReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );
            if (!delReaction) return res.status(404).json({ message: 'No thought found' });
            res.json({ message: `Reaction ${req.params.reactionId} removed.` });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = thoughtController;
