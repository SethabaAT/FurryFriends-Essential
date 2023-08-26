import db from "../config/db.js";
import bcrypt from "bcrypt";

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Save to the Database
  async save() {
    const saltRounds = 10;

    // Hash the password
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);

    let sql = "INSERT INTO user(name, email, password) VALUES(?,?,?)";

    const [newUser, _] = await db.execute(sql, [
      this.name,
      this.email,
      hashedPassword,
    ]);
    return newUser;
  }

  // Find user details using their email
  static async findByEmail(email) {
    let sql = "SELECT * FROM user WHERE email = ?";

    const [userRows, _] = await db.execute(sql, [email]);

    if (userRows.length === 0) {
      return null; // User not found
    }

    return new User(userRows[0].name, userRows[0].email, userRows[0].password);
  }
}

export default User;
