<script>
    import App from "../../App.svelte";

</script>

<main>
<h2>How to Find the Score of a Position?</h2>
<p>
  In order to find the score of a position we first need to identify what type of position it is.
  <br>
  <br>
  There are two type of positions, <strong>terminal</strong> and <strong>non-terminal</strong> positions.
  <br>
  <br>
  A <strong>terminal</strong> position is one in which the game <strong>is</strong> over. 
  <br>
  <br>
  And a <strong>non-terminal</strong> position is a position in which the game <strong>isn't</strong> over.
  <br>
  <br>
  <br>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D1333%253A822%26mode%3Ddesign%26t%3Dk7B2EGMSt1fSARsK-1" allowfullscreen></iframe>
  <br>
  <br>
  <br>
</p>

<h2>How to Find the Scores of Terminal Positions</h2>
  <p>
    When a position is terminal we know the <strong>outcome</strong> of the game. Who won, who lost or if the players drew.
    <br>
    <br>
    There is no secrecy or unsurety regarding the value of the position. <strong>Becuase we know the outcome of the game</strong>.
    <br>
    <br>
    At this point it just becomes a matter of determining what objective scores we want to assign for a win, loss or tie.
    <br>
    <br>
    Now, usually it's common for winning positions to be given a score of 1. Losing positions be given a score of -1. And drawing positions be given a score of 0.
    <br>
    <br>
    However, I don't really like this metric and I usually alter the scores depending on how quickly the player won or lost.
    <br>
    <br>
    If a player wins in 7 moves vs. winning in 9 moves. Both positions are given the same score of 1. But do both positions have the same value?
    <br>
    <br>
    In my mind, no. A win 7 moves in, is worth more than a win that occured in 9 moves, becuase it happened quicker.
    <br>
    <br>
    If someone asked you if you'd rather win a game in 5 moves or 8 moves. You'd probably choose to win in 5 moves.
    <br>
    <br>
    The same goes with losing, would you rather lose 4 moves into a game or 10 moves into a game?
    <br>
    <br>
    Becuase of this I give wins/losses that occured quicker, higher scores (something like 10,-10) and I give wins/losses that occur later in the 
    game scores like (2,-2).
    <br>
    <br>
    You don't have to do this, but it just means that we will value winning positions more and losing positions less, the quicker they occur in the game.
    <br>
    <br>
    When we score terminal positions, we always score them from the perspective of player whose turn it would have been if the game wasn't over.
    <br>
    <br>
    <br>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D1633%253A244%26mode%3Ddesign%26t%3DXDqzL9sdLPZN2D1o-1" allowfullscreen></iframe>
    <br>
    <br>
    <br>
    Another way you could think about it is that after you play a winning move, its your opponent's turn, who then realizes they have lost the game. 
    <br>
    <br>
    <strong>The opponent's turn is spent realizing they have lost</strong>.
    <br>
    <br>
    <br>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D1634%253A450%26mode%3Ddesign%26t%3DXDqzL9sdLPZN2D1o-1" allowfullscreen></iframe>
    <br>
    <br>
    <br>
    If you think about this more logically, you realize that a <strong>win only happens becuase a player loses</strong>.
    <br>
    <br>
    A player has to lose for the other to win.
    <br>
    <br>
    Imagine for example you were playing a game in which you didn't know the win condition. How would you determine if you won the game?
    <br>
    <br>
    The only way for you to realize that you've won is to have your opponent tell you that they've lost. 
    <br>
    <br>
    You would play a move (unknowning whether it had won you the game) and then you'd wait for your opponent to respond.
    <br>
    <br>
    Now, after playing one of these moves, you hear your opponent tell you that they are unable to respond and that they've lost the game. 
    <br>
    <br>
    At this point, and this point only is when you realize you have won the game.
    <br>
    <br>
    Applying this theory to <strong>terminal positions</strong>, we realize that a player can never directly win from a terminal position they can only lose or tie.
    <br>
    <br>
    We score moves based on whose turn it is. When a game is over the <strong>final turn always belong to</strong> the <strong>losing player</strong> (or a <strong>player that draws</strong>).
    <br>
    <br>
    <br>
    In a terminal position, the current player has either lost or tied the game. Becuse we score positions based on whose turn it is, terminal positions will 
    always have either a negative score (indicating a loss) or a score of 0 (indicating a tie).
    
    <!-- <br>
    <br>
    <br>
    However, these concepts of a player having to lose in order for another to win and terminal posititions having only negative (or 0) scores, is 
    only present in games in which the winning player is the one that makes the last move, and that you lose by the hand of your opponent. 
    <br>
    <br>
    This is the case in most two player combinatorial games like Chess, Connect Four and Tic-Tac-Toe. The other player is the one that makes the decision that causes you to lose.
    <br>
    <br>
    But in Othello, this isn't the case. -->
  </p>

<!-- 
    <h2>How We Score Terminal Positions in Othello</h2>
    <p>
        Games like Tic-Tac-Toe and Chess are kinda like sword fights in which you can only kill your opponent. Othello is like a sword fight where you can kill your opponent but also accidentally stab yourself.
        <br>
        <br>
        That is to say that in Othello you can make a move that causes the game to be over and results in you losing the game.
        <br>
        <br>
       -->
      <!-- You can change these values to be whatever you want but it is important that winning positions have a (+) sign, while losing positions have a (-) sign.
      <br>
      <br>
      Technically it would be fine if winning positions had a (-) sign as long as losing positions had a (+) sign.
      <br>
      <br>
      The main rule of thumb is <strong>you should always be able to tell if the player lost or won just by the score of the position</strong>.
      <br>
      <br>
      If losing and winning positions had the same sign, then it would be impossible to tell who won or lost. For example lets say
      winning and losing positions are both given (-) values. If I told you 'X' got a score of -10, you would have no idea if 'X' won or lost and our algorithm wouldn't know either.
      <br>
      <br>
      For simplicity I recommend if a player wins the score is positive, if they lose its negative.
      <br>
      <br> -->
      <!-- <br>
      <br>
      Something that I do that I would recommend, is altering the scores based on how quickly the player won or lost. 
      If a player won in 7 moves that position should have a higher score than a win in 9 moves.
      <br>
      <br>
      <br>
      <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D1378%253A1067%26mode%3Ddesign%26t%3Difge4tMij9Oz6XwA-1" allowfullscreen></iframe>
      <br>
      <br>
      <br>
      You don't have to do this, but it just means that we will <strong>value winning positions more</strong> if they occur <strong>quicker</strong> in the game. -->
  <!-- </p> -->

  <!-- <h2>How We Score Terminal Positions in Othello</h2>
  <p>
    Now, Othello actually has a scoring system built upon a win, loss or tie.

    
  </p> -->


        


        <!-- What is the score of a position 
        That means if your in a given position your always going to end up into the best position.
        In any position the current player is always going to pick the best move, and move into the best position that they can.

        Being in that position means that your going to end up 
        <br>
        <br>
        <br>
    </p> -->


</main>
