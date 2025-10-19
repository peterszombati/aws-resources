export const aws_init = () => {
  if (!process.env.AWS_SESSION_TOKEN) {
    if (typeof process.env.AWS_SECRET_ACCESS_KEY !== "string"
      || typeof process.env.AWS_ACCESS_KEY_ID !== "string"
      || typeof process.env.AWS_REGION !== "string") {
      console.error(`${new Date().toISOString()}:aws_init():AWS credentials is invalid:(AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY,AWS_REGION)`)
      throw new Error("AWS credentials is invalid")
    }
  }
}