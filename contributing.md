# Contribuing

## Commits style

```sh
$ git commit -m "<EMOJI> <TYPE><AREA>: <DESCRIPTION>"

# Example
$ git commit -m ":bug: fix(test): Fix bug in test"
```

### Explain

| Item            | Explain                                         | Required |
| --------------- | ----------------------------------------------- | -------- |
| :bug:           | Emoji for quick display of change               | Yes      |
| fix(test)       | Exchange rate made in a certain area (optional) | Yes      |
| Fix bug in test | Description of the change (optional)            | Yes      |

### EMOJI

Avalible emojis for commit:

| Emoji | Type     | Code        | Description   |
| ----- | -------- | ----------- | ------------- |
| 🐛    | fix      | :bug:       | Bug fix       |
| ✨    | feat     | :sparkles:  | New feature   |
| 🔧    | chore    | :wrench:    | Chore         |
| 🏷️    | types    | :label:     | Types         |
| ♻️    | refactor | :recycle:   | Refactor      |
| 🧪    | test     | :test_tube: | Test          |
| 🎨    | style    | :art:       | Style         |
| 📝    | docs     | :memo:      | Documentation |
| ⚡    | perf     | :zap:       | Performance   |
| 🚀    | deploy   | :rocket:    | Deploy        |

### TYPE

| Keyword  | Description                                                                                |
| -------- | ------------------------------------------------------------------------------------------ |
| fix      | Bug fix in production code or buil time errors                                             |
| feat     | New feature or enhancement                                                                 |
| chore    | Changes to the build process or auxiliary tools                                            |
| types    | Changes to the type system                                                                 |
| refactor | A change that neither fixes a bug nor adds a feature                                       |
| test     | Changes in test or integration tests                                                       |
| style    | Changes that do not affect the meaning of the code (comments, semicolons, formatting, etc) |
| docs     | Documentation only changes (plain text o markdown)                                         |
| perf     | Changes that do not affect the speed of the application (e.g. optimizations)               |
| deploy   | Changes that affect the meaning of the code (e.g. changing the API)                        |

### AREA

| Example    | Description                          |
| ---------- | ------------------------------------ |
| fix(test)  | Exchange rate made in a certain area |
| fix(#1)    | Fix bugs in github issue #1          |
| feat(chat) | New feature in chat                  |

### DESCRIPTION

Minimal description of the change with a maximum of 140 characters and containing a detailed and accurate description of the change.
