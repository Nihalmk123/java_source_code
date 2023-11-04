// const { Admin } = require("../models/admin.model");
import Admin from "../models/admin.model.js";

function addAdmin(firstName, lastName, mno, age) {
  console.log(firstName + " " + lastName);
}

// module.exports = { addAdmin };
export default addAdmin;
