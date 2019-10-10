class SectionController {
    constructor(SectionModel){
        this.SectionModel = SectionModel
    }

    async updateSection(target, value, attribute, identifier){
        return await this.SectionModel.update(target, value, attribute, identifier)
    }
}

module.exports = SectionController