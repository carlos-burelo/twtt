import mongoose, { ConnectOptions } from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined")

interface Connection {
  conn: mongoose.Connection | null
  promise: Promise<any> | null
}

let connection: Connection = global.mongoose

if (!connection) connection = global.mongoose = { conn: null, promise: null }

export async function connect() {
  if (connection.conn) return connection.conn
  if (!connection.promise) {
    const options: ConnectOptions = { bufferCommands: false }
    connection.promise = mongoose.connect(MONGODB_URI, options).then(mongoose => mongoose)
  }
  connection.conn = await connection.promise
  return connection.conn
}