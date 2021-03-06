# Connect 4™ Game

## A simple game where you play Connect 4™ against yourself

#

### WORK IN PROGRESS

#

### LOG

21 May 2019

- OO design Connect 4 MVP
- Plan coding process
- Follow plan

23 May 2019

- Make DOM update in response to chip drops

25 May 2019

- Write function to determine if winner

26 May 2019

- Provide move feedback in DOM

27 May 2019

- Fix double addToken after game reset bug
  - Two instances of `board` exist
- Handle overfill of column
- Tweak design

28 May 2019

- Refactor scripts

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

#### Build underlying functionality

- [x] Create newBoard function that creates 7x6 matrix populated with 0s
- [x] Write function findRow to find first empty row in given column
- [x] Create addToken function that adds token to board given column, player, and row
- [x] Create turn function that provides provides player turn?
- [x] Write function to determine if win exists

#### Build web page interface with game functionality

- [x] Build board representation probably with divs with ids
- [x] Represent empty board by default
- [x] Change affected cells using css
- [x] Maybe allow user to click column button to place token
- [x] Provide messaging
  - [x] Start new game?
  - [x] Player 1/2
  - [x] \_\_\_ WIns!
- [x] hyperlink to repository?

#### Stretch

- Make more responsive design
  - Mobile... second...
- Build DOM with Javascript to allow different board sizes
- Drag & drop tokens
- Build AI player
