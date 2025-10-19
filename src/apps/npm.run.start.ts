import {generate} from "./generate-resources-files/generate"
import {CloudFormation} from "@aws-sdk/client-cloudformation";
import {aws_init} from "./aws_init";

(async () => {
  try {
    aws_init()
    const cf = new CloudFormation()
    await generate(cf)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
  process.exit(0)
})()

process.stdin.resume()