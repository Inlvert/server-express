const fs = require("fs").promises;

const { create } = require("domain");
const path = require("path");

// шлях до json файлу
const userDbPath = path.resolve(__dirname, "..", "db", "users.json");

class User {
  constructor(userData) {
    const { email, password, imagePath } = userData;

    this.email = email;
    this.password = password;
    this.imagePath = imagePath;

    return Promise.resolve(this);
  }

  static async create(userData) {
    const userDBString = await fs.readFile(userDbPath, "utf-8");

    const userDB = userDBString ? JSON.parse(userDBString) : [];

    const newUser = await new User(userData);

    newUser.id = Date.now();

    userDB.push(newUser);

    await fs.writeFile(userDbPath, JSON.stringify(userDB, null, 4));

    return newUser;
  }

  static async findAll() {
    const userDBString = await fs.readFile(userDbPath, "utf-8");

    const userDB = userDBString ? JSON.parse(userDBString) : [];

    return userDB;
  }

  static async findByid(id) {
    const userDBString = await fs.readFile(userDbPath, "utf-8");

    const userDB = userDBString ? JSON.parse(userDBString) : [];

    const foundUser = userDB.find((user, index, arr) => user.id === id);

    return foundUser;

    // if (foundUser) {
    //   return foundUser;
    // } else {
    //   throw new Error("User not found");
    // }
  }

  static async deleteById(id) {
    const userDBString = await fs.readFile(userDbPath, "utf-8");

    const userDB = userDBString ? JSON.parse(userDBString) : [];

    const foundUser = userDB.find((user, index, arr) => user.id === id);

    if(foundUser) {

      const newUserDB = userDB.filter((user) => user.id !== id);
  
      await fs.writeFile(userDbPath, JSON.stringify(newUserDB, null, 4));
  
      return foundUser;

    } else {

      throw new Error("User not found");

    }

  }

  static async updateById(id, newValues) {
    const userDBString = await fs.readFile(userDbPath, "utf-8");

    const userDB = userDBString ? JSON.parse(userDBString) : [];

    const foundUser = userDB.find((user, index, arr) => user.id === id);

    if (foundUser) {
      const userValuesToUpdate = Object.entries(newValues);

      for (const [key, value] of userValuesToUpdate) {
        foundUser[key] = value;
      }

      await fs.writeFile(userDbPath, JSON.stringify(userDB, null, 4));
      
    } else {
      throw new Error("User not found");
    }
  }
}

module.exports = User;
