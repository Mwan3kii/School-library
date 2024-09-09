# OOP school library: add Person, Student and Teacher classes

## Learning objectives
- Implement classes and objects in Ruby.
- Implement encapsulation and inheritance with Ruby.
- Run a program using the command line.

### Estimated time: 2h

## Description
In this project, you will start building your school library app. In this initial step, you will implement the classes to represent students and teachers.

*IMPORTANT NOTE: Read **all** requirements before you start building your project.*

### General requirements

- Make sure that there are [no linter errors](https://github.com/microverseinc/linters-config).
- Make sure that you used correct [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md).
- Make sure that you documented your work [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md).

### Ruby requirements
- Follow our list of [best practices for Ruby](https://github.com/microverseinc/curriculum-ruby/blob/main/articles/ruby_best_practices.md).

### Project requirements
- Create class `Person` with  the following:
  - Instance vars: `@id`, `@name`, and `@age`.
  - Constructor with `name`,  `age`, and `parent_permission` as parameter. `name` and `parent_permission` are optional and have default values of `"Unknown"` and `true`.
  - Getters for `@id`, `@name`, and `@age`.
  - Setters for `@name` and `@age`.
  - Private method `of_age?` that returns `true` if `@age` is greater or equal to 18 and `false` otherwise.
  - Public method `can_use_services?` that returns `true` if person is of age or if they have permission from parents.
- Create class `Student` with the following:
  - Inherits from `Person`.
  - Constructor extends parent's constructor by adding `@classroom` and a parameter for it.
  - Method `play_hooky` that returns `"¯\(ツ)/¯"`.
- Create class `Teacher` with the following:
  - Inherits from `Person`.
  - Constructor extends parent's constructor by adding `@specialization` and a parameter for it.
  - Override `can_use_services?` so it always returns `true`.
- Each class should be saved in a separate file.

### Need a big picture?

Remind me about [the big picture of this project](./sneak_peek.md).

## Work and submission mode

- You should submit this activity **individually.**

## Code review

Follow [these steps](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/code-review/articles/how_to_ask_for_a_code_review.md) to request a code review of your project.

## Submit your project

After the final approval from a code reviewer, you need to submit your project.
[Read this FAQ for a reminder on how to submit your project.](https://microverse.zendesk.com/hc/en-us/articles/360061344234)
Now go to your Student Dashboard and submit your project.

------

_If you spot any bugs or issues in this activity, you can [open an issue with your proposed change](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/open_issue.md)._