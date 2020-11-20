# Squad Development and Deployment Patterns

## Development

Squad aims to utilize the [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching strategy. This utilizes several branches to remain organized.
Notably you can expect to almost always see the following branches:

- main --> Represents what is deployed in production. No Direct Commits.
- develop --> Represents the staging area. Minimal Direct Commits.

1. Pull a branch from develop `<your-feature-branch>`
2. Make changes, stage and commit those changes.
3. Merge to develop.
4. Push to heroku test/staging area. (From branch develop)
5. Test features/updates in the browser on the test deployment.
6. Merge develop to main.
7. Push to heroku-prod, the production version of the app. (From branch main )
8. Verify features/update on the production version of the site.

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
