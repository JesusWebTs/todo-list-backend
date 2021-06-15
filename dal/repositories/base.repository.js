class BaseRepository {
  constructor(db, entity) {
    if (new.target === BaseRepository)
      return console.log(
        `[Abstract Class] ${new.target.name} can be instance - invalid new`
      );
    this._db = db;
    this._entity = entity;
  }
  getAll() {
    console.log(this._entity);
    return this._db[this._entity].find();
  }
  get(id) {
    console.log(this._entity);
    return this._db[this._entity].findOne({ _id: id });
  }
  create(entity) {
    console.log(entity);
    return this._db[this._entity].create(entity);
  }
  update(id, entity) {
    console.log(this._entity);
    return this._db[this._entity].updateOne({ _id: id }, entity);
  }
  delete(id) {
    console.log(this._entity);
    return this._db[this._entity].deleteOne({ _id: id });
  }
}

module.exports = BaseRepository;
