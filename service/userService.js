const { error } = require('console');
const user = require('../model/user');
const crypto = require('crypto');


async function addUser(User) {
  try {
    const uid = createUserId();
    const beforeencryption = User.password;
    const afterencryption = ecryptPassword(beforeencryption);
    User.user_id = uid;
    User.password = afterencryption;
    const createUserRes = await user.create(User);
    return createUserRes;
  }
  catch (err) {
    throw error("Unable to create new User", err);
  }

}


async function login(email, password) {
  try {
    const ecrypwd = ecryptPassword(password);
    const validuser = await user.findOne({ $and: [{ email: email, password: password }] });
    return validuser;
  }
  catch (err) {
    throw error("Unable to login user");
  }
}

async function viewUsers() {
  try {
    const usersList = await user.find();
    return usersList;
  }
  catch (err) {
    throw error("Unable to fetch users", err);
  }
}
function createUserId() {
  return Math.random().toString().substring(2, 8);
}

function ecryptPassword(passwordtoencrypt) {
  return crypto.createHash('sha256').update(passwordtoencrypt).digest('hex');
}


module.exports = {
  addUser,
  login,
  viewUsers
}
