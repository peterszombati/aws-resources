`npm install aws-resources2`

example code
```ts
import { Resources, Template } from 'aws-resources';

const bucket = Resources.AWSS3Bucket({
  ResourceName: 'MyBucket',
  Properties: {
    BucketName: 'example-bucket',
  },
});


const template = new Template()
template.add(bucket)

console.log(JSON.stringify(template, null, 2));
```