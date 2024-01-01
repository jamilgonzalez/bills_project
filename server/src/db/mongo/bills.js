const { model } = require("mongoose");
const { uuid } = require("uuidv4");

const { BILLS_SCHEMA } = require("./schema");

const billsModel = model("Bill", BILLS_SCHEMA);

async function fetchBills(billFilter) {
  try {
    let filter = {};
    if (billFilter) {
      const { startDate, endDate } = billFilter;
      filter = {
        dueDate: {
          $gte: new Date(startDate).toISOString(),
          $lte: new Date(endDate).toISOString(),
        },
      };
    }
    const bills = await billsModel.find(filter, { _id: 0, __v: 0 });
    return bills.map((bill) => bill._doc);
  } catch (error) {
    console.error(`Error fetching bills - ${error}`);
    throw Error("Unable to fetch bills");
  }
}

async function addBill(bill) {
  try {
    await billsModel.create([{ ...bill, id: uuid() }]);
    return await fetchBills();
  } catch (error) {
    console.error(`Error adding bill - ${error}`);
    throw Error("Unable to add bill");
  }
}

async function deleteBill(id) {
  try {
    await billsModel.deleteOne({ id });
    return await fetchBills();
  } catch (error) {
    console.error(`Error deleting bill - ${error}`);
    throw Error("Unable to delete bill");
  }
}

async function updateBill(updatedBill) {
  try {
    await billsModel.updateOne({ id: updatedBill.id }, updatedBill);
    return await fetchBills();
  } catch (error) {
    console.error(`Error updating bill with id ${updateBill.id}`);
    throw Error("Unable to update bill");
  }
}

module.exports = {
  addBill,
  deleteBill,
  fetchBills,
  updateBill,
};
