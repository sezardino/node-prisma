# Prisma with node js - Introduction

## Technologies

- Nodejs
- TypeScript
- Prisma

### Tasks

- Create `User` model with fields:
  - id - ID
  - name - optional name of the user
  - email - unique field for user email
- Make First migration
- Get all users from db
- Create new user
- Update user
- Create new table `Post` with fields:
  - id - ID
  - title - Title of the `Post`
  - content - optional field of the content of the `Post`
  - published - boolean that marks is this `Post` draft or published
  - author and authorId - relation between `Post` and `User` (is optional)
- Create new `Post` with title `Hello World`
- Create relation between `Post` and `User`
- Return `User` by unique field
- Return subfields of the `User`
- Return `User` with their `Posts`
- Create new `User` with new `Post` in one query
- Get all `Users` whose name starts with `A`
- Get tables with pagination
