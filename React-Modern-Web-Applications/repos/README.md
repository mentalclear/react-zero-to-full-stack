# Starting with React

- To start React poject:
`npx create-react-app {name}`

## React Router

- Installation:
`npm install react-router-dom`

## React Query String 

-Installation
`npm install query-string`


## Building and publishing the project

- Building
`npm run build`

- Netlify deployment
1. Netlify CLI install `npm install --save-dev netlify-cli`
2. Netlify deployment `npx netlify deploy` use build direcotry there.
3. Add a script to package.json: `"deploy:netlify": "npm run build && netlify deploy --dir ./build"`
4. After that deployment is done with `npm run deploy:netlify`


- AWS Deployment
1. Do all the prep in s3 bucket
2. install the cli:
`curl "https://awscli.amazonaws.com/AWSCLIV2.msi" -o "AWSCLIV2.msi"`
3. Run `aws configure` and add key and secret key
4. add a script to package.json 
`"deploy:s3": "npm run build && aws s3 sync build/ s3://dgk-reactapp"`
5. Deploy: `npm run deploy:s3`

- Firebase Deployment

1. install firebase tools using npm
2. run `firebase login`
3. Init the projct in the folder `firebase init`
4. Deploy `firebase deply`
5. Add a script to package.json:
    `"deploy:firebase": "npm run build && firebase deploy"`


