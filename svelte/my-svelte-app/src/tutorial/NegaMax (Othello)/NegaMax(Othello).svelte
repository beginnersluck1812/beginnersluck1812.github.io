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
        Now, in most games if one player is unable to make a move, it means that they have lost the game or tied the game, and the game is over. If a player can't move the position is considered terminal.
        <br>
        <br>
        This isn't the case in Othello. If one player makes a move and the other is unable to move, the turn goes back to the 1st player.
        <br>
        <br>
        
    </p>
</main>