const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packagesSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = packages = mongoose.model("Packages", packagesSchema);
