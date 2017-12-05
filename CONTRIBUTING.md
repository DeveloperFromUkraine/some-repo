# Contributing

To contribute to the codebase:

- Create a feature branch from `develop`
- Make your changes
- Make sure non-trivial code has tests (if you're unfamiliar with Jest, it's pretty much Jasmine but better! You can [check out the docs](http://facebook.github.io/jest/docs/en/getting-started.html) for more info)
- Update changelog under the `vNEXT` heading with a brief description of your changes
  - If you are adding a feature, provide a link to documentation
  - If you make breaking changes, note them and provide instructions for upgrading
- Squash your commits as needed (if your branch contains work-in-progress commits or lots of small changes, it's a good candidate for squashing to make it easier to treat each line in the changelog as an atomic change)
- Open a PR from your branch to `develop`
