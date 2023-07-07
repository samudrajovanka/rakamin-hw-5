class Database {
  static table = [];

  constructor() {
    if (this === Database) {
      throw new Error('Cannot instance abstract class');
    }
  }

  static getAll() {
    return new Promise((resolve) => {
      resolve(Database.table);
    });
  }

  static save(data) {
    return new Promise(async (resolve) => {
      // demo delay saving data
      setTimeout(() => {
        Database.table.unshift(data);

        resolve();
      }, 2000);
    })

  }
}
