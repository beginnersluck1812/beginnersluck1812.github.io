<script>
 
 </script>
 
 
 <main>

    <h2>Introduction</h2>
    <p>
        Hello! In this tutorial/blog we are going to be talking about how you can develop your very own board game AI that can play games
        like Chess, Tic-Tac-Toe, Connect Four and Checkers.
        <br>
        <br>
        Namely I am going to be disucssing the <strong>advanved algorithms</strong> and <strong>optimization techniques</strong> that are commonly used in creating these types of programs.
        <br>
        <br>
        By the end of this tutorial you should have a clear enough understanding of the board-game AI iceberg that you are able to create you own program.

    </p>

    <h2>Why I'm Creating this Tutorial</h2>
    <p>
        The first reason that I am creating this tutorial is becuase I really enjoy this realm of Computer Science and this blog/tutorial gives 
        me a medium to talk about it. 
        <br>
        <br>
        And the second reason is I feel there is a lack of well documented, 
        thorough and easily understanble tutorials around board game AIs. 
        When I was creating my own Connect Four AI the tutorials and papers I found either scratched the surface or 
        were overy complex and esoteric, filled with terms like "Principal Variation", "Lower bound nodes" or "Search windows". 
        <br>
        <br>
        I was stuck in a frustating loop of finding tutorials that already covered things I knew and tutorials that 
        covered content that was far beyond my reach of understanding. I'm not saying that these tutorials were bad in any way, 
        it was just that none of them covered the topics that I wanted to learn at the level of understanding that I was at.
        <br>
        <br>
        My goal for this blog is to address and introduce these complex topics in a way that is understandable and logical. 
        <br>
        <br>
        One tutorial that I do want to mention though is <a href="http://blog.gamesolver.org/" target="_blank">Pascal Pons Connect Four Blog</a>. Not only is it (in my opinion) the most
        thorough and well structured tutorial out there -- and a massive influence in this blog -- it's also what got me interested in board game AIs, and all
        the knowledge that I have gained couldn't have been possible without my boy Pascal.
    </p>


    <h2>Structure</h2>
    <p>
        Throughout this tutorial we are going to be following along with the creation of my own Othello AI in C#. 
        We'll start off with a very basic Othello program and build our way up to a much more powerful one.
        Each new version of our program will utilize a new type of algorithm/technique that we will talk and discuss beforehand in detail.
        <br>
        <br>
        All the topics that we discuss can be applied to your own programs, but sometimes the execution of certain concepts will differ depending on the game.
        For example the way I determine moves in Othello is going to differ from how you determine moves in Chess or Connect Four. But the concepts we discuss are universal.
        <br>
        <br>
        So I will be talking about some stuff that strictly relates to the game Othello, and if your not developing your own Othello AI you are more than welcome to skip it.
        <br>
        <br>
        For those who don't know what the game Othello is (few do) here is a short <a href="https://www.youtube.com/watch?v=xDnYEOsjZnM" target="_blank">video</a> explaining it.
        <br>
        Or an <a href="https://www.worldothello.org/about/about-othello/othello-rules/official-rules/english" target="_blank">article</a> if you prefer it.
    </p>
 </main>
 
 <style>
 </style>
 