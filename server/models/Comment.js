const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    content: { type: String, required: true },
    pageId: { type: Schema.Types.ObjectId, ref: "User", required: true }, //на чьей странице находится коммент
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, //тот кто оставил коммент
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = model("Comment", schema);
