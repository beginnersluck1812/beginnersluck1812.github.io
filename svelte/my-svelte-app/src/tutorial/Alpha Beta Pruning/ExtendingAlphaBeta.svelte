<script>

</script>

<main>
    <h2>Current Implementation of Alpha-Beta Pruning</h2>
    <p>
        Now currently, alpha <strong>exclusively represents</strong> the score of a position's best move. 
        <br>
        <br>
        This means that for each position we begin searching, alpha is always -∞ becuase we haven't found the scores of any its moves.
        <br>
        <br>
        If that position has children, it then gives its best score to those chlidren (beta which is just the parent's -alpha), this acts as an upper bound and indicates the max score the child can get before the parent won't pick them
        <br>
        <br>
        In this way we can say that alpha-beta pruning currently operates exclusively between a parent and their child.
        <br>
        <br>
        A parent takes their best score (alpha), and gives it to their children as beta (-alpha). If a child's score exceeds beta, the child stops searching.
        <br>
        <br>
        Everything has to do in the <strong>scope of the parent and their child</strong>.
    </p>
    <h2>An Example</h2>
    <p>
        Take a look at this example.... 
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D413%253A2%26mode%3Ddesign%26t%3D1oTIAC8EZ7e5nshF-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        Now let's re-look at this search tree, but this time more in depth.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D424%253A927%26mode%3Ddesign%26t%3D1oTIAC8EZ7e5nshF-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
    </p>
    <h2>A New Alpha and Beta</h2> 
    <p>
        Now beforehand we were only checking if the <strong>parent</strong> wasn't going to pick a position.
        <br>
        <br>
        But to make alpha-beta pruning more effective we can actually check if <strong>any position above</strong> is going to pick the position.
        <br>
        <br>
        If there is a position above that isn't going to pick it, we want to stop searching becuase it's a waste of time (since it is going to get picked).
        <br>
        <br>
        <strong>Basically we only care about searching a position if we know it is going to be picked by every position above it</strong>.
        <br>
        <br>
        Now another way of saying this, is that we only want to search a position if we know that X is going to pick and that O is going to pick it.
        <br>
        <br>
        As X searches positions below it, it only cares about getting scores that are better than its best score. 
        <br>
        <br>
        As O searches positions below it, it only cares about getting scores that are better than its best score.
        <br>
        <br>
        Beforehand it was just parent’s caring if their going to get returned a less score, now its the players too.
        <br>
        <br>
        If X realizes that any position is going to return a worse score, it doesn't want to continue searching it.
        <br>
        <br>
        If O realizes that any position is going to return a worse score, it doesn't want to continue searching it.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D427%253A1788%26mode%3Ddesign%26t%3D8IrNhusCWKgNsDj3-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        Now in order to accomplish our above goals, we need two variables that can represent the best scores for each player.
        <br>
        <br>
        These are alpha and beta!
        <br>
        <br>
        Basically we are going to redefine alpha and beta to now store this information....
        <br>
        <br>
        Instead of storing a <strong>position's</strong> best score, alpha is going to store the <strong>current player's (X or O) best score</strong>. 
        <br>
        <br>
        Instead of storing the <strong>parent's</strong> best score, beta is going to store the <strong>current player's opponent's best score</strong>
        <br>
        <br>
        So if its X's turn in the current position, alpha refers to X's best score and beta refers to O's best score (all from X's point of view).
        <br>
        <br>
        If its O's turn in the current position, alpha refers to O's best score, and beta refers to X's best score (all from O's point of view).
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DL1zyIYtrulY8TcxE-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        So to recap.... 
        <br>
        <br>
        <strong>alpha</strong>: best score that the current player has. 
        <strong>beta</strong>: best score that the opponenet player has. 
        <br>
        <br>
    </p>

    <h2>Passing Down Alpha and Beta</h2>
    <p>
        Lets now talk about how we are going to pass down these variables.
        <br>
        <br>
        Passing down alpha and beta through the search tree is actually quite easy.
        <br>
        <br>
        Let's say we have a position where the current turn is X and alpha is 5 and beta is 7.
        <br>
        <br>
        This means alpha represents X's best score, and beta represents O's best score (all from X's perspective).
        <br>
        <br>
        Now the child position (the position were going to pass alpha and beta too) is going to be the opponent, in this case O.
        <br>
        <br>
        So for the child position alpha is going to represent O's best score and beta is going to represent X's best score (all from O's perspective).
        <br>
        <br>
        So the child's alpha needs to be O's best score, and the child's beta needs to be X's best score.
        <br>
        <br>
        Well what is is O's best score at the parent position, beta. What is X's best score at the parent position, alpha.
        <br>
        <br>
        But we need to get alpha and beta in terms of the opponent, so we need to take the negative of alpha and beta.
        <br>
        <br>
        <strong>child's alpha</strong>: parent's -beta 
        <br>
        <strong>child's beta</strong>: parent's -alpha
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D440%253A2%26mode%3Ddesign%26t%3DX9alzV59Pu4dylv0-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        So, becuase every child position is the opponent of the parent, the alpha and beta of the parent and child are going to be switched as well as the negative of each other.
        <br>
        <br>
    </p>
    <h2>Alpha Beta and Stopping the Search</h2>
    <p>
        Now if a position is going to return a worse score then a player's best move, they want to stop searching it.
        <br>
        <br>
        Basically were going to keep searching a position as long as it has the possibility to return better moves for <strong>both players</strong>. 
        <br>
        <br>
        If even one of the player's realizes its going to return a worse score, we stop searching it, since we know that it will never be picked.
        <br>
        <br>
        Now the first example of this is if alpha becomes greater than or equal to beta.
        <br>
        <br>
        If this happens it means that position were searching (let's say X) got a move score better than its player's (X's) best move score and increased alpha. 
        <br>
        <br>
        Let's say X's best score was 5, and now its 7.
        <br>
        <br>
        Becuase alpha increased it means that X likes this position becuase its going to return a better move than it currently has.
        <br>
        <br>
        Now if alpha increased so much that it exceeds beta, O doesn't want to keep searching the position, becuase it knows once it takes the negative of it, it's going to be a score worse than its current best score.
        <br>
        <br>
        Basically if the best score of a player gets higher than the best score of the opponent, the opponent is never going to pick the position, becuase once they take the negative of the score, its going to be worse than their best score.
        <br>
        <br>
        If alpha ≥ beta, it means that the opponent is never going to pick the position, becuase once they take the negative the score will be worse than their best move.
    </p>
</main>