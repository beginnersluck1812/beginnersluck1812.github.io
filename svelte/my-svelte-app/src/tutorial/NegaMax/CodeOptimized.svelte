<script>
     import Prism from 'prismjs';
    import 'prismjs/components/prism-csharp'; // Import the C# language definition
    import SvelteMarkdown from 'svelte-markdown'
    let language = "csharp";
</script>



<main>
    <h2>There's an Issue with Our Code</h2>
    <p>
        A couple sections ago we talked and wrote the code for an implementation of the NegaMax algorithm.
        <br>
        <br>
        Now there's nothing inherently wrong with the code, it runs NegaMax perfectly, but after doing some testing I realized that 
        its quite slow.
        <br>
        <br>
        In this section we are going to talk about why our code is slow, the game theory and math behind its slowness, and of course how to fix it.
        <br>
        <br>
    </p>

    <h2>How I Know our Code is Slow</h2>
    <p>
        Now, you might be wondering how I figured out that our NegaMax code is slow. 
        <br>
        <br>
        Well long story short, I actually had written a NegaMax function for my Othello AI before writing this tutorial.
        <br>
        <br>
        The one I had written for my own AI was unique in the sense that it didn't really follow the typical structure you would see for a NegaMax function.
        <br>
        <br>
        I switched it up becuase I thought it would be easier to understand and implement.
        <br>
        <br>
        Anyway, when I started writing this tutorial and hammering out all the game theory, I realized that I should just stick 
        with the conventional way of writing the NegaMax algorithm. 
        <br>
        <br>
        This is becuase it nicely accuentates and compliments the logic and game theory that's at play.
        <br>
        <br>
        Becuase I switched back to the conventional way for the tutorial, I did the same with my AI.
        <br>
        <br>
        Now in order to make sure I didn't screw anything up, I ran the new NegaMax code against the old NegaMax code. 
        <br>
        <br>
        And one thing stood out. The new NegaMax code (the one in this tutorial) is <strong>super slow</strong>. 
    </p>

    <h2>Stop Depth and Heuristicly Scored Positions</h2>
    <p>
        Now to understand why our NegaMax code is <strong>so much</strong> slower than my old NegaMax code, we first need 
        to look at the <strong>number of positions we search</strong> vs. <strong>the number of heuristic positions we score</strong>. 
        <br>
        <br>
        Look at this photo below, which is a screenshot of a summary of an Othello NegaMax search to a depth of 6.
        <br>
        <br>
        <img src="../assets/NegaMaxSummary.png" alt="NegaMax Summary">
        <br>
        <br>
        The positions searched metric entails positions that we <strong>had to search</strong> (ie. weren't terminal or at our stop depth).
        <br>
        <br>
        Scored heuristic positions entails the number of positions that were at our stop depth and that we scored using our heuristic function.
        <br>
        <br>
        Now, look at the numbers for each. Do you notice anything.
        <br>
        <br>
        The number of heuristic scored positions (positions at our stop depth)  is <strong>much, much, much</strong> greater than the total number of positions we actually search.
        <br>
        <br>
        This means that the the total positions we encountered in depths from 1-5, is a lot less than the positions we encountered <strong>just</strong> at the depth of 6 (our stop depth).
        <br>
        <br>
        This makes sense, becuase as the depth increases, the amount of positions we come across increases exponentially at each depth.
        <br>
        <br>
        Imagine we were playing a game in which for every position there were 3 available moves.
        <br>
        <br>
        The amount of positions we would encounter at each depth would be as follows:
        <br>
        <br>
        Depth 0: 0 Positions Encountered
        <br>
        Depth 1: 3 Positions Encountered
        <br>
        Depth 2: 9 Positions Encountered
        <br>
        Depth 3: 27 Positions Encountered
        <br>
        Depth 4: 81 Positions Encountered
        <br>
        Depth 5: 243 Positions Encountered
        <br>
        Depth 5: 729 Positions Encountered
        <br>
        <br>
        Although most combinatorial games don't have positions where there are always the same number of moves, the principle still applies.
        <br>
        <br>
        As you <strong>increase depth</strong> the number of positions you end up encountering is going to be a lot greater than the positions you end up encountering at <strong>previous depths</strong>. 
        <br>
        <br>
        This means that most of the time, <strong>the majority of positions we are going to see are those on our stop depth</strong>.
        </p>

        <h2>Looking at My Old (Fast) Code</h2>
            <p>
                Now to understand why a majority of positions being at our stop depth impacts our algorithm's speed, we need to look at my older and faster code.
                <br>
                <br>
                Older and Faster Code:
                <br>
                <br>
            </p>
                <div class="code">
                    {@html Prism.highlight(`
                    public static int NegaMax(Position position, int depth) {
                        //were actually searching the position
                        this.searchedPositions++;

                        int bestChildPositionScore = int.MinValue; 
                    
                        foreach (int move in position.findAvailableMoves() ) { //'move' just represents a location on the board
                            
                            Position childPosition = position.playMove( move ); //returns a new 'Position' object with the played move
                            //note that the current turn in 'childPosition' is the opponent of the player in 'position'
                    
                            int childPositionScore - 10000;

                            if ( childPosition.IsTerminal() ) { //dont need to search cause we know the value
                                this.encounteredTermPositions++;
                                childPositionScore = - childPosition.GetTerminalScore(); //taking - of returned score, becuase score is from opps pov

                            } else if ( depth + 1 == stopDepth) { //reached our search depth, get heuristic score
                                this.scoredHeuristicPositions++;
                                childPositionScore = - childPosition.GetTerminalScore(); //taking - of returned score, becuase score is from opps pov

                            } else { //have to continue NegaMax search
                                childPositionScore = -NegaMax(childPosition, depth+1); //when we call NegaMax we increase the depth
                            }
                    

                            bestChildPositionScore = Math.Max(bestChildPositionScore, childPositionScore);
                        }
                    
                        return bestChildPositionScore;
                    }      
                            
                            `, Prism.languages[language])}
                    </div>
                    <br>
                    <br>
                    Okay, so whats happening here. Basically all I did was take the part in our NegaMax function where we check if
                    the position is terminal or on our stop depth and moved into our for loop where we iterate over the child positions.
                    <br>
                    <br>
                    <br>
                    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D221%253A2%26mode%3Ddesign%26t%3DPKF1MUEqMI9diPiV-1" allowfullscreen></iframe>
                    <br>
                    <br>
                    <br>
                    So basically instead of calling NegaMax every single time on a child position, <strong>we only call NegaMax</strong> if we know the <strong>child position isn't terminal</strong> and its <strong>not on our stop depth</strong>.
                    <br>
                    <br>
                    *Note that when we check if the child position is at our stop depth we use <code>depth + 1</code>, this is becuase <code>depth</code> refers to the depth of <code>currPosition</code>, so the depth of a child of <code>currPosition</code>
                    would be <code>depth + 1</code>.
                    <br>
                    <br>
                    Now the issue that I originally had with this code is that it reduces the types of positions you can NegaMax on.
                    <br>
                    <br>
                    Rememer that at its core the purpose of the NegaMax function is to return the score of a position.
                    <br>
                    <br>
                    In the previous code in this tutorial our NegaMax function could take in terminal and non-terminal positions, as well as positions on our stop depth. <strong>It could take in any position</strong>
                    <br>
                    <br>
                    This NegaMax function on the other hand can only take in non-terminal positions that aren't on our stop depth.
                    <br>
                    <br>
                    Look at our function. There are no checks to see if <code>currPosition</code> is terminal or at our stop depth. 
                    <p>

            <h2>Why Our Code is Slow</h2>
            <p>
                Now when I first realized the difference in speed between these two functions I was super confused and perplexed, <strong>becuause they're
                essentially identical</strong>.
                <br>
                <br>
                The functions are composed of the same exact code and will run in the same exact way. All we did was move two conditional checks inside a for loop. We didn't add or change any code, we just moved it.
                <br>
                <br>
                The code that we wrote calls NegaMax on every child position no matter what.
                <br>
                <br>
                But my old (fast) code will check child positions to see if they are terminal or at our stop depth before calling NegaMax.
                <br>
                <br>
                Knowing this information, lets look at the results of us searching to a depth of 6 again, but calculate how many times each function calls NegaMax.
                <br>
                <br>
                <img src="../assets/NegaMaxSummary.png" alt="NegaMax Summary">
                <br>
                <br>
                We encountered 13,000 regular position and 52,350 heuristic scored positions. This means that we called NegaMax a total 66,000 times.
                <br>
                <br>
                But in our old code we only called NegaMax on <strong>13,000</strong> positions.
                <br>
                <br>
                This is becuase we do all the stop depth handling before we call NegaMax, which ends up reducing the amount of NegaMax calls we have to make <strong>by a lot</strong>.
                <br>
                <br>
                Now, I want to re-iterate that both functions are composed of the same exact code and the same code is triggered for both functions, 
                but one of them ( the fast one ) reduces the dependency of having to call NegaMax for every single position we encounter.
                <br>
                <br>
                Function calls are expensive and they take a up a lot of time and resources to do so. By creating a NegaMax function that calls a function less, we save time.
                <br>
                <br>
                And becuase the positions in which we don't end up having to call a function on ( positions at our stop depth), happens to be the positions we encounter the most, it saves a lot of time.
                <br>
                <br>
                So, I would recommend changing your own NegaMax code to something similar that I have above, which reduces your NegaMax calls.
            </p>



</main>



<svelte:head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css" rel="stylesheet" />
</svelte:head>

<style>
  .code {
    white-space: pre-wrap;
  }

</style>