# Connect 4 Game

## A simple game where you play Connect 4™ against yourself

#

### WORK IN PROGRESS

#

### LOG

21 May 2019

- OO design Connect 4 MVP
- Plan coding process

#

### Objects + Properties

- The Connect 4 board is 7 spaces wide and 6 spaces high
- The player’s token must fall to the bottom of the column they place it into
- You cannot play into a full column
- You win by getting 4 tokens in a row (horizontal, vertical, diagonal)
- How cool would it be to program a computer player using artificial inteligence
- Animations, drag and drop, or other advanced UX could also be fun additions

  | Object | Properties               |
  | :----: | ------------------------ |
  | Player | represented by token     |
  |        | two unique players/game  |
  |        | choses column for drop   |
  | Board  | matrix? 7x6              |
  |        | knows token locations    |
  |        | prevents column overfill |
  |        | determines winner        |
  |        | can reset                |
  |        |                          |

#

### Project Plan

#### Build underlying functionality to work in terminal

- [x] Create newBoard function that creates 7x6 matrix populated with 0s
- [] Create addToken function that drops token based on column input and turn
- [] Create turn function that provides provides player turn
- [] Write function to determine if win exists

#### Build web page interface with game functionality

- [] Build board representation probably with divs with ids
- [] Represent empty board by default
- [] Change affected cells using css
- [] Maybe allow user to click column button to place token
- [] Provide messaging
  - [] Start new game?
  - [] Player 1/2
  - [] \_\_\_ WIns!
- [] hyperlink to repository?

#### Stretch

- [] Drag & drop tokens
- [] Build AI player
