<script>
        import Prism from 'prismjs';
    import 'prismjs/components/prism-csharp'; // Import the C# language definition
    import SvelteMarkdown from 'svelte-markdown'
    let language = "csharp";
</script>


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
        <br>
        <br>
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
    <h2>Turn Switching Represented in Code</h2>
    <p>
        Okay, in the last paragraph we talked about two things: if a player can't make a move, it becomes the other players turn and once both players can't move a position is considered terminal.
        <br>
        <br>
        Lets tackle the first thing first. <strong>If a player can't make a move, it becomes the other players turn</strong>
        <br>
        <br>
        We can essentially treat this is a child position. So if a position has no available moves, its child position is just the position with the turns switched.
        <br>
        <br>
        So we add this to our <code>GetChildPositions</code> function.
        <br>
        <br>
        <div class = "code">
            {@html Prism.highlight(`
            /* returns a list of all the child positions from the current position
            if we can't play on the current position, the child position is the position with switched turns */
            public List<OthelloBitboard> GetChildPositions() {
                List<OthelloBitboard> childPositions = new List<OthelloBitboard>();

                foreach (int location in this.FindAvailMoves()) {
                    childPositions.Add(this.PlayMove(location));
                }

                if (childPositions.Count() == 0) { //we can't move
                    OthelloBitboard childPosition = this.Copy();
                    childPosition.SwitchTurns();
                    childPositions.Add(childPosition);
                }

                return childPositions;

            }
                `, Prism.languages[language])}
                </div>
            <br>
            <br>
            So now if a position has no moves, the return of calling <code>GetChildPositions</code> will return the position with the turns switched.
            <br>
            <br>
        <h2>Othello Terminal Positions In Code</h2>
        <p>
            Now, lets talk about how were going to determine terminal positions in our NegaMax code. 
            <br>
            <br>
           
        </p>



</main>