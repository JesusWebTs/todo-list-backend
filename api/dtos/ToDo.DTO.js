class TodoDTO {
  _id = 0;
  folder = "";
  tasks = "";
  constructor({ folder, _id, tasks }) {
    this._id = _id;
    this.folder = folder;
    this.tasks = tasks;
  }
}

module.exports = TodoDTO;
