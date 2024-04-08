<script>

</script>


<body>
    <h2>Implementing Alpha Beta Pruning</h2>
    <p>
        Recall that the concept of alpha beta pruning is as follows:
        <br>
        <br>
        A parent <strong>should stop searching</strong> one of its child positions, once it knows its <strong>going to return a worse score</strong>
        <br>
        <br>
        Now when we implement alpha beta pruning in our search were going to have do it at the child position's child position level.
        <br>
        <br>
        Here's what I mean. 
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D361%253A2%26mode%3Ddesign%26t%3DgobYfwdHaxuXJXAn-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        Now notice that it isn't the above position ( in this case X ) that decides to stop searching. Its the child position ( in this case O ) that actually makes the call to stop searching.
        <br>
        <br>
        Basically, the child position has to know what its parent's best score is. And if the child position realizes its going to return a score less than that, then it stops searching and breaks.
        <br>
        <br>
        So in reality, alpha beta pruning is more like this:
        <br>
        <br>
        If a child position <strong>realizes it will return a score less than its parent's best score</strong>, it should <strong>stop searching</strong>.
        <br>
        <br>
        Now to do the above, a child position needs to know two things: the score of <strong>its</strong> best move and the score of its <strong>parent's</strong> best move.
        <br>
        <br>
        We can represent these two snippets of information in two variables called......
    </p>
    <h2>Alpha and Beta</h2>
    <p>
        Well if you didn't already guess it these two variables are called <strong>alpha</strong> and <strong>beta</strong>. And there definitions are as follows. 
        <br>
        <br>
        <strong>alpha</strong>: the score of a positions best move.
        <br>
        <strong>beta</strong>: the score of the parent's best move.
        <br>
        <br>
        So let's look at these variables in action.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D369%253A2%26mode%3Ddesign%26t%3DzvOjpcTz25BUmWO7-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        That's basically what alpha and beta are. 
        <br>
        <br>
        Alpha represents the current position's best score and beta represents the parent's best score <strong>from the current position's perspective</strong>.
        <br>
        <br>
        Now becuase the parent of a child position is always an opponent. It means that were always going to have take the negative of the parent's score, so we can get it in our perspective.
        <br>
        <br>
        <br>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRtVMrDcq6jwo9ztiZFuhcX%2FOthello-AI-Project-Animations%3Ftype%3Ddesign%26node-id%3D378%253A530%26mode%3Ddesign%26t%3DzvOjpcTz25BUmWO7-1" allowfullscreen></iframe>
        <br>
        <br>
        <br>
        Ok, now here's the cool part. We know that beta is always going to be the negative of the parent's best score. So we can really say... 
        <br>
        <br>
        <strong>beta</strong> = - parent's alpha.
        <br>
        <br>
        Now, in the next section we are going to talk about how we can use these two variables in order to tell when we need to stop searching.
        
    </p>
</body>