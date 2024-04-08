
<main>
    <h2>Alpha's Relationship To A Position's Score</h2>
    <p>
        Next, we need to come up with some sort of relationship between alpha and beta, that can tell us when to stop searching.
        <br>
        <br>
        To do this, lets look at what happens when a position's <strong>alpha</strong> is greater than its <strong>beta</strong>. 
        <br>
        <br>
        Becuase alpha represents the score of a position's best move, it is the score that we will return to the parent.
        <br>
        <br>
        Now as alpha gets <strong>larger and larger</strong> the parent’s evaluation of that position is going to get <strong>lower and lower</strong>. 
        <br>
        <br>
        This is becuase the parent always takes the negative of the returned score (which is alpha).
        <br>
        <br>
        So if position's alpha increased like this: 1,3,5,6 the parent's evaluation is going to decrease like this: -1,-3,-5,-6.
        <br>
        <br>
        <strong>Basically the higher alpha gets, the worse it is for the parent</strong>.
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D400%253A2%26mode%3Ddesign%26t%3Dh9OB1xrlgprTBKQl-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
    </p>
        <h2>Alpha, Beta and Stopping</h2>
        <p>
       
        Now their has to be some point in which a child's alpha gets so high (and resultingly the parent's evaluation so low), that <strong>the parent will never pick the child</strong>.
        <br>
        <br>
        This point occurs when alpha is <strong>greater than</strong> beta.
        <br>
        <br>
        Now if this happens (alpha > beta) it essentially means that the child position (the parent's opponent) is guaranteed to return a score that it <strong>believes to be better than its parent's</strong>.
        <br>
        <br>
        But becuase the parent takes the negative of the returned score, that score is actually <strong>going to be worse</strong> than the parent's best score.
        <br>
        <br>
        It all goes back to the idea of zero sum and taking the negative of a score returned by an opponent.
        <br>
        <br>
        If your opponent tells you a position is good, you view it as bad, becuase you know it helps your opponent.
        <br>
        <br>
        If your opponent tells you that position A is <strong>better</strong> than position B, you in turn value position A as <strong>worse</strong> than position B.
        <br>
        <br>
        That's whats happening here. The child is saying "Hey, I am better than your best position". 
        <br>
        <br>
        But because what is good for the child <strong>is bad</strong> for the parent (since their opponents), a child saying they're better, actually means they're worse.
        <br>
        <br>
        Basically if a child's alpha is greater than beta, it means that the child thinks its better, but becuase the parent takes the negative, the parent actually finds it worse.
        <br>
        <br>
        So if alpha > beta, the child position knows that it has become too good and therefore too bad to the parent. And it should stop searching becuase it know its parent will never pick them.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D402%253A685%26mode%3Ddesign%26t%3Dh9OB1xrlgprTBKQl-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        A child position <strong>should actually stop searching</strong> when alpha is greater than <strong>or equal</strong> to beta. Not just when its greater than beta.
        <br>
        <br>
        This is becuase if alpha = beta, it means that the lowest score of the child position <strong>could be equal</strong> to the score of the parent's best position.
        <br>
        <br>
        But why would the parent want to keep searching a position, that at <strong>the minimum</strong> is going to return the same score as its best. If it did return the same score, the parent wouldn't care, becuase it already has a position with that good of a score.
        <br>
        <br>
        Basically, a parent position only cares if the score <strong>is better</strong>, if the score is the same its no use to the parent.
        <br>
        <br>
        So we also stop searching when alpha = beta, becuase it provides no benefit to the parent to keep searching.
        <br>
        <br>
    </p>
        <h2>Another Way of Looking at Alpha ≥ Beta</h2>
        <p>
            This is going to be a quick paragraph talking about/proving that alpha ≥ beta, is actually when we stop searching.
            <br>
            <br>
            Remember our original definition of alpha beta pruning?
            <br>
            <br>
            We said... a parent <strong>should stop searching</strong> one of its child positions, once it knows its <strong>going to return a worse or the same score</strong>
            <br>
            <br>
            Now since that above statement is from the point of view of the parent, it means that if we want to apply the same logic at the child position level, we need to get the scores of alpha and beta in terms of how the parent views them. 
            <br>
            <br>
            Because the child is the opponent, to get the scores to the parent’s perspective we simply just need to take the negative of alpha and beta.
            <br>
            <br>
            Looking at the statement again, we get that if the score a child's position is going to return (-alpha) is less than the parent’s best score (-beta) we should stop searching. 
            <br>
            <br>
            So we get the expression -alpha ≤ -beta.
            <br>
            <br>
            Now here’s the cool part. What if we take the negative of the whole thing to get it back into the child position’s POV. 
            <br>
            <br>
            We’d get - ( -alpha ≤ -beta) = alpha ≥ beta.
            <br>
            <br>
            Wait alpha ≥ beta! That's what we got before!
        </p>
        <h2>Looking at Beta a Different Way</h2>
        <p>
            Now when searching, the score of a child position can <strong>only get so high</strong>, before taking the negative of it gets the parent a score so low, that they won't ever consider picking it.
            <br>
            <br>
            That threshold is when alpha ≥ beta.
            <br>
            <br>
            In thay way it can than be said, that beta acts as an indicator of <strong>of the maximum score a child can get</strong>, before their parent <strong>won't consider them</strong>.
            <br>
            <br>
            If a child position's alpha is <strong>less</strong> than <strong>beta</strong> the parent <strong>is</strong> happy, becuase it means it will get a <strong>better</strong> score.
            <br>
            <br>
            If a child position's alpha is <strong>greater than or equal to beta</strong>, the parent <strong>isn't</strong> happy, becuase it means it will get a <strong>worse</strong> score.
            <br>
            <br>
            Beta is considered an upper bound of searching a position, becuase it indicates the max score a child can get before they should stop the search.
            <br>
            <br>
            We can search as long as alpha is between (-∞,beta). Beta indicates the max a child position can go, hence <strong>upper bound</strong>.
            <br>
            <br>
            This is what I like to think of beta as...
            <br>
            <br>
            Not the parent giving the child the score of its best position, but the parent showing the child the maximum value it can get before they won't pick them.
            <br>
            <br>
            I like this definition better becuase it shows the actual purpose of beta in alpha beta pruning. 
            <br>
            <br>
            <strong>The purpose of beta in the alpha-beta pruning alogorithm it to act as an indicator of the max score a position can get before they have to stop searching.</strong>
            <br>
            <br>
            <h2>What Happens When We Stop Searching</h2>
            <p>
                Now when we actually decide to stop searching a position (alpha ≥ beta) what actually happens?
                <br>
                <br>
                Well, if that occurs we are going to break out of the search and return our current alpha.
                <br>
                <br>
                <br>
                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D408%253A2%26mode%3Ddesign%26t%3DT7wi6gbhyA6WwPM9-1" allowfullscreen></iframe>
                <br>
                <br>
                <br>
                Now heres the thing, whenever a position has to broken (pruned) due to alpha beta pruning. It doesn't <strong>return the actual score of the cut position</strong> it returns a <strong>range of possible scores</strong>. 
                <br>
                <br>
                In the above example X doesn't know the <strong>actual score</strong> of its second child position, but it knows that's <strong>going to be less than or equal -4</strong>. And that's enough information to let the parent know that they won't ever pick it.
                <br>
                <br>
                Becuase of this scores in alpha-beta pruning can get a little weird. 
                <br>
                <br>
                Basically we only care about the actual score of a position <strong>if its better</strong> than the parent's best position.
                <br>
                <br>
                If we know a position is going to have a <strong>worse</strong> score, we don't care <strong>how worse</strong> it is. Becuase the parent is never going to select it, and propogate it up the tree.
                <br>
                <br>
                <br>
                Now in the next section we are going to be talking about the next part of alpha beta pruning. Which concerns making alpha global.
            </p>
           
</main>

