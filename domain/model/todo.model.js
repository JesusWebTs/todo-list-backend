class ToDo {
  constructor({ _id, folder, tasks }) {
    this._id = _id;
    this.folder = folder;
    this.tasks = tasks;
  }
}

module.exports = ToDo;
