import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(
  `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@ac-vs9p2u4-shard-00-00.eslwacu.mongodb.net:27017,ac-vs9p2u4-shard-00-01.eslwacu.mongodb.net:27017,ac-vs9p2u4-shard-00-02.eslwacu.mongodb.net:27017/?ssl=true&replicaSet=atlas-12nm8i-shard-0&authSource=admin`,
);
const db = client.db("booknook");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID , 
      clientSecret: process.env.GITHUB_CLIENT_SECRET , 
    }, 
  }, 
});