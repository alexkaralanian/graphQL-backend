const graphql = require('graphql')
const _ = require('lodash')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema // takes in root query and returns GraphQL schema instance
} = graphql;

const users = [
  { id: "23", firstName: "bill", age: 20 },
  { id: "47", firstName: "samantha", age: 21 }
]

// 2 requred properties, name and field
const UserType = new GraphQLObjectType({
  name: "User", // sting that describes the Type we are defining. In practice, this is usally what we call the TYpe, ie UserType = User
  fields: { // tells GrapHQL all the different properties a user has
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { // if you give me this required argument, I will return this user
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args){
        // this is where we enter our database and ind the data we are looking for
        // resolve functions pruporse is to grab the ata we described in our schema
        // args is an object that gets called with whatever arguments get passed into original query (ie: 'id')
        return _.find(users, {
          id: args.id
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
