"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
const WilderSchema = new mongoose_1.Schema({
    name: String,
    city: String,
    skills: [{ title: String, votes: Number }],
});
module.exports = mongoose.model("wilder", WilderSchema);
//# sourceMappingURL=WilderSchema.js.map