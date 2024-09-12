# OOP school library: decorate a class

## Learning objectives
- Implement composition (as an example of the design pattern).
- Run a program using the command line.

### Estimated time: 2h

## Description
In this project, you will use the Decorator design pattern to correct the names of people.

*IMPORTANT NOTE: Read **all** requirements before you start building your project.*

### General requirements

- Make sure that there are [no linter errors](https://github.com/microverseinc/linters-config).
- Make sure that you used correct [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md).
- Make sure that you documented your work [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md).

### Ruby requirements
- Follow our list of [best practices for Ruby](https://github.com/microverseinc/curriculum-ruby/blob/main/articles/ruby_best_practices.md).

### Project requirements
- Check the usage of [Decorator pattern in Ruby](https://refactoring.guru/design-patterns/decorator/ruby/example#example-0)
- Think about how you can use two decorators in order to capitalize and trim people's names.
- In the following steps you will get instructions for implementing the Decorator design pattern for this case.


#### Interface
- Create a class `Nameable`.
   - Implement a method called `correct_name` that will raise a `NotImplementedError`.

#### Turn your Person class to Nameable
- Make sure that your Person class inherits from Nameable
- Make sure that this class has a method `correct_name` implemented. It should simply return the name attribute.


#### Prepare base Decorator
- Make sure that it inherits from Nameable.
- In the constructor assign a nameable object from params to an instance variable.
- Implement the `correct_name` method that returns the result of the correct_name method of the `@nameable`.


#### Prepare CapitalizeDecorator and TrimmerDecorator
- For the CapitalizeDecorator:
    - Create a class that inherits from the base Decorator class.
    - Implement a method `correct_name` that capitalizes the output of `@nameable.correct_name`.
- For the TrimmerDecorator:
    - Create a class that inherits from the base Decorator class.
    - Implement a method `correct_name` that makes sure that the output of `@nameable.correct_name` has a maximum of 10 characters. If it's longer it should trim the word.

### See your decorators in action
Try the following code and check if you managed to decorate your person:

```ruby
person = Person.new(22, 'maximilianus')
person.correct_name
capitalized_person = CapitalizeDecorator.new(person)
puts capitalized_person.correct_name
capitalized_trimmed_person = TrimmerDecorator.new(capitalized_person)
puts capitalized_trimmed_person.correct_name
```

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