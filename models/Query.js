const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        jewelleryType: {
            type: String,
            required: true,
        },
        budget: {
            type: String,
            required: true,
        },
        message: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const query = mongoose.model("Query", querySchema);
module.exports = query;