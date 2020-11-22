# Squad Development and Deployment Patterns

## Development

### Git Workflow

Squad aims to utilize the [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching strategy. This utilizes several branches to remain organized.
Notably you can expect to almost always see the following branches:

- main --> Represents what is deployed in production. No Direct Commits.
- develop --> Represents the staging area. Minimal Direct Commits.

1. Pull a branch from develop `<your-feature-branch>`
2. Make changes, stage and commit those changes. [Build And Run Locally](#Local-Development)
3. Merge to develop.
4. Push to heroku test/staging area. (From branch develop)
5. Test features/updates in the browser on the test deployment.
6. Merge develop to main.
7. Push to heroku-prod, the production version of the app. (From branch main )
8. Verify features/update on the production version of the site.

### Local Development

To make changes to just the front end use, `npm run dev-client` this will spin up the webpack server that ships with CRA and will NOT start a backend server.

Once you are finished with this, run `npm run rebuild` to build a production grade package. Then run `npm run start` to test that all assets are being served correctly by the node process.

**If you run `npm run start` without building, you will be scratching your head wondering why the changes have not appeared! Node serves from the build folder so make sure you actually build!**

## Deployment

There are two deployments for this project

- [Production (harmonix.herokuapp.com)](https://harmonix.herokuapp.com)
- [Staging or Test (harmonix-develop.heroku.com)](https://harmonix-develop.herokuapp.com)

When you are on the development branch you can push to the staging area with the following command:

```
git push heroku develop:master
```

When you are on the master branch you can push to the production area with the following command:

```
git push heroku-prod main
```

To view the latest logs from a deployment you can use.

```
heroku logs --tail
```
