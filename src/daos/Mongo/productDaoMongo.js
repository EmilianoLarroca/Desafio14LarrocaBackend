const { productModel } = require("./models/products.model.js")

class ProductDaoMongo {
    constructor(){
        this.model = productModel
    }

    async get(){
        return await this.model.find({}).lean()
    }

    async getBy(filter){
        console.log(filter)
        return await this.model.find({_id: filter.uid}).lean()
    }

    async create(newProduct){
        return await this.model.create(newProduct)
    }

    async update(pid, productToUpdate){
        return this.model.findByIdAndUpdate({_id: pid}, productToUpdate, {new: true})
    }

    async delete(pid){
        return this.model.findByIdAndDelete({_id: pid}, {new: true})
    }

}

module.exports = {
    ProductDaoMongo
}