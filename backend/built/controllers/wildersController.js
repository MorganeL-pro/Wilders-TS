"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WilderModel = require("../models/WilderSchema");
module.exports = {
    create: async (req, res) => {
        try {
            await WilderModel.init();
            const wilder = new WilderModel(req.body);
            const result = await wilder.save();
            res.json({ success: true, result });
        }
        catch (err) {
            res.status(400).send({ error: err.message });
        }
    },
    read: async (req, res) => {
        try {
            const wilders = await WilderModel.find();
            if (!wilders)
                res.json({ success: false, result: "No wilder found" });
            res.json({ success: true, result: wilders });
        }
        catch (err) {
            res.json({ success: false, result: err });
        }
    },
    update: async (req, res) => {
        try {
            const wilder = await WilderModel.findByIdAndUpdate({ "_id": req.body._id }, req.body, { new: true });
            if (!wilder)
                res.json({ success: false, result: "No such wilder exists" });
            res.json(wilder);
        }
        catch (err) {
            res.json({ success: false, result: err });
        }
    },
    delete: async (req, res) => {
        const wilder = await WilderModel.remove({ "_id": req.params.id });
        try {
            if (!wilder)
                res.json({ success: false, result: "No wilder with such ID was found" });
            res.json({ success: true, result: wilder });
        }
        catch (err) {
            res.json({ success: false, result: err });
        }
    }
};
//# sourceMappingURL=wildersController.js.map