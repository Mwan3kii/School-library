# OOP school library: set up associations

## Learning objectives
- Run a program using the command line.
- Set up associations between classes and objects.

### Estimated time: 3.5h

## Description
In this project, we are going to finish creating the remaining classes for our school library and create the associations between them.

*IMPORTANT NOTE: Read **all** requirements before you start building your project.*

### General requirements

- Make sure that there are [no linter errors](https://github.com/microverseinc/linters-config).
- Make sure that you used correct [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md).
- Make sure that you documented your work [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md).

### Ruby requirements
- Follow our list of [best practices for Ruby](https://github.com/microverseinc/curriculum-ruby/blob/main/articles/ruby_best_practices.md).

### Project requirements
- Create a class `Classroom` with the following:
  - `@label` instance variable, should be initialized in the constructor.
  - Setter and getter for `@label` (remember about `attr_accessor`).
- Create the `has-many`/`belongs-to` relationship between `Classroom` and `Student`. The following should be implemented:
  - Create the `has-many` side (a classroom has many students).
  - Create the `belongs-to` side (a student belongs to a classroom).
  - Make sure that when adding a student to a classroom it also sets the classroom for the student.
  - Make sure that when setting the classroom for a student it also adds it to the classrooms' students.
- Create a class `Book` with the following:
  - `@title` and `@author` instance variables, should be initialized in the constructor.
  - Setters and getters for instance variables (remember about `attr_accessor`).
- Create a class `Rental` with the following:
  - `@date` instance variable, should be initialized in the constructor.
  - Setter and getter for `@date` (remember about `attr_accessor`).
- Create the `many-to-many` (also `has-many-through`) relationship between `Person` and `Book` using the intermediate class `Rental`. The following should be implemented:
  - Create the `has-many` side of `Book` and `Rental` (a book has many rentals).
  - Create the `belongs-to` side of `Rental` and `Book` (a rental belongs to a book).
  - Create the `has-many` side of `Person` and `Rental` (a person has many rentals).
  - Create the `belongs-to` side of `Rental` and `Person` (a rental belongs to a person).
  - Modify the constructor of `Rental` so `Book` and `Person` are set in it.

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