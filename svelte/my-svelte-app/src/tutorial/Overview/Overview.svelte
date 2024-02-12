<script>
 
</script>


<main>


   <h2>Searching: Game Theory</h2>

   <p>
    In this section I want talk about why we actually need to search through the game in order to find the best move.
    It may seem intuitive and inherent that we actually 

   </p>


   <h2>What is the Goal of Our Program?</h2>
       <p>
           The goal of our program is to find the <strong>best move</strong> in <strong>any given position</strong>
           of the game were playing. 
           <br>
           <br>
           More simply we want to <strong>give</strong> our program a <strong>position</strong> and have it <strong>return</strong>
           the <strong>best move</strong> 
           <br>
           <br>
           <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D38%253A2%26mode%3Ddesign%26t%3DBa3BPPo0fpdIyqin-1" allowfullscreen></iframe>

       </p>

   <h2>How Humans Achieve This Goal</h2>
       <p>
           Now when we as humans play board games we share the same goal. To look at the board and find the best move. 
           So lets look at an example of how a humnan might play Tic-Tac-Toe.
           <br>
           <br>
           Look at this position in which your playing as X. What is the best move?
           <br>
           <br>
           <br>
           <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D63%253A35%26mode%3Ddesign%26t%3DBa3BPPo0fpdIyqin-1" allowfullscreen></iframe>
           <br>
           <br>
           Got it.... good. Now unless you've spent countless hours playing against your siblings as a kid,
           odds are you had to do a bit thinking to come up with a solution.
           <br>
           <br>
           Now this thinking process is what were primarily interested in. Quickly looking at the board you probably noticed that there weren't any obvious moves that you could make.
           'O' wasn't threatening you and you couldn't win in one move. 
           <br>
           <br>
           So you had to do a little bit of thinking in order to come up with an answer.
           <br>
           <br>
           More specifically you had to think ahead in the game and <strong>weigh the possible moves you could make</strong> with the <strong>responses 'O'
           could make in the future.</strong>
           <br>
           <br>
           You picked a move in your head, thean calculated responses 'O' could make. 
           Then you calculated the responses you could make to the responses 'O' could make. Then you calculated the responses..... you get the idea.
           
           <br>
           <br>
           It looked something like this.
           <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D133%253A893%26mode%3Ddesign%26t%3DGTIyyUw2JTpoFEiE-1" allowfullscreen></iframe>
           <br>
           <br>
           By plotting out the moves and positions that both players could make and end up in the future, you 
           were able to figure out the best move.
           <br>
           <br>
           This is why chess players take a super long time to make their moves, because they are having to search through
           a bunch of positions in order to do so.

            


       
   <h2>How our Program is Going to Achieve Its Goal</h2>
       <p>
           Our program is going to follow the same exact process. It is going to take a position and then compute and iterate through all the possible future moves in order to find the best move.
       <p>

</main>

<style>
</style>
