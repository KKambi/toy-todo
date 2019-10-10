class SectionController {
    constructor(SectionModel){
        this.SectionModel = SectionModel
    }

    async updateSection(target, value, attribute, identifier){
        return await this.SectionModel.update(target, value, attribute, identifier)
    }
    
    async deleteSection(attribute, identifier){
        return await this.SectionModel.delete(attribute, identifier)
    }
}

module.exports = SectionController