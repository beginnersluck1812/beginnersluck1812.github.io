<script>
    import Prism from 'prismjs';
    import 'prismjs/components/prism-csharp'; // Import the C# language definition
    import App from '../../App.svelte';
    import Code from '../NegaMax/Code.svelte';

    let language = "csharp";
</script>

<main>
    <!-- <h2>An Efficient Way to Represent Positions In Code</h2>
    <p>
        In this section of this tutorial we are going to be talking about a super efficient way to represent the positions of your game in code. 
        <br>
        <br>
        Intuitively 
        In this section we are going to be talking about bitboards and how they can improve our AI's speed and efficiencey.
        <br>
        <br>
        Bitboards aren't part of the NegaMax algorithm in any way shape or form, and nor do you need it for the algorithm to function.
        <br>
        <br>
        But, if you want a succesfull AI, you most definitely want to use bitboards. -->
    <!-- </p>  -->

    <h2>How Your Probably Representing Positions In Code</h2>
    <p>
        In this section of this tutorial we are going to be talking not about game theory or a new algorithmic implementation, but about how you should represent your game's positions in code. 
        <br>
        <br>
        Now if you were to write code for a specific board game, it would make sense that a position would represented in a 2d list. Something like this for example... 
        <br>
        <br>
    </p>
        <div class="code">
            {@html Prism.highlight(`
            //an example of a Tic-Tac-Toe position
            string[,] board = {
            {"O", " ", " "},
            {" ", "X", " "}, 
            {" ", " ", " "} 
            };

            //an example of a Connect Four position
            string[,] board = {
            {" "," "," "," "," "," "," "},
            {" "," "," "," "," "," "," "},
            {" "," "," "," "," "," "," "},
            {" "," "," ","X"," "," "," "},
            {" "," "," ","O","X"," "," "},
            {" "," "," ","X","O"," "," "},
            };

            //an example of an Othello position
            string[,] board = {
            {" ", " ", " ", " ", "O", "O", " ", " "},
            {" ", " ", " ", " ", "O", "O", " ", " "},
            {" ", " ", " ", "O", "O", "O", " ", " "},
            {" ", " ", " ", "X", "O", "O", "X", " "},
            {" ", " ", " ", "O", "O", "O", " ", " "},
            {" ", " ", "O", " ", " ", " ", " ", " "},
            {" ", "O", " ", " ", " ", " ", " ", " "},
            {" ", " ", " ", " ", " ", " ", " ", " "}
            };

                `, Prism.languages[language])}
        </div>
        <p>
           The issue with representing positions like this, is that its slows down the performance of our AI <strong>a lot</strong>. 
           <br>
           <br>
           Remember that were going to be searching through tens of thousands to hundreds of thousands of positions when we run our NegaMax algorithm.
           <br>
           <br>
           Having to due operations on these 2d lists (like checking if a player lost, finding the available moves, playing moves) takes time. 
           <br>
           <br>
           If we were having to do this, on lets say a couple hundred or so positions, the time it would take to due operations would probably be negligible. But because we are doing it on thousands and thousands of positions, it can really hamper our speed and take up a <strong>bunch</strong> of memory.
           <br>
           <br>
           Ideally, we want a much more efficient way to store these positions, and thats where Bitboards come in.
        </p>
        <h2>Binary</h2>
        <p>
            To understand what a bitboard is, we first need to understand the concept of binary and how computers store numbers. 
            <br>
            <br>
            We as humans use a base 10 system to count numbers, that is to say that we have 10 unique characters we use in order to represent a number (0,1,2,3,4,5,6,7,8,9). 
            <br>
            <br>
            Every number that you can think of only uses those 10 characters in order to represent it.
            <br>
            <br> 
            But base 10 isn't the only system that you can use to represent numbers. You could also use base 1 for example. 
            <br>
            <br> 
            A base 1 system means that there is only one character used to represent all numbers (lets say thats 1). 
            <br>
            1 in Base One is 1
            <br>
            2 in Base One is 11
            <br>
            3 in Base One is 111
            <br>
            4 in Base One is 1111
            <br>
            <br>
            A Base One system is basically using a row of sticks in order to represent a number.
            <br>
            <br>
            Now whenever you type a number into a computer or your code <strong>the computer</strong> stores it using a base 2 system or binary. This means that number are represented using two characters (0 and 1). 
            <br>
            <br>
            1 in Binary is 1
            <br>
            2 in Binary is 10
            <br>
            3 in Binary 11
            <br>
            4 in Binary is 100
            <br>
            <br>
            Now one thing that I have found that helps me understand binary is to read the numbers by each individual character. That is to say instead of looking at this number: 100, as "one hundred", look at it as "one zero zero". 
            <br>
            <br>
            Instead of looking at this number 101 as "one hundred and one" look at is a "one zero one".
            <br>
            <br>
            So 3 in binary is equal to 11 or "one one". Don't confuse 11 as "eleven" think of it as "one one". 
            <br>
            <br>
            Computers store numbers in binary becuase its convenient, becuase they use switches in order to represent numbers. When a switch is on its treated as a "1" and when a switch is off its treated as a "0". 
            <br>
            <br>
            So, in the hardware of the computer if you had a series of switches arranged like this: "on on off off" you would have "one one zero zero" in binary or 12 in base 10.
            <br>
            <br>
            In binary each singular character is called a "bit" and 8 bits is called a byte. 
            <br>
            <br>
            <!-- On the hardware side computers represent numbr
            This is becuase it is always the winning player who makes the last move, and its always the losing player who gets stuck in the last position. 
            Only your opponent can deliver a losing blow. -->
        </p>

        <b2>Counting in Binary</b2>
        <p>
            Counting in binary is the same as counting in base 10.
            <br>
            <br>
            In base 10, you start from 0 and count 1,2,3,4,5,6,8,9. Once you get to 9 there's nothing after that, so you have to start a new place value. 
            <br>
            <br>
            10. After that you begin counting again from the rightmost side, 1<strong>1</strong>,1<strong>2</strong>,1<strong>3</strong>,1<strong>4</strong>,1<strong>5</strong>,1<strong>6</strong>,1<strong>7</strong>,1<strong>8</strong>,1<strong>9</strong>. Once you get back to 9, you increase the place value to the left and start over.
            <br>
            <br>
            Now you at 20. 2<strong>2</strong>,2<strong>2</strong>,2<strong>3</strong>,2<strong>4</strong>,2<strong>5</strong>,2<strong>6</strong>,2<strong>7</strong>,2<strong>8</strong>,2<strong>9</strong>
            <br>
            <br>
            Its the exact same process in binary we start from 0 and count to 1. Once at 1 theres nothing after that, so we have to start a new place value.
            <br>
            <br>
            10. We than continue counting from the rightmost side, 1<strong>1</strong>. On the right were at 1 again so we have to start a new place value. 
            <br>
            <br>
            100.
        </p>

        <h2>How Can We Use Binary to Represent Positions?</h2>
        <p>
            Hopefully, at this point you should at least have a somewhat understanding of binary and how it works, so its time to get the <strong>really cool</strong> part.
            <br>
            <br>
            In most programming languages there are different <strong>data types</strong> that can be used to represent a number. 
            <br>
            <br>
            For example there is a <strong>byte</strong>, <strong>int</strong> and <strong>long</strong>. 
            <br>
            <br>
            But what are the differences in these types? The differences are the magnitude of numbers they can store. A <strong>byte</strong> means that the computer can store a number (when represented in binary) that has up to 8 ones and zeros. 
            <br>
            <br>
            An <strong>int</strong> can store a number that can be represented in binary in less than 32 1s and 0s. And a <strong>long</strong> can store a number that has 64 1s and 0s.
            <br>
            <br>
            Right now lets look at a <strong>long</strong>.
            <br>
            <br>
            Imagine we had this long <code>7332423053953793L</code>, the computer stores it as 0000000000011010000011001100110011000111011110010100101100000001.
            <br>
            <br>
            Now, that doesn't look that impactful, but lets look at it like this.
        </p>
</main>