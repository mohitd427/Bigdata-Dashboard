const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
  added: { type: String },
  country: { type: String },
  impact: { type: String },
  insight: { type: String },
  intensity: { type: Number },
  likelihood: { type: Number },
  pestle: { type: String },
  published: { type: String },
  region: { type: String },
  relevance: { type: Number },
  sector: { type: String },
  source: { type: String },
  start_year: { type: String },
  end_year: { type: String },
  topic: { type: String },
  url: { type: String },
});

const DataModel = mongoose.model("data", dataSchema)

module.exports = {
    DataModel
}
