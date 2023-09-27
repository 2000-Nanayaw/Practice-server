const BankModel = require("./model");
//controllers
const listBanksController = (req, res) => {
  //list all banks
  const banks = BankModel.all();
  res.json({ data: banks });
};
const createBanksController = (req, res) => {
  //create a bank
  const { name, location, branch, address, accountNumber } = req.body;
  const bank = new BankModel({
    name,
    location,
    branch,
    address,
    accountNumber,
  });
  bank.save();
  res.json({ message: "create successful, data: bank" });
};
const updateBanksController = (req, res) => {
  //update a bank
  const { name, location, branch, address, accountNumber } = req.body;
  const updatedBank = BankModel.update({
    name,
    location,
    branch,
    address,
    accountNumber,
  });
  res.json({ message: "update successful", data: updatedBank });
};
const deleteBanksController = (req, res) => {
  //delete a bank
  const { name } = req.body;
  const deleteBank = BankModel.delete({ name });
  res.json({ message: "delete successful", data: deleteBank });
};
module.exports = {
  listBanksController,
  createBanksController,
  updateBanksController,
  deleteBanksController,
};
