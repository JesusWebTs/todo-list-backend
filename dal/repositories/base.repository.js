class BaseRepository {
  constructor(db, entity) {
    if (new.target === BaseRepository)
      return console.log(
        `[Abstract Class] ${new.target.name} can be instance - invalid new`
      );
    this._db = db;
    this._entity = entity;
  }
  async getAll() {
    console.log(this._entity);
    return await this._db[this._entity].find();
  }
  async get(id) {
    console.log(id);
    console.log(this._entity);
    return await this._db[this._entity].findOne({ _id: id });
  }
  async create(entity) {
    console.log(entity);
    return await this._db[this._entity].create(entity);
  }
  async update(id, entity) {
    console.log(this._entity);
    console.log(entity);
   
    return await this._db[this._entity].updateOne({ _id: id }, entity);
  }
  async delete(id) {
    console.log(this._entity);
    return await this._db[this._entity].deleteOne({ _id: id });
  }
}

module.exports = BaseRepository;
