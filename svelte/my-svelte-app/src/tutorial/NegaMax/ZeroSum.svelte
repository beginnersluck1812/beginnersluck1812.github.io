<main>
    
  <h2>Zero Sum</h2>
  <p>
    What we just talked about is the concept of a <strong>zero sum game</strong>.
    <br>
    <br>
    The gains that one player makes, is equivalent to the losses that the other player incures.
    <br>
    <br>
    If X scores a position as 5, O scores that position as -5.
    <br>
    <br>
    If O scores a position as -4, X scores the position as 4.
    <br>
    <br>
    If you add the each player's score together the sum will always be <strong>zero</strong>. 
    <br>
    <br>
    5 + (-5) = 0
    <br>
    -4 + 4 = 0
    <br>
    <br>
    Hence, a <strong>zero sum game</strong>
  </p>

  <h2>Why Zero Sum Is Awesome</h2>
    <p>
        Zero sum is aweseome because it means we are able to solve our dilemma.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D2265%253A959%26mode%3Ddesign%26t%3DisRxsYhaGTNfM6HS-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        Because the games that we are playing are zero sum can say that...
        <br>
        X's score = -O's score
        <br>
        O's score = -X's score
        <br>
        <br>
        Using this information lets now <strong>correctly</strong> pick the best position to move into.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D2304%253A1032%26mode%3Ddesign%26t%3DWLEfRtUwbf1Dd7Wd-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
    </p>
      <h2>Recap</h2>
      <p>
        Our goal is to find the best move in any given position.
        <br>
        <br>
        This means we need to find the best position that we can move into.
        <br>
        <br>
        We use scores in order to objectify the value of a position to the current player.
        <br>
        <br>
        When a position is terminal the score is equal to the outcome of the game.
        <br>
        <br>
        When the current player goes to pick the best position to move into, all the scores are from the opponent's perspective.
        <br>
        <br>
        To get the scores into the current player's perspective, we take the <strong>negative</strong> of the opponent's scores.
        <br>
        <br>
        After the resultant positions scores are in the perspective of the current player, the current player can than accurately pick the best move.
        <br>
        <br>
        In the previous section we talked about scoring <strong>terminal positions</strong> in the next section, we are going to figure out how to score <strong>non-terminal</strong> positions.
      </p>
</main>