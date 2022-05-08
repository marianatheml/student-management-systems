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
        async createStudent(_, { input }) {
            const result = await db('students').insert({
                name: input.name,
                cpf: input.cpf,
                email: input.email,
                created_at: input.created_at
            })

            const id = result[0]
            return await db('students').where({ id }).first()
        },
        async deleteStudent(_, id) {
            await db('students').where(id).delete()
        },
        async updateStudent(_, { id, input }) {
            const findStudent = await db('students').where({ id }).update({
                name: input.name,
                cpf: input.cpf,
                email: input.email,
            })
            
            return await db('students').where({ id }).first()
        }
    }
}