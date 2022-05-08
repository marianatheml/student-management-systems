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
    input studentInput {
        ${studentsAttribs}
    }
    type Mutation {
        createStudent(input: studentInput): Student
        deleteStudent(id: ID): Student
        updateStudent(id: ID, input: studentInput): Student
    }
`

module.exports = makeExecutableSchema({ 
    typeDefs,
    resolvers
})