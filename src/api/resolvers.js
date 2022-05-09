const db = require('../config/database')

module.exports = {
    Query: {
        async getStudentById(_, { id }) {
            return await db('students').where({ id }).first()
        },
        async getStudentByName(_, { name }) {
            return await db('students').where({ name }).first()
        },
        async getStudentByEmail(_, { cpf }) {
            return await db('students').where({ cpf }).first()
        },
        async getStudentByEmail(_, { email }) {
            return await db('students').where({ email }).first()
        },
        async getStudents() {
            return await db('students')
        }
    },
    Mutation: {
        async createStudent(_, { name, cpf, email }) {
            const result = await db('students').insert({
                name: name,
                cpf: cpf,
                email: email
            })

            const id = result[0]
            return await db('students').where({ id }).first()
        },
        async deleteStudent(_, id) {
            await db('students').where(id).delete()
        },
        async updateStudent(_, { id, name, cpf, email }) {
            const findStudent = await db('students').where({ id }).update({
                name: name,
                cpf: cpf,
                email: email,
            })
            
            return await db('students').where({ id }).first()
        }
    }
}