const resolvers = require ('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const studentsAttribs = `
    id: ID
    name: String
    cpf: String
    email: String
`

const typeDefs = `
    type Student {
        ${studentsAttribs}
    }
    type Query {
        getStudentById(id: ID!): Student
        getStudentByName(name: String!): Student
        getStudentByCpf(cpf: Int!): Student
        getStudentByEmail(email: String!): Student
        getStudents: [Student]
    }
    type Mutation {
        createStudent(${studentsAttribs}): Student
        deleteStudent(id: ID): Student
        updateStudent(id: ID, ${studentsAttribs}): Student
    }
`

module.exports = makeExecutableSchema({ 
    typeDefs,
    resolvers
})