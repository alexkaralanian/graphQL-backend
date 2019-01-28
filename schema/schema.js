const graphql = require('graphql')

const {
  GraphQLObjectType
} = graphql;

// 2 requred properties, name and field
const UserType = new GraphQLObjectType({
  name: "User" // sting that describes the Type we are defining. In practice, this is usally what we call the TYpe, ie UserType = User
  fields: { // tells GrapHQL all the different properties a user has
    id: ,
    firstName: ,
    age:
  }
})
