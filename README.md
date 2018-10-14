# duduksini-api

duduksini api

## Developing

### Build

```
npm run transpile
```

### Package

```
aws cloudformation package \
  --template-file aws/cf.yaml \
  --s3-bucket aws-global-artifactsbucket-18rln6pupi82z \
  --s3-prefix duduksini-api/localbuild \
  --output-template-file aws/cf.pkg.yaml
```

### Deploy

```sh
aws cloudformation deploy \
  --stack-name duduksini-api \
  --template-file aws/cf.pkg.yaml \
  --capabilities CAPABILITY_IAM \
  --no-fail-on-empty-changeset
```
