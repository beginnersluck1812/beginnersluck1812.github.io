<script>
    import Prism from 'prismjs';
    import 'prismjs/components/prism-csharp'; // Import the C# language definition
    import SvelteMarkdown from 'svelte-markdown'

    let language = "csharp";
    const functionDecleration = `
    public static int NegaMax(Position currPosition) {

    }
`

   const functionWithTerminal = `
public static int NegaMax(Position currPosition) {

    if ( currPosition.isTerminal() ) { 
        return currPosition.getTerminalScore(); 
    }
}  

//a possible example of the get terminal score function
public int getTerminalScore() {

    if ( currPosition.lostGame() ) { return -(this.movesLeftInGame() + 1); } //more moves left in the game, the worse the score

    if ( currPosition.isTie() ) { return 0; } //return 0 cuz its a tie

}
   `

   const termAndNonTerm = `
public static int NegaMax(Position currPosition) {

    if ( currPosition.isTerminal() ) {
        return currPosition.getTerminalScore(); 
    }

    int bestChildPositionScore = int.MinValue; 

    foreach (Position childPosition in currPosition.GetChildPositions() ) { //'move' just represents a location on the board
        Position childPosition = currPosition.playMove( move ); //returns a new 'Position' object with the played move
        //note that the current turn in 'childPosition' is the opponent of the player in 'position'

        int childPositionScore = -NegaMax(childPosition); //we take the negative, since the score returned is from the opponent

        bestChildPositionScore = Math.Max(bestChildPositionScore, childPositionScore);
    }

    return bestChildPositionScore;
}  
   `

   
</script>



<main>
    <h2>What is NegaMax</h2>
    <p>
       We did it, we finally made it to the code portion of the NegaMax algorithm.
       <br>
       <br>
       But before we hop into the code lets recap our goal, which is to find the best move in any given currPosition.
       <br>
       <br>
       To find the best move, we need to find the score of the best position we can move into.
       <br>
       <br>
       This is where NegaMax comes in, quite simply NegaMax is a function that takes in a position and returns the score of the currPosition.
       <br>
       <br>
       <br>
       <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D64%253A828%26mode%3Ddesign%26t%3DmQnyJiSuNlK7mJ4M-1" allowfullscreen></iframe>
       <br>
       <br>
       <br>
    </p>

    <h2>Writing the Code</h2>
    <p>
        Okay, lets start of by declaring our function.
    </p>
        <div class="code">
            {@html Prism.highlight(functionDecleration, Prism.languages[language])}
        </div>
    <p>
        So we have our function <code>NegaMax</code> that takes in a <code>Position</code> object. Cool (note that <code>Position</code> just is class... for well a position)
        <br>
        <br>
        Now the function's goal is to score whatever position that is given to it. So let's look at the two types of positions that can come in. <strong>Terminal</strong> and <strong>Non-Terminal</strong> positions. 
        <br>
        <br>
        Scoring <strong>terminal</strong> positions are easy, we just give it the score we decide to assign to a loss or a tie.
        <br>
        <br>
        So, now our function looks like this...
        <br>
        <br>
    </p>
        <div class="code">
            {@html Prism.highlight(functionWithTerminal, Prism.languages[language])}
        </div>
     <p>
        Okay, we succesfully completed scoring <strong>terminal</strong> positions, so now lets score the more complicated <strong>non-terminal</strong> positions.
        <br>
        <br>
        Recall, that the score of a non-terminal is equal to the score of the best position it can move into.
        <br>
        <br>
        This means we need to...
        <br>
        <br>
        1. Iterate through all the available moves the position has to offer.
        <br>
        2. For each move, play it, and get that resultant currPosition.
        <br>
        3. Find the score of that resultant currPosition.
        <br>
        4. Take the negative of the score (becuase the score returned to us, is from the opponent's perspective).
        <br>
        5. Do this for all positions, keeping track of the best score.
        <br>
        <br>
     </p>
     <div class="code">
        {@html Prism.highlight(termAndNonTerm, Prism.languages[language])}
    </div>

    <p>
        There we go, that's our NegaMax function.
        <br>
        <br>
        With all the stuff thats going on behind the scenes, the NegaMax algorithm is actually super simplistic in its implementation.
        <br>
        <br>
        <strong>The power really comes from the fact that it is a recursive function.</strong>
        <br>
        <br>
        When we call NegaMax on 'childPosition', and 'resultantPostion' isn't terminal were going to have to call NegaMax on <strong>its</strong> resultant positions.
        <br>
        <br>
        And if 'childPositions's resultant positions aren't terminal NegaMax is going to be called again and again and again.
        <br>
        <br>
        If you follow the function notice the only break is if the position is terminal. If the position is terminal we don't ever call NegaMax, and it ends the chain of the recursive search.
        <br>
        <br>
        Now that we have the NegaMax function written, lets use it find the best move of a given currPosition.
        <br>
        <br>
        In order to do this lets make a function called <code>SearchForBestMove</code> that takes in a <code>Position</code>.
        <br>
        <br>
        <div class = "code">
        {@html Prism.highlight(`
        public static int SearchForBestMove( Position currPosition ) {

        }
        `, Prism.languages[language])}
        </div>
        <br>
        <br>
        Recall, that in order to find the best move a position we need to find the scores of all the positions that we can move into, and then pick the move that leads us to the best currPosition.
        <br>
        <br>
        1. Iterate through all the available moves the position has to offer.
        <br>
        2. For each move, play it, and get that resultant currPosition.
        <br>
        3. Find the score of that resultant currPosition.
        <br>
        4. Take the negative of the score (becuase the score returned to us, is from the opponent's perspective).
        <br>
        5. Do this for all positions, keeping track of the best score and the move that goes with that score.
        <br>
        6. Once all positions have been scored, return the move that leads to the best currPosition.
        <br>
        <br>
        <div class = "code">
        {@html Prism.highlight(`

            //returns a location on the board that will lead to the best position
            public static int SearchForBestMove( Position currPosition ) {

                if (currPosition.IsTerminal()) throw new CustomException("Can't search a terminal position"); //cant search for best move if there are no moves to search
                
                int bestChildPositionScore = int.MinValue; 
                int bestMoveLocation = -1;

                //iterating through each child of the current position, remember that each childPosition is a different turn then currPosition
                foreach (Position childPosition in currPosition.GetChildPositions() ) { 

                    int childPositionScore = -NegaMax(childPosition); //we take the negative, since the score returned is from the opponent pov

                    if (positionScore > bestChildPositionScore) {
                        bestMoveLocation = move;
                        bestChildPositionScore = childPositionScore;
                    }
                }

                    return bestMoveLocation;
            }
            `, Prism.languages[language])}
            </div>
        <br>
        <br>
        As you can see the <code>findBestMove</code> function is actually really similar to the <code>NegaMax</code> function, the only difference being that we keep track of the best move and return it, instead of returning the score.

    <h2>Adding a Stop Depth</h2>
    <p>
        Now, the code we wrote for up above is for a pure NegaMax implementation. 
        <br>
        <br>
        It will search through every single position left in the game, find all the terminal positions, and backpropogate the scores up through the search.
        <br>
        <br>
        Now, the issue with this, is that oftentimes searching through all these positions takes a <strong>super, super, super</strong> long time and even can be impossible.
        <br>
        <br>
        This is especially evident in more complex games like Connect Four, Chess, Checkers and Othello. Becuase there are so many possible moves that can be made in each position, the search can cover millions, to billions and even trillions of positions.
        <br>
        <br>
        Searching through positions in a reasonable amount of time is quite literally impossible, so we have to set a stop depth.
        <br>
        <br>
        To understand what a stop depth is we first need to understand what the depth of a search means.
        <br>
        <br>
        When we are at our initial position we are at a depth of 0. When we iterate through the resultant positions we are at a depth of 1. When we iterate through the resultant position's resultant positions we are at a depth of 2.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D64%253A828%26mode%3Ddesign%26t%3D4e719sW4vAWFDSz3-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        Depth is basically just an indicator of how many moves deep we are in the search, so setting a stop depth means that once we hit a certian depth or go a certain number of moves deep in the search, we stop.
        <br>
        <br>
        This leads to another problem, position scores. 
        <br>
        <br>
        Odds are when reach positions that are on the depth of our stop depth they won't be terminal. Meaning we don't know the immediate scores of the positions. 
        <br>
        <br>
        This is a major problem because we need scores in order for NegaMax to work. If we hit our stop depth and say to the positions above us that we don't have any scores, then NegaMax breaks, becuase we don't have anything to return to the positions above us.
        <br>
        <br>
        So what do we do? We use a Heuristic... yay!!!!
    </p>

    <h2>What is a Heuristic</h2>
    <p>
        Now you might be wondering what a heuristic is. A heuristic is a <strong>good enough</strong> solution to a problem, its like an estimate.
        <br>
        <br>
        So in our case, since we don't know the scores of a lot of the positions at our stop depth, were basically going to have to guess.
        <br>
        <br>
        We guess through the use of a static evaluation function. 
        <br>
        <br>
        This function takes in one of these stop depth positions, and using some some sort of technique or strategy it will estimate the value of the currPosition.
        <br>
        <br>
        For example, in Connect Four you could make a static evaluation function that scores positions based on how many pieces the current player has near the center of the board and how many 3s in a row they have.
        <br>
        <br>
        In Chess a common static evaluation function is to assign each piece on the board a score (pawns:1, bishop/knight:3, rooks:5 , queens: 9) and subtract the current player's piece scores by the opponents. In order to get a rough estimation of the positions value.
        <br>
        <br>
        One thing of note is that like terminal and non-terminal positions. The static evaluation function should score the position based on whose turn it is.
        <br>
        <br>
        Another thing is that the scores given by the static evaluation function should be less in magnitude than the scores given by terminal positions.
        <br>
        <br>
        The reason for this being the fact that the scores given by our heurstic function are a lot less accurate.
        <br>
        <br>
        Imagine that you get two scores propogated up to you from the search, the first being a score of 5 from a terminal position, and the second also being a score of 5, but from a <strong>heuristic function</strong>.
        <br>
        <br>
        Which position would you want your AI to pick? They both got the same score, except one came from a terminal evaluation and the other a heuristic evaluation.
        <br>
        <br>
        Well.... you'd want your AI to pick the one with a terminal score. Why? <strong>Becuase you actually know it has a score of 5</strong>. The heuristic function is <strong>only guessing</strong> that its position has a score of 5.
        <br>
        <br>
        Becuase we know that terminal positions are more accurate they should receive higher scores than heuristic scores, becuase we know that heuristic scores are only rough guesses and are innaccurate.
        <br>
        <br>
        When scoring positions, we give more validity and merit to positions that were scored from terminal positions, becuase those scores are perfectly accurate.
        <br>
        <br>
        Let me now pose a new question. Which position would you want your AI to pick? One that got a score of 1 (from a terminal evaluation) or one that got a score of 5 (from a heuristic evaluation).
        <br>
        <br>
        Now, this is tough. If you pick the first position <strong>your guarenteed</strong> that positions value is 1. The second has a better score, but becuase it was heuristically scored it is much more inaccurate. So it could be a lot better or a lot worse.
        <br>
        <br>
        This is something that we'll talk about later in more detail, balancing how much validty we give to heuristically scored positions and positions that are scored terminally.
        <br>
        <br>
    </p>

    <h2>Incorporating a Stop Depth</h2>
    <p>
        Okay, so we talked about stop depths and statically scoring positions at those stop depths, so now lets add them to our function.
        <br>
        <br>
        Before adding them we have to change <code>NegaMax</code> function to take two new parameters: <code>depth</code> and <code>stopDepth</code>. 
        <br>
        <br>
        <code>depth</code> - will represent how deep we are in the search
        <br>
        <code>stopDepth</code> - will represent at what point we stop 
        <br>
        <br>
        <div class = "code">
        {@html Prism.highlight(`
            public static int NegaMax( Position currPosition, int depth, int stopDepth ) {
    
            }
            `, Prism.languages[language])}
        </div>
        <br>
        <br>
        We than have to change the order in which we look to score a position
        <br>
        <br>
        1. First check if the position is terminal, if it is, return its terminal score
        <br>
        2. If the position isn't terminal, check if we are at our stop depth, if we are return the heuristic score of the position
        <br>
        3. If the position is not terminal or if were not at our stop depth, find and return its non-terminal score
        <br>
        <br>
        <div class = "code">
        {@html Prism.highlight( `
            public static int NegaMax(Position currPosition, int depth, int stopDepth) {
            
                if ( currPosition.isTerminal() ) {
                    return currPosition.getTerminalScore(); 
                }


                if ( depth == stopDepth ) {
                    return currPosition.getHeuristicScore();
                }

                int bestChildPositionScore = int.MinValue; 
            
                foreach (Position childPosition in currPosition.GetChildPositions() ) { //'move' just represents a location on the board
                    Position childPosition = currPosition.playMove( move ); //returns a new 'Position' object with the played move
                    //note that the current turn in 'childPosition' is the opponent of the player in 'position'
            
                    int childPositionScore = -NegaMax(childPosition, depth+1, stopDepth); //when we call NegaMax we increase the depth
            
                    bestChildPositionScore = Math.Max(bestChildPositionScore, childPositionScore);
                }
            
                return bestChildPositionScore;
            }      
               `
            , Prism.languages[language])}
            </div>
            <br>
            <br>
            We also have to change the <code>SearchForBestMove</code> function to accomodate for the stop depth as well... 
            <br>
            <br>
            The function will now take in <code>stopDepth</code> paramater.
            <br>
            <br>
            <div class = "code">
            {@html Prism.highlight(`
                //returns a location on the board that will lead to the best position
                public static int SearchForBestMove( Position currPosition, int stopDepth) {

                }
                `, Prism.languages[language])}
            </div>
            <br>
            <br>
            And change like this... 
            <br>
            <br>
            <div class = "code">
            {@html Prism.highlight(`//returns a location on the board that will lead to the best position
                public static int SearchForBestMove( Position currPosition ) {

                    if (currPosition.IsTerminal()) throw new CustomException("Can't search a terminal position");

                    int bestChildPositionScore = int.MinValue; 
                    int bestMoveLocation = -1;
    
                    foreach (Position childPosition in currPosition.GetChildPositions() ) { 
                        Position childPosition = currPosition.playMove( move ); //returns a new 'Position' object with the played move
                        //note that the current turn in 'childPosition' is the opponent of the player in 'position'
    
                        int childPositionScore = -NegaMax(childPosition, 1, stopDepth); 
    
                        if (positionScore > bestChildPositionScore) {
                            bestMoveLocation = move;
                            bestChildPositionScore = childPositionScore;
                        }
                    }
    
                        return bestMoveLocation;`, Prism.languages[language])}
            </div>
            <br>
            <br>
            Well... there you have it the code for Negamax. Make sure that you have a real good understanding of it before moving on, becuase everything that we do is going to be based off this algorithm.
            <br>
            <br>
            To allow for more customizability lets actually make it part of a class instead...
            <br>
            <br>
            <div class="code">
                {@html Prism.highlight(`

                public class NegaMax {
                    public int stopDepth; //depth we are searching to 
                    
                    public int bestMoveLocation = -1; //best position we found at the depth we searched to
                    public int bestMoveScore = Int.MinValue; //score of 'bestMoveLocation'
        
                    public int positionsSearched = 0;
                    public int encounteredTermPositions = 0;
                    public int heuristicScoredPositons = 0;


                    private NegaMax(int stopDepth) { 
                        this.stsopDepth = stopDepth;
                    }

                    public static NegaMax Search(int stopDepth) {
                        NegaMax n = new NegaMax(stopDepth);
                        n.SearchForBestMove();
                        return n;
                    }

                    private SearchForBestMove( Position currPosition );

                    private NegaMax ( Position currPosition, int depth);

                }
                `, Prism.languages[language])}
            </div>
            <br>
            <br>
            Looking at this class their are two important things to take note of. 
            <br>
            <br>
            First, is that the constructor is <code>private</code>, and the only way to initialize a <code>NegaMax</code>
            object is through the <code>static</code> method <code>Search</code>. 
            <br>
            <br>
            I constructed the class this way, so that ,<strong>you can only have access to a NegaMax object once it has searched a position</strong>.
            <br>
            <br>
            Also note that we now have class variables that represent the best move to play, and the score of said move.
            These variables replace <code>bestMoveLocation</code> and <code>bestChildPositionScore</code> in <code>SearchForBestMove</code>, respectively.
            <br>
            <br>
            There are also these variables:
            <div class="code">
                {@html Prism.highlight(`

                    public int positionsSearched = 0;
                    public int encounteredTermPositions = 0;
                    public int heuristicScoredPositons = 0;

                `, Prism.languages[language])}
            </div>
            <br>
            <br>
            I've added these mainly as a way to track the information of our search. Now, when the search is over we can see, how may positions we actually searched, how many terminal positions
            we encountered, and how many positions were scored using our heuristic function.
            <br>
            <br>
            Implementing these "tracking" vars in our <code>NegaMax</code> method looks like this:
            <br>
            <br>
            <div class="code">
            {@html Prism.highlight(`
            public static int NegaMax(Position currPosition, int depth) {
                        
                        if ( currPosition.isTerminal() ) {
                            this.encounteredTermPositions++;
                            return currPosition.getTerminalScore(); 
                        }


                        if ( depth == this.stopDepth ) { //note *this.stopDepth cuz its a class variable
                            this.scoredHeuristicPositions++;
                            return currPosition.getHeuristicScore();
                        }

                        //were actually searching the position
                        this.searchedPositions++;

                        int bestChildPositionScore = int.MinValue; 
                    
                        foreach (Position childPosition in currPosition.GetChildPositions() ) { //'move' just represents a location on the board
                            Position childPosition = currPosition.playMove( move ); //returns a new 'Position' object with the played move
                            //note that the current turn in 'childPosition' is the opponent of the player in 'position'
                    
                            int childPositionScore = -NegaMax(childPosition, depth+1); //when we call NegaMax we increase the depth
                    
                            bestChildPositionScore = Math.Max(bestChildPositionScore, childPositionScore);
                        }
                    
                        return bestChildPositionScore;
                    }      
                    
                    `, Prism.languages[language])}
            </div>
            Well, thats it! After a <strong>lot</strong> of learning we have finally completed the section regarding the NegaMax algorithm.
            <br>
            <br>
            Now becuase this algorithm and code is the foundation of our entire AI, make sure you look over it a few times until you have a really good understanding of it.


</main>



<svelte:head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css" rel="stylesheet" />
</svelte:head>

<style>
  .code {
    white-space: pre-wrap;
  }

</style>