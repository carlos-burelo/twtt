declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string
    }
  }
  var mongoose: any
}
export { }