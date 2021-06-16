class TodoDTO {
  _id = 0;
  folder = "";
  tasks = "";
  constructor({ folder, _id, tasks }) {
    console.log({ folder });
    this._id = _id;
    this.folder = folder;
    this.tasks = tasks;
  }
}

module.exports = TodoDTO;
