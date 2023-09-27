let banksDb = require("./db");
//bank model
class BankModel {
  constructor({ name, location, branch, address, accountNumber }) {
    this.name = name;
    this.location = location;
    this.branch = branch;
    this.address = address;
    this.accountNumber = accountNumber;
  }

  save() {
    banksDb.push(this);
    return this;
  }
  static all() {
    return banksDb;
  }
  static update(updateInfo = {}) {
    banksDb = banksDb.map((bank) => {
      if (bank.name === updateInfo.name) {
        return { ...bank, ...updateInfo };
      }
      return bank;
    });
  }
  static delete({ name }) {
    let deleteBank = null;
    banksDb = banksDb.filter((bank) => {
      if (bank.name !== name) {
        return true;
      }
      deleteBank = bank;
      return false;
    });
  }
}
module.exports = BankModel;
