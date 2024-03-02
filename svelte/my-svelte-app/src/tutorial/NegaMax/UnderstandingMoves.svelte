<script></script>


<main>
    <h2>Back to Basics</h2>
    <p>
       Lets look back at the goal of our AI again, which is to find the best move in our current position.

       <br>
       <br>
       Now, how do we define what the best move is? Well the value isn't really in the move itself, its in the position we end up in. 
       <br>
       <br>
        <strong>A move is considered a good one if it puts you in a good position</strong>. 
       <br>
       <br>
       When you make the winning move in a game, its good because it put you in a position in which you won the game. Similary, a move would be
       bad if it put you in position where you lose the game. The value of a move is the direct reflection of the value of the position it puts you in.
       <br>
       <br>
       If you <strong>made the best move</strong> it means <strong>you chose the best position</strong>. 
       <br>
       <br>
       This leads us to our <strong>first realization:</strong> The best move is the one that puts you in the best position.
       <br>
       <br>
       So if we want to fulfill our goal of finding the best move to play. It means that we actually need to find the best position 
       that we can play into.
       <br>
       <br>
       <br>
       <iframe title="We need to find the best position to move into" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D195%253A2%26mode%3Ddesign%26t%3DbgWGkc4fw4RuXk7C-1" allowfullscreen></iframe>
       <br>
       <br>
       <br>
       This comes with a new challenge though. How do we define or differentiate which position is the best one?
       <br>
       <br>
       I don't know about you, but looking at the above positions I have no idea what is the worst position, the best position, the second best position etc.
       <br>
       <br>
       We need some sort of objective metric that we can use in order to identify the value of a position.
       <br>
       <br>
       We can do this with <strong>scores</strong>. Each position is assigned a score that reflects the value of that position to the current player.
       <br>
       <br>
       Now, when we look at the above example with each position having a score, it becomes super easy to tell which positions are the good and bad ones.
       <br>
       <br>
       <br>
       <iframe title="Best Move is the Position with the Best Score" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D1122%253A211%26mode%3Ddesign%26t%3DUMk2AGafibVefQZf-1" allowfullscreen></iframe> 
       <br>
       <br>
       <br>
       Our goal is to pick the best move, which is the move that puts us in the best position.
       <br>
       <br>
       When each position has a score it becomes super easy to tell which is the best position, becuase its the one that has the best score.
       <br>
       <br>
       This leads us to our <strong>second realization</strong>: The best position is the one which has the best score.
       <br>
       <br>        
       <br>
       <iframe title="Pick Move that Leads to Best Position" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D278%253A2%26mode%3Ddesign%26t%3DjHNPNRgHqwkKZR1M-1" allowfullscreen></iframe>
   </p>

   <h2>Our New Problem</h2>
   <p>
        This whole thing about the best position having the best score is all fine and dandy, but how do we figure out the scores of positions.
       <br>
       <br>
       <iframe title="How do we find these scores" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D239%253A172%26mode%3Ddesign%26t%3DUMk2AGafibVefQZf-1" allowfullscreen></iframe>
       <br>
       <br>
       In the next section we will be discussing exactly that. How we find the scores of those positions.
   </p>
</main>

<style></style>
