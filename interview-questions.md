# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: I have heard conditional statements can also be called decision trees where you make an evaluation and then provide an outcome based on that evaluation.

for ex:
if(true) {
  do this
}

Researched answer:  Conditionals will make decisions based on evaluations. 

1. What is git? What is the difference between git and Github?

Git is an open-source tool used especially in pair programming. It allows pair programmers to work together on code pulled down from GitHub. Git also enables programmers to work through their code in an environment that will not affect the original repository or code, until merged. Github uses git to provide task management functions and version control to ensure only the accepted branches and files are merged into the original code. It is especially useful when a team of developers are working on a project and can submit their individual portions to Github via git for final review.

Your answer: A git is a piece of the project that multiple personnel are working. A git allows multiple people to collaborate on a given assignment. The git will stay with each member locally until uploaded into Git hub. Github is the main tree of the projects. It where all associated work on a given project is uploaded.
Researched answer: An open source platform that allows sharing a people to collarbote on different parts of the same project. Github is the entire project as a whole. It stores store changes, and projects for collaboration.


2. Which JavaScript operators will return a Boolean value?

Your answer: The javascript operators that will return a Boolean value, that is, true or false are:
Equality Operators
Loosly Equal:      ==       This checks the value only.
Strictly Equal:    ===      This checks the value and the data type.
Relational Operators
Less Than:     <
This compares whether the value to the left of the operator is less than the right.

Less Than Or Equal To:   =<
This compares whether the value to the left or the operator is less than or equal the right.

Greater Than: >
This compares whether the value to the left of the operator is greater than the right.

Greater Than Or Equal To: >=
This compares whether the value to the left of the operator is greater than or equal to the right.
Logical Operators
and:        &&
Both conditions, to the left of and the right of the operator have to be true in order for the condition to be met.

true && true            output: true
true && false           output: false
false && false          output: false

or:         ||
Only one of the conditions, either to the left of or to the right of the operator have to be true in order for the condition to be met.

true || true            output: true
true || false           output: true

not:        !
This operator outputs the opposite of whatever it is next to. 
If it has a   !==    it means not equal to. 

!true                   output: false
!false                  output: true

true !== true           output: false
true !== false          output: true
false !== true          output: true
false !== false         output: false

3. What is an index? What is the difference between index and value?

Your answer: The index is the location of strings and arrays. For example, the 2nd index of "cat" would be the letter "t". The value is what's declared using a variable.
Researched answer: The index represents the elements of an array. The value is the content of an element.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: arrays are a composite data type which provide a way to store a lot of data within one variable. Javascript provides a lot of built in methods that can be used to mutate (modify) as well as access the information inside of the arrays. Strings are a primitive data type, which are denoted by a value inside of quotation marks, meant to be read by humans, not computers. Strings, like arrays, can also use built in methods to mutate or access them. They each have their own different built in methods, with some overlap (e.g. .length, .concat,). Strings can be stored inside arrays.

Researched answer: (source: https://medium.com/@baruchphillips/mutating-js-strings-9f5151fbaa2)
I realized an error in my answer after researching. Strings in Javascript are immutable, which means that they cannot be modified - a new string must be created if you want to make changes to it. This is true for all primitive data types in JS. Another difference is that strings only contain characters, whereas arrays can contain different types of data.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer:Proper pair programming is utilzed to promote productivity and reduce errors in code. This is done by establishing the navigator role and driver role. The navigator's job is to provide the right way for the driver to write code. Instructing what to write and looking out for coding errors and misspellings. The driver's job is to write the code and provide feedback. The feedback from the driver is crucial for pair programming since the navigator could be stuck in one way and the driver can help provide another view point in order for the team to progress. The communication between the two is essential since the two can think of more solutions to problems than one person working by themself.
Researched answer: Two developers in two different places working on the same problem is called pair programming. There are many styles to do so such as driver-navigator, unstructured pair programming, strong style pair programming, ping pong pairing, backseat navigator, and tour guide style. Each one however has a distinct role for each person. One person is in control of the keyboard writing the code while the other is watching over the person writing the code. This is so the person watching over can point out what to write and be on the lookout for errors while the driver can focus on typing the code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:

2. Jest:

3. Objects:

4. Method:

5. Classes:
