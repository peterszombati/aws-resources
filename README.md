### install via [npm](https://www.npmjs.com/package/aws-resources2)
```
npm i aws-resources2
```

### example code
```ts
import { Resources, Template } from 'aws-resources2';

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