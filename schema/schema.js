const schema = require('joi')

const id=schema.number()
const n=schema.string().alphanum().min(3).max(10)
const p=schema.number().integer().min(10)

const obj=schema.object(
    {nombre : n.required(),
    precio : p.required()}
)

const getProductSchema=schema.object({
    id: id.required()
})

module.exports={
    obj,
    getProductSchema
}