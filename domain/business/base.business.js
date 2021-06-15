class BaseBusiness {
  constructor(EntityRepository, Entity) {
    if (new.target === BaseBusiness)
      return console.log(
        `[Abstract Class] ${new.target.name} can be instance - invalid new`
      );
    this._entityRepository = EntityRepository;
    this._entity = Entity;
  }
  async getAll() {
    const entities = await this._entityRepository.getAll();
    if (entities.length === 0) return null;
    return entities.map((entity) => new this._entity(entity));
  }
  async get(id) {
    const entity = await this._entityRepository.get(id);
    if (!entity) return null;
    return new this._entity(entity);
  }
  async create(entity) {
    const createdEntity = await this._entityRepository.create(entity);
    if (!createdEntity) return null;
    return new this._entity(createdEntity);
  }
  async update(id, entity) {
    const updatedEntity = await this._entityRepository.update(id, entity);
    if (!updatedEntity) return null;
    return entity;
  }
  async delete(id) {
    return await this._entityRepository.delete(id);
  }
}

module.exports = BaseBusiness;
