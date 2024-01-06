const { model } = require("mongoose");
const { uuid } = require("uuidv4");

const { SINKING_FUNDS_SCHEMA } = require("./schema");

const sinkingFundsModel = model("SinkingFund", SINKING_FUNDS_SCHEMA);

async function fetchSinkingFundsCollection() {
  try {
    return await sinkingFundsModel.find({}, { _id: 0, __v: 0 });
  } catch (error) {
    console.error(`Error fetching sinking funds - ${error}`);
    throw Error("Unable to fetch sinking funds");
  }
}

async function addSinkingFund(sinkingFund) {
  try {
    await sinkingFundsModel.create([{ ...sinkingFund, id: uuid() }]);
    return await fetchSinkingFunds();
  } catch (error) {
    console.error(`Error adding sinking fund - ${error}`);
    throw Error("Unable to add sinking fund");
  }
}

async function deleteSinkingFund(id) {
  try {
    await sinkingFundsModel.deleteOne({ id });
    return await fetchSinkingFunds();
  } catch (error) {
    console.error(`Error deleting sinking fund - ${error}`);
    throw Error("Unable to delete sinking fund");
  }
}

async function updateSinkingFund(updatedSinkingFund) {
  try {
    await sinkingFundsModel.updateOne(
      { id: updatedSinkingFund.id },
      updatedSinkingFund
    );
    return await fetchSinkingFunds();
  } catch (error) {
    console.error(
      `Error updating sinking fund with id ${updatedSinkingFund.id}`
    );
    throw Error("Unable to update sinking fund");
  }
}

module.exports = {
  fetchSinkingFundsCollection,
  addSinkingFund,
  deleteSinkingFund,
  updateSinkingFund,
};
