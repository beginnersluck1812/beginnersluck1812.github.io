<script>

</script>


<main>
    <h2>Why We Search</h2>
        <p>
            Using the three principles and laws we estabilished last module, we can now determine why we actually need to search.
            <br>
            <br>
            <strong>1.</strong>The best move is the one that puts you in the best position.
            <br>
            <strong>2.</strong>The best position is the one with the best score.
            <br>
            <strong>3.</strong>The score of a position is equal to the score of the best position we can move into.
            <br>
            <br>
        </p>

    <h2>Looking at Our Goal Again</h2>
        <p>
            Remeber that our goal is to find the best move in any given position.
            <br>
            <br>
            <br>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D878%253A4%26mode%3Ddesign%26t%3DuMx20QPZylD1zBxT-1" allowfullscreen></iframe>
            <br>
            <br>
            <br>
            Equipped with the above rules, we should be able to do this.
            <br>
            <br>
            Remember that finding the best move really means finding the best position that we can move into (rule number one).
            <br>
            <br>
            The best position is the one with the best score (rule number 2). This means that we need to look at all the positions we can move
            into, find their scores, and then pick the best one.
            <br>
            <br>
            <br>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7ddlZgwIdbfg25LtigCoci%2FOthello-AI-Tutorial-Designs%3Ftype%3Ddesign%26node-id%3D877%253A945%26mode%3Ddesign%26t%3DlMyMshUqOiW4hAzb-1" allowfullscreen></iframe>
            <br>
            <br>
            <br>
            To figure out the score of that position we need to find the score of the best position we can move into from that position (rule number 3).
            <br>
            <br>
            Now lets look at this example at a larger scale. This example is interactive so I recommend zooming (Ctrl Scroll) in and looking
            at each part on individually and following the flow of the search.
            <br>
            <br>
            <br>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1); pointer-events: auto;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D5%253A196%26mode%3Ddesign%26t%3DN66UxFiaMTB4wYsE-1" allowfullscreen></iframe>
            <br>
            <br>
            <br>
        </p>
    <h2>Why We Search: The Answer</h2>
        <p>
            The main reason why we need to search is becuase the score of a position is determined by the score of its possible future positions.
            <br>
            <br>
            However, a majority of the time we don't know the scores of those future positions, so we need to look at the future positions', future positions. 
            <br>
            <br>
            However, majority of the time we don't know the scores of those future positions' future positions, so we need to look at the.... You get the idea.
            <br>
            <br>
            The value of a position is determined by the value of its future positions. But becuase we don't know the value of those 
            future positions, we have often have to descend into a rabbit hole of searching, until we get to the point .
        </p>
            
</main>

<style>
</style>
