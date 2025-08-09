require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const typeDefs = gql`
  type Song {
    id: ID!
    title: String!
    artist: String!
    album: String
  }

  type Playlist {
    id: ID!
    name: String!
  }

  type Query {
    songs: [Song!]
    playlists: [Playlist!]
  }

  type Mutation {
    addSong(title: String!, artist: String!, album: String): Song!
    createPlaylist(name: String!): Playlist!
  }
`;


const resolvers = {
  Query: {
    songs: () => prisma.song.findMany(),
    playlists: () => prisma.playlist.findMany(),
  },
  Mutation: {
    addSong: (_, args) => prisma.song.create({ data: args }),
    createPlaylist: (_, { name }) => prisma.playlist.create({ data: { name } }),
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 5000, host: '0.0.0.0' }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

