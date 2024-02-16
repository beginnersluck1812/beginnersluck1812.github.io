<script>

</script>


<main>
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
            bad if it put you in position where you lose the game. The value of a move is the direct reflection of the value of the position it puts you in.
            <br>
            <br>
            If you <strong>made the best move</strong> it means <strong>you chose the best position</strong>. 
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
            So, now our goal becomes <strong>looking at all the positions we can move into</strong>, and than <strong>picking the one with 
            the best score/value</strong>
            <br>
            <br>        
            <br>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D239%253A172%26mode%3Ddesign%26t%3DNDmCTAzgEsxm1ilK-1" allowfullscreen></iframe>
            <br>
            <br>        
            <br>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D278%253A2%26mode%3Ddesign%26t%3DjHNPNRgHqwkKZR1M-1" allowfullscreen></iframe>
            <br>
            <br>        
            <br>
            This gives us our <strong>second rule</strong>: The best position is the one with the best score.
        </p>

    <h2>Our New Problem</h2>
        <p>
             However this means <strong>we need to know the numerical value of the positions</strong> in order to <strong>pick the best one</strong>.
            <br>
            <br>
            So, our new problem becomes finding the scores of these positions.
            <br>
            <br>
            <br>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D310%253A2%26mode%3Ddesign%26t%3DmF9d8zauB7a6W15P-1" allowfullscreen></iframe>
        </p>

    <h2>How to Find the Score/Value of a Position</h2>
        <p>
            To answer this question lets first ask what makes a position good?
            <br>
            <br>
            Well, if  a position were to allow you to win the game, that position would certainly be considered a good one.
            <br>
            <br>
            But here's the thing. The position itself isn't necassarily good, its what the position allows you to do in the future that makes it good.

            <br>
            <br>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D319%253A401%26mode%3Ddesign%26t%3DrKoMyykCEoLQ2TfN-1" allowfullscreen></iframe>
            <br>
            <br>
            <br>
            <br>
            The <strong>score</strong> of a position is directly related to the <strong>future oppurtunities</strong> from that position.
            <br>
            <br>
            You can only <strong>determine whether a position is good or bad</strong> once you realize what you can do from that position.
            <br>
            <br>
            If you look at a position and realize that it will end up <strong>losing</strong> you the game in the future. Then that position sucks.
            <br>
            <br>
            If you look at a position and realize that it will end up <strong>winning</strong> you the game in the future. Then that position rocks.
            <br>
            <br>
            We can say that the <strong>score of a position is equal to the future outcome of that position</strong>.
            <br>
            <br>
            <br>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="750" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D698%253A805%26mode%3Ddesign%26t%3DlMyMshUqOiW4hAzb-1" allowfullscreen></iframe>
            <br>
            <br>
            <br>
            This leads us to our <strong>third rule</strong>: The score of a position is equal to the score of the best position we can move into.
            <br>
            <br>
            <br>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="900" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D657%253A2%26mode%3Ddesign%26t%3DlMyMshUqOiW4hAzb-1" allowfullscreen></iframe>
            <br>
            <br>
            <br>
            We now have enough information to determine <strong>why we actually need to search</strong>.
    

           
            <!-- <br>
            <br>
            Think about that.
            <br>
            <br>
            A bomb is only dangerous becuase it will explode in the future.
            Falling off a cliff is only bad becuase you eventually hit the ground. 
            <br>
            <br>
            Imagine someone offered you $100 to mow their lawn. You would get your mower and start mowing their lawn right? Why? Because once
            your finished you'll get $100.
            <br>
            <br>
            The value of starting to mow the lawn is $100, only becuase you know once your finished you'll receive $100 as a reward.
            <br>
            <br>
            If the person offered $200, the value of starting to mow the lawn would now be $200 instead of $100.
            <br>
            <br>
            How much you <strong>value</strong> mowing the lawn <strong>is dependent</strong> on the <strong>value of the reward you'll receive</strong>.
            <br>
            <br>
            If your friend says having your piece in the 3rd row of a given game will allow you to win by 15 points the next turn. Then the value of having
            your piece in the 3rd row is 15 points.  -->



           
        </p>
        




</main>

<style>
</style>
