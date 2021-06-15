const BaseRepository = require("./base.repository");

class ToDoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "todo");
  }
}
module.exports = ToDoRepository;