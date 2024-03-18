<main>
    <h2>NegaMax in Othello</h2>
    <p>
        In the last chapter we full discussed and implemented the NegaMax algorithm.
        <br>
        <br>
        However, in certain areas of traditional combinatorial zero sum games, Othello is different.
        <br>
        <br>
        This means that the code we wrote beforehand can't be perfectly applied to the game Othello, and there are some discrepensies that we have to address, when we create our own NegaMax function for Othello.
        <br>
        <br>
        In this chapter we are going to address these discrepensies, and talk about how Othello differs from traditional games and how we can alter the NegaMax code to accomodate this.
    </p>
    <h2>Terminal Positions in Othello</h2>
    <p>
        The main anomaly that occurs between traditional combinatorial games and Othello is in the way terminal positions are determined.
        <br>
        <br>
        Now, in most games if one player is unable to make a move, it means that they have lost the game or tied the game, and the game is over. <strong>If a player can't move the game is over</strong>.
        <br>
        <br>
        This isn't the case in Othello. If one player makes a move and the other is unable to move, the turn goes back to the 1st player.
        <br>
        <br>
        So if white placed a stone and black was unable to respond it would then be white's turn again. If white couldn't respond, <strong>then the game would be over.</strong>
        <br>
        <br>
        In Othello, a position is terminal if <strong>both</strong> players are unable to move.
        <br>
        <br>
        Now, if you think about this more analytically you realize that in Othello you are unable to determine if a position is terminal just by looking at the position itself.
        <br>
        <br>
        Now, what do I mean by this? Well lets say you have a position where its white's turn and there unable to move. Is the position terminal?
        <br>
        <br>
        Well... we don't know. <strong>Both players</strong> need to be unable to move, right now we can only see if one player (white) can move.
        <br>
        <br>
        Once it becomes black's turn and we realize they can't move, <strong>thats when we know a position is terminal</strong>.
        <br>
        <br>
        Basically, in order to determine if a move is terminal in Othello, we need past knowledge, we need to know if the <strong>player before us couldn't move.</strong>
        <br>
        <br>
        If we know the player before us couldn't move, and neither can we, then and only then can a position be terminal.
        <br>
        <br>
    </p>
    <h2>Terminal Positions and Turn Switching Represented in Code</h2>
    <p>
        Okay, in the last paragraph we talked about two things: if a player can't make a move, it becomes the other players turn and once both players can't move a position is considered terminal.
        <br>
        <br>
        Lets tackle the first thing first. <strong>If a player can't make a move, it becomes the other players turn</strong>
        <br>
        <br>
        Looking at our NegaMax code we can translate the above statement to be: if <code>currPosition</code> has no available moves, then we switch turns and keep searching.
        <br>
        <br>
        <div class = "code">
            {@html Prism.highlight( `
                          public static int NegaMax(Position position, int depth) {
                        
                        // if ( position.isTerminal() ) { //ignore for now
                        //     this.encounteredTermPositions++;
                        //     return position.getTerminalScore(); 
                        // }


                        if ( depth == this.stopDepth ) { 
                            this.scoredHeuristicPositions++;
                            return position.getHeuristicScore();
                        }

                        //were actually searching the position
                        this.searchedPositions++;

                        int bestPositionScore = int.MinValue; 
                        List<int> positionAvailMoves = position.findAvailableMoves();

                        foreach (int move in positionAvailMoves) { //'move' just represents a location on the board
                            Position resultantPosition = position.playMove( move ); //returns a new 'Position' object with the played move
                            //note that the current turn in 'resultantPosition' is the opponent of the player in 'position'
                    
                            int positionScore = -NegaMax(resultantPosition, depth+1); //when we call NegaMax we increase the depth
                    
                            bestPositionScore = Math.Max(bestPositionScore, positionScore);
                        }

                        if (positionAvailMoves.Count() == 0) { //we are unable to move, so we switch turns and search
                            Position nextTurnPosition = position.Copy();
                            nextTurnPosition.SwitchTurns(); //now our opps turn
                            return  -NegaMax(nextTurnPosition, depth+1);

                        }
                    
                        return bestPositionScore;
                    }      
                    
                   `
                , Prism.languages[language])}
                </div>

</main>