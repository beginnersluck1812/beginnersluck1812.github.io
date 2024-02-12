<script>
 
</script>


<main>


   <h2>Searching: Game Theory</h2>

   <p>
        In this section of the tutorial I want to talk about <strong>why</strong> we need to search and look ahead in the game
        to find the best move. 
        <br>
        <br>
        To play board games like Chess, Connect Four or Checkers you need to look ahead in the game if you want to be succesful. And its something
        that we all do intuitively and instinctively without giving it a second thought. But have you ever sat down and wondered, why is this case?
        <br>
        <br>
        I really mean it. Take a sec and wonder why.
        <br>
        <br>
        Thats what I want to talk about: <strong>The Why.</strong> Now the explanation of the why is going to wrinkle your brain,
        its going to apply a buttload of logic, game theory and complexity to something that you take for granted, but trust me, its awesome!
    </p>

        <h2>Back to Basics</h2>
    <p>
        Lets look back at the goal of our AI again, which is to find the best move in our current position.

        <br>
        <br>
        Now, how do we define what the best move is? Well the value isn't really in the move itself, its in the position we end up in. A 
        move is considered a good one if it puts you in a good position. 
        <br>
        <br>
        When you make the winning move in a game, its good because it put you in a position in which you won the game. Similary, a move would be
        bad if it put you in position where you lost the game. The value of a move is the direct reflection of the value of the position it puts you in.
        <br>
        <br>
        If you <strong>made the best move</strong> it means <strong>you chose the best position</strong> 
        <br>
        <br>
        This leads us to our <strong>first rule:</strong> The best move is the one that puts you in the best position.
        <br>
        <br>
        So if we want to fulfill our goal of finding the best move to play. It means that we actually need to find the best position 
        that we can play into.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D195%253A2%26mode%3Ddesign%26t%3DbgWGkc4fw4RuXk7C-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>

        <br>
        <br>
        So, now our goal becomes <strong>looking at all the position we can move into</strong>, and than <strong>picking the one with 
        the best score/value</strong>.
        <br>
        <br>

        <h2>Our New Problem</h2>
        <p>
            Look at the positions that we can move into, do you know the value of each position?
            
            But this leads into another problem, how do we find or figure out the score/value of a position?
            <br>
            <br>
            First off, lets talk about what makes a position good. 

        </p>




</main>

<style>
</style>
