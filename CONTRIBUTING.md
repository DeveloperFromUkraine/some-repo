# Contributing

## Contributing to the codebase

- Create a feature branch from `develop`
- Make your changes (following the steps for **Setting up local development** listed below, if desired)
- Make sure non-trivial code has tests (if you're unfamiliar with Jest, it's pretty much Jasmine but better! You can [check out the docs](http://facebook.github.io/jest/docs/en/getting-started.html) for more info)
- Update changelog under the `vNEXT` heading with a brief description of your changes
  - If you are adding a feature, provide a link to documentation
  - If you make breaking changes, note them and provide instructions for upgrading
- Squash your commits as needed (if your branch contains work-in-progress commits or lots of small changes, it's a good candidate for squashing to make it easier to treat each line in the changelog as an atomic change)
- Open a PR from your branch to `develop`

## Setting up local development

### From the ignite-design-system repo

- `yarn install`
- `yarn build` (or `yarn build:watch` if you are going to be making and testing multiple changes)
- `cd dist && yarn link`

Note that you build from the root of the repository, but you must link (and publish, though the build pipeline handles that for us) from the `dist/` directory

### From the consuming repo

- `yarn link ignite-design-system`
- `yarn start --preserve-symlinks`

The `--preserve-symlinks` flag solves some interesting errors around the linked library not being considered an Angular module. YMMV.

Additionally, you may find that you have to kill the app server and restart it after making changes to the `ignite-design-system` module, so that Angular is aware of and can compile in the changes. We know, we're working on it.
