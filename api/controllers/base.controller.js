class BaseController {
  constructor(EntityService, EntityDto) {
    if (new.target === BaseController)
      return console.log(
        `[Abstract Class] ${new.target.name} can be instance - invalid new`
      );
    this._entityService = EntityService;
    this._entityDto = EntityDto;

    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(_, res) {
    let entities = await this._entityService.getAll();
    if (!entities) return res.status(404).json([]);
    entities = entities.map((entity) => new this._entityDto(entity));
    return res.send({
      payload: entities,
    });
  }
  async get(req, res) {
    const { id } = req.params;
    let entity = await this._entityService.get(id);
    entity = new this._entityDto(entity);
    return res.json({
      payload: entity,
    });
  }
  async create(req, res) {
    const { body } = req;
    const createdEntity = await this._entityService.create(body);
    const entity = new this._entityDto(createdEntity);
    return res.status(201).json({
      payload: entity,
    });
  }
  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const updatedEntity = await this._entityService.update(id, body);
    const entity = new this._entityDto(updatedEntity);
    return res.json({
      payload: entity,
    });
  }
  async delete(req, res) {
    const { id } = req.params;
    await this._entityService.delete(id);
    return res.status(204)
  }
}

module.exports = BaseController;
