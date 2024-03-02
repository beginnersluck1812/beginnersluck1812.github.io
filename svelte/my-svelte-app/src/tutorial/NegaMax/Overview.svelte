<script>
</script>

<main>
    <h2>A Full Fledged Example</h2>
    Now that we have learned how to score terminal and non-terminal positions, we are now finally able to find the best move in any given position.
    <br>
    <br>
    Lets look at one last example.... (its also interactive so you can Ctrl + to zoom in)
    <br>
    <br>
    <br>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1); pointer-events: auto;" width="800" height="2400" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D2349%253A2170%26mode%3Ddesign%26t%3D5ODFvzluXiSjsbYU-1" allowfullscreen></iframe>
    <br>
    <br>
    <br>
        <h2>The Bigger Picture</h2>

        <p>
            Now up until this point in this tutorial I have been mostly been focusing on stuff on a smaller and more localized scale.
            <br>
            <br>
            This is becuase I felt that it would be more understandable to look at things very hyperspecifically before looking at things on a much more generalized and larger scale.
            <br>
            <br>
            If you have the small stuff down, it should be easier to look at things from a more generalized approach.
            <br>
            <br>
            Okay, whenever we try to find the score of a position we need to look at the scores of the positions that they can move into.
            <br>
            <br>
            However a <strong>vast majority</strong> of the time we don't now the scores of those positions, so we have to look at the scores of the resultant positions, resultant positions.
            <br>
            <br>
            However a <strong>vast majority</strong> of the time we don't now the scores of those positions, so we have to look at the scores of the resultant positions, resultant positions, resultant positions.
            <br>
            <br>
            And even then odds are we probably don't know the scores of the positions so we have to search even further. 
            <br>
            <br>
            Basically, what I am getting at is that we have to search a <strong>bunch</strong> positions, becuase most of the positions we encounter are non-terminal, and becuase most positions are non-terminal it means we are constantly having to search further and further into the game to find scores.
            <br>
            <br>
            But when do we stop searching?... we stop searching once we hit all terminal positions. Not only can we not search any further (since the game is over in all positions) but we don't need to becuase we finally found scores.
            <br>
            <br>
            <!-- And the only point when we stop searching is when we hit all terminal positions. Not only can we not search any further (since the game is over in all positions) but we don't need to becuase we finally found positions that we know the score of. -->
            <!-- At that point we can't search any further (since the game is over in all positions) and also becuase we have all the scores we need. -->
            <br>
            <br>
            We than backpropogate these scores up through all the non-terminal positions we searched through.
            <br>
            <br>
            Think of it as go-fish. We ask for a positions a score and it says go look deeper into the game. We than ask a deeper position for a score and it says go look deeper into the game. We than ask a deeper position for its score.... you get 
            the idea. But when do we not need to keep looking deeper, when we actually run into a score. The thing is were doing this with several positions, we have a bunch of positions telling us to look deeper, and those positions telling us to look deeper,
            and those positions telling us to look deeper. Were digging for scores, and we only stop once we hit terminal scores.
            <br>
            <br>
            Whenever we need to find the score of a position, it means that we need to find future scores in the game, and all these future scores are going to come from <strong>terminal positions</strong>. 
            <br>
            <br>
            This means that whenever were trying to find the score of a position, were going to have to end up searching deep enough through the game until we encounter only terminal positions.
            <br>
            <br>
            All <strong>non-terminal</strong> position scores are just <strong>terminal</strong> position scores that have been propogated up through our search.
            <br>
            <br>
             Becuase were searching all the way to the end of the game for every position we encounter on our search, it means that were ultimately going to end up searching through every single possible position that could come up in the game.
           <br>
           <br>
           Think of it this way, imagine you live at the top floor of a math dormitory. The 10th floor. Now also imagine the floors are arranged by math experience, with the 1st floor being Phd students, and the 10th (yourself) being freshman students. 
           <br>
           <br>
           One day, you being working on your homework and you come across a particularly difficult problem. So you go to the floor below you and ask some friends if they can figure out.
           <br>
           <br>
           Those friends also realize they don't know the answer, so each of them asks some friends below them. Those friends also don't know the answer so they ask some friends below them.
           <br>
           <br>
           Eventually, it hits a point where every Phd student on the 1st level is being asked to solve the problem. They figure it out and give it to their friends, those friends than give it to friends above them, and those friends give it to their friends above them.
           <br>
           <br>
           And before you know it, you (on the 10th) floor have received the answer from a Phd student on the 1st floor.
           <br>
           <br>
          While this anecdote isn't a perfect anaogy it represents the same exact process that's happening when we ask for the score of a position. 
          <br>
          <br>
          When we ask for the score of a position, the position oftentimes has to ask for the score from deeper positions, those deeper positions than have to ask the score from even deeper positions.
          <br>
          <br>
          Eventually, it comes to a point where every position is terminal and a score is known. The terminal positions than tell the positions above them their score, and the positions above than tell the positions above them the score.
          <br>
          <br>
          And before you know it, we know the score of the position, which we recieved from a terminal position a long way down the search.
          <br>
          <br>
          In reality finding the score of a position is just a search algorithm that keeps looking deeper and deeper into the game, until it finds scores, and once it does it than propogates them back up.
          <br>
          <br>
          I want to emphasize the sheer number of positions we end up having to search sometimes.
          <br>
          <br>
          Think about Tic-Tac-Toe, lets say we start at the beginning of a Tic-Tac-Toe game.
          <br>
          <br>
          At the beginning of the game there are 9 moves you can make, each of those 9 moves puts you in 9 positions in which there are 8 positions you can move into (so far 72 positions).
          <br>
          <br>
          For each of those 8 positions in 9 positions, there 7 positions you can move into (so far a total of 508 positions).
          <br>
          <br>
          All being said in done to search from the beginning of a Tic-Tac-Toe game all the way to the end, you'd encounter about 20,000 positions.
          <br>
          <br>
          And that is just in a simple game like Tic-Tac-Toe, in Chess the search is so large that from the opening of Chess, no computer has ever reached the end of the game.
          <br>
          <br>
          This also means that our search is <strong>super massive</strong> because it ends up looking like this.
        </p>

        <h2>We Also Do this Too</h2>
        <p>
          The process that I described above is something that we as humans emulate as well when we play games.
          <br>
          <br>
          We don't know how good positions are so we look at future positions to try and find a position that we know the value of, but when we don't know the scores of those positoins we have to look even further.
          <br>
          <br>
          This is why it takes Chess players so long to make moves, becuase there having to search and look through so many positions.
          <br>
          <br>
          The good thing is our AI is not a human, its a computer. And its really good at crunching numbers and doing calculations.
          <br>
          <br>
          In the next section were going to <strong>finally</strong> look at the code for the NegaMax algorithm, which is going to perform all that I have mentioned above.

        </p>

        
        
        
        
<!--         
        Whenever you want to get the score of a position it means, that you have to find all the scores of the positions the player can move into. T

        In order to get the score of a position you need the scores of all the resulaant positions they can move into. But you also need to find the scores of those result p

        So in reality when we score a position, all that means is we search deep enough through the rest of the game until we encounter only terminal positions.
        The scores of these terminal positions are than backpropogated up through all the positions we searched through.

        Getting the score of non-terminal positions mean that

        In order to get the score of a non-terminal 

        The scores of non-terminal positions are just scores of terminal positoins propogated through the trees

        Whenever you want to find the score of non-terminal position it means that  -->
</main>


<svelte:head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css" rel="stylesheet" />
</svelte:head>

<style>
  .code {
    white-space: pre-wrap;
    padding-left: 20px;
  }
</style>