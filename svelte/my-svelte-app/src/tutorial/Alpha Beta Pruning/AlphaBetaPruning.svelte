<script>

</script>

<main>
    <h2>An Introduction to Alpha Beta Pruning</h2>
    <p>
        In this section we are going to be talking about our first improvement to the NegaMax algorithm, Alpha Beta Pruning!
        <br>
        <br>
        Now currently, in order to find the best move from any position, we have to search through every possible future move left in the game.
        <br>
        <br>
        This is a <strong>lot</strong> of moves and a <strong>lot</strong> of positions. 
        <br>
        <br>
        Now, the additions and buffs to the NegaMax algorithm are going to be techniques that allow us to reduce the number of moves we have to search, which increases our AI's speed and efficiencey.
        <br>
        <br>
        That's the primary goal from here on out: <strong>reduce the number of positions we have to search</strong> while mantaining the <strong>same level of accuracy</strong>.
        <br>
        <br>
        An example of one of these techniques is called Alpha Beta Pruning!
    </p>

    <h2>A Quick Example</h2>
    <p>
        Let's say we had a situation like this in our search:
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="650" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D252%253A3%26mode%3Ddesign%26t%3D3vZhwvxCzhfluXTN-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        Looking at the search tree, what is the lowest score that O can get?
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="900" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D252%253A1035%26mode%3Ddesign%26t%3DBGZvvzJARKIMVzXW-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        Okay, right now we know that the score of that O position is ≥2. But lets find out what that score of that position is to X.
        <br>
        <br>
        To figure that out we need to take the negative of O's score which is ≥2. So -(≥2) = ≤-2.
        <br>
        <br>
        Basically that means X knows the score of that O position is going to be -2 or lower.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D261%253A15%26mode%3Ddesign%26t%3DBGZvvzJARKIMVzXW-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        So right now X's best position has a score of 7. And second position that it is is searching, is <strong>guaranteed</strong> to return a score of -2 or lower.
        <br>
        <br>
        So why should X keep searching that second position, if it knows its score <strong>will be worse</strong> than its best score.
        <br>
        <br>
        It shouldn't. If X knows a position is going to return a score worse than its current best score, searching it is a waste of time, becuase X will never end up picking it.
        <br>
        <br>
        This is what the concept of <strong>Alpha Beta Pruning</strong> is. 
        <br>
        <br>
        The current player <strong>should only continue searching</strong> one its child positions, if it knows that the <strong>position has the possibility of returning a score better than the current best score</strong>.
        <br>
        <br>
        Or, the current player <strong>should stop searching (or prune)</strong> one of its child positions, once it knows its <strong>going to return a worse score</strong>.
        <br>
        <br>
        So the "pruning" part of alpha-beta pruning feeds into the idea of search trees. Whenever a parent realizes that their child position is going to return a worse score, the parent should <strong>prune that branch</strong>.
        Now, in the next module were going to talk about how we can actually accomplish these goals listed above.
        <br>
        <br>
    </p>
</main>