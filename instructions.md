# OOP school library: add basic UI

## Learning objectives
- Build interactive console apps.
- Run a program using the command line.

### Estimated time: 3.5h

## Description
In this project, you will create a form of UI for your school library app. This way it can be invoked as an executable and not something you use in IRB exclusively.

*IMPORTANT NOTE: Read **all** requirements before you start building your project.*

### General requirements

- Make sure that there are [no linter errors](https://github.com/microverseinc/linters-config).
- Make sure that you used correct [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md).
- Make sure that you documented your work [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md).

### Ruby requirements
- Follow our list of [best practices for Ruby](https://github.com/microverseinc/curriculum-ruby/blob/main/articles/ruby_best_practices.md).

### Project requirements
- Watch the video with the UI example again (you have seen it while reading the Sneak Peek).
    - [![UI example](https://img.youtube.com/vi/vkkgrhD6aXQ/0.jpg)](https://www.youtube.com/watch?v=vkkgrhD6aXQ)
- Your console app should behave in the same way as it is in the example.
- Create a `app.rb` file that will serve as your console app entry-point. It should have methods that do the following:
  - List all books.
  - List all people.
  - Create a person (teacher or student, not a plain `Person`).
  - Create a book.
  - Create a rental.
  - List all rentals for a given person id.
- In your `main.rb` define the entry point, this will be a method called `main` that is invoked at the end of your file. This method should do the following:
  - Present the user with a list of options to perform.
  - Lets users choose an option.
  - If needed, ask for parameters for the option.
  - Have a way to quit the app.

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