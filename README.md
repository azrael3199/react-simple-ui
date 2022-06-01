# react-simple-ui

Common UI Screens in React created in a way to enable faster and simpler development.


# Contributing

## Conventions

### Branch Naming

There is no strict conventions for naming your branches, however some general rules need to be followed:

  - Your branch name should contain the Jira Issue ID of the Epic under which your task comes.
  - Your branch name should briefly describe what it intends to do, it can also contain the title of the Jira epic
  - e.g: `RSU-12/initial-repo-setup`

### Commit Messages

Commit messages must strictly follow the existing commitlint angular conventions given here: https://www.conventionalcommits.org/en/v1.0.0-beta.4/

Each commit must have a subject and must contain the Jira issue ID of the task it intends to complete.

In general, the subjects are:

- `build` OR `chore`: The build type (formerly known as chore) is used to identify development changes related to the build system (involving scripts, configurations or tools) and package dependencies.
- `ci`: The ci type is used to identify development changes related to the continuous integration and deployment system - involving scripts, configurations or tools.
- `docs`: The docs type is used to identify documentation changes related to the project - whether intended externally for the end users (in case of a library) or internally for the developers.
- `feat`: The feat type is used to identify production changes related to new backward-compatible abilities or functionality.
- `fix`: The fix type is used to identify production changes related to backward-compatible bug fixes.
- `perf`: The perf type is used to identify production changes related to backward-compatible performance improvements.
- `refactor`: The refactor type is used to identify development changes related to modifying the codebase, which neither adds a feature nor fixes a bug - such as removing redundant code, simplifying the code, renaming variables, etc.
- `style`: The style type is used to identify development changes related to styling the codebase, regardless of the meaning - such as indentations, semi-colons, quotes, trailing commas and so on.
- `test`: The test type is used to identify development changes related to tests - such as refactoring existing tests or adding new tests.

an example of a proper commit message would be: `chore: RSU-11 initialized commitlint and commitizen`


# Important Links

  - MIRO board for Common Blueprint Design: https://miro.com/app/board/uXjVOwx2Cp4=/
  - JIRA: https://chinmay-sg.atlassian.net/jira/software/projects/RSU/boards/1
