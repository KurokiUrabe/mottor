import mongoose from "mongoose";

const kraftfahrzeugSchema = new mongoose.Schema<Kraftfahrzeug>(
  {
    description: {
      type: String,
    },
    estimateDate: {
      type: Date,
    },
    id: {
      type: Number,
    },
    image: {
      type: String,
    },
    km: {
      type: Number,
    },
    make: {
      type: String,
    },
    model: {
      type: String,
    },
    delete: { type: Boolean },
  },
  { timestamps: true, collection: "Kraftfahrzeug" }
);

const KraftfahrzeugModel = mongoose.model("Kraftfahrzeug", kraftfahrzeugSchema);

export default KraftfahrzeugModel;
