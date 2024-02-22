
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
    There is no secrecy or unsurety regarding the value of the position. Becuase we know the outcome of the game for each player.
    <br>
    <br>
    At this point it just becomes a matter of choosing what score your going to assign for each outcome of the game. 
    <br>
    <br>
    Usually it's common for winning positions to 
    be given a score of 1. Losing positions be given a score of -1. And drawing positions be given a score of 0.
    <br>
    <br>
    You can change the scale of these values however you want. Not all winning and losing positions have to be given the same score.
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
    <br>
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
    You don't have to do this, but it just means that we will <strong>value winning positions more</strong> if they occur <strong>quicker</strong> in the game.
  </p>

  <h2>How We Score Terminal Positions in Othello</h2>
  <p>
    Now, Othello actually has a scoring system added upon a simple win, loss or tie.
    <br>
    <br>
    When no players can no longer make a move, the winning player is the one that has more stones on the board. And their score is equivalent to how <strong>many more stones</strong> they have then the losing player.
    <br>
    <br>
    So if someone said 'Black won with a score of 15' it means they won and had 15 more stones in white.
    <br>
    <br>
    This makes determining the scores of terminal positions super easy, since we can just subtract the number of stones each player has by the number of their opponent's stones.
    <br>
    <br>
    If the game ends with Black having 36 stones and White having 22. The score of that position for Black would 14 and for White -14.
  </p>

  <h2>How We Score Non-Terminal Positions</h2>
    <p>
        The difficutly with scoring non-terminal positions is that we don't know the outcome of the game.
        <br>
        <br>
        We know the immediate value of <strong>terminal</strong> positions becuase we know if the player has won, lost or tied the game. 
        <br>
        <br>
        With <strong>non-terminal</strong> positions we don't have this luxury. We can't look at the position and immediately determine its value.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D1504%253A1357%26mode%3Ddesign%26t%3D8BREjIDfMWth5r5n-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        Well, in order to find the scores of these positions we have to look at the scores of future positions.
        The value of a position is equal to the value of the position the current player will choose from said position.
        Ohh know I know this position is good because it will allow X to move into a position that is good.
        <br>
        <br>
        <br>
    </p>


</main>
