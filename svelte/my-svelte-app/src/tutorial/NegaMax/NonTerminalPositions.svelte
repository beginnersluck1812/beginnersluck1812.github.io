
<main>
<h2>How We Score Non-Terminal Positions</h2>
<p>
    Remember that <strong>non-terminal</strong> positions are positions in which the game is still being played.
    <br>
    <br>
    The difficutly with scoring non-terminal positions is that we don't know the outcome of the game.
    <br>
    <br>
    We know the immediate value of <strong>terminal</strong> positions becuase we know if the current player has lost or tied the game. 
    <br>
    <br>
    With <strong>non-terminal</strong> positions we don't have this luxury. We can't look at the position and immediately determine its value.
    <br>
    <br>
    <br>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="500" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D1504%253A1357%26mode%3Ddesign%26t%3D8BREjIDfMWth5r5n-1" allowfullscreen></iframe>
    <br>
    <br>
    <br>
    Well, in order to find the scores of these positions we have to look at the scores of future positions.

    <br>
    <br>
    If you look at a position and realize that it will end up <strong>losing</strong> you the game in the future. Then the value of that position is a <strong>loss</strong>.
    <br>
    <br>
    If you look at a position and realize that it will end up <strong>winning</strong> you the game in the future. Then the value of that position is a <strong>win</strong>.
    <br>
    <br>
    <br>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="650" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D1527%253A50%26mode%3Ddesign%26t%3DJHX0D3Ahdk9IpgBo-1" allowfullscreen></iframe>
    <br>
    <br>
    <br>
    Regardless if your X or O in a position. <strong>The current player is always going to try and pick the best move that it can</strong>.
    <br>
    <br>
    A player is  <strong>always going to move</strong> into the <strong>best position</strong> that is available.
    <br>
    <br>
    Lets say for example, you knew the score of the best position you could move into was 5. 
    <br>
    <br>
    This means that being in that current position <strong>you are eventually going to end up</strong> in a position with a score of 5. 
    <br>
    <br>
    What is the value of a position whose outcome is being in a position with a score of 5. Well it would also be 5.
    <br>
    <br>
    <br>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D657%253A2%26mode%3Ddesign%26t%3DJHX0D3Ahdk9IpgBo-1" allowfullscreen></iframe>
    <br>
    <br>
    <br>
    In this way, we can say that the <strong>score of a non-terminal position</strong> is equal to the <strong>score of the best position it can move into</strong>.
    <br>
    <br>
    <br>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="1000" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D1743%253A2%26mode%3Ddesign%26t%3DWLEfRtUwbf1Dd7Wd-1" allowfullscreen></iframe>
    <br>
    <br>
    <br>
    Now that we know how to find the scores of both <strong>terminal</strong> and <strong>non-terminal</strong> positions we are finally able
    to find the best move in any given position. 
    <br>
    <br>
    And in the next section we'll finally be connecting all that we have learned to the <strong>NegaMax</strong> algorithm
    <br>
</main>