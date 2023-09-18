import db from "../config/db.js";
import bcrypt from "bcrypt";

class User {
  constructor(id, firstName, secondName, email, password, user_type) {
    this.id = id;
    this.firstName = firstName;
    this.secondName = secondName;
    this.email = email;
    this.password = password;
    this.user_type = user_type;
  }

  // Save to the Database
  async save() {
    const saltRounds = 10;
    // Hash the password
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);

    // Query for inseritn into the database
    let sql =
      "INSERT INTO user(firstName, secondName, email, password) VALUES(?,?,?,?)";

    await db
      .execute(sql, [
        this.firstName,
        this.secondName,
        this.email,
        hashedPassword,
      ])
      .then((result) => {
        console.log("User Added");
      });
  }

  // Find user details using their email
  static async findByEmail(email) {
    let sql = "SELECT * FROM user WHERE email = ?";

    const [userRows, _] = await db.execute(sql, [email]);
    if (userRows.length === 0) {
      return null; // User not found
    }

    this.user_type = userRows[0].user_type;
    this.id = userRows[0].id;

    return new User(
      userRows[0].id,
      userRows[0].firstName,
      userRows[0].secondName,
      userRows[0].email,
      userRows[0].password,
      userRows[0].user_type
    );
  }
}

export default User;
