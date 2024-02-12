<script>
    export let sectionName; //the section name, topic we are covering (NegaMax, Iterative Deepening)
    export let blogPostNamesInSection; //the names of the blog post in the specific section
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let showNestedSections = false; //whether we are showing the blog posts that go with a tutorial (hidden by defualt)




    function toggleNestedSections(event) {
        event.preventDefault(); 
        showNestedSections = !showNestedSections;
    }


    //makes the li a element bold, and also tells the parent (Roadmap.svelte) which element was clicked
    function makeBoldAndSendToParent(event) {
        event.preventDefault(); // Prevent default anchor tag behavior
        
        const listItems = document.querySelectorAll('li a');
        listItems.forEach( (item) => {
            item.style.fontWeight = 'normal';
        });

        // Make the clicked item bold
        event.currentTarget.style.fontWeight = 'bold';


        dispatch('linkClicked', { //tell Roadmap.svelte which blog post was clicked
            sectionName,
            postName: event.target.textContent // Extract the text content of the clicked element
        });
    }

    
    
</script>

<ul>
    <li><a href="index.html" on:click={toggleNestedSections} on:click={makeBoldAndSendToParent}>{ sectionName }</a></li>

    <ul id="nested-sections" style="{showNestedSections ? 'display: block;' : 'display: none;'}">
        {#each blogPostNamesInSection as blogPostName}
            <li class="nested-link"><a href="index.html" on:click={makeBoldAndSendToParent}>{blogPostName}</a></li>
        {/each}
    </ul>
</ul>

<style>
    ul {
        padding: 3px 5px 0px 20px;
        margin: 0px;
    }

    li {
        font-size: large;
        padding: 3px 10px 0px 10px;
    }

    #nested-sections {
        padding-top: 0px;
        margin: 0px;
    }
    .nested-link {
        font-size: medium;
    }
</style>
