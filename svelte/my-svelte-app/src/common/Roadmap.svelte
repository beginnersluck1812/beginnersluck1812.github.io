<!-- Component that houses the links on the left side of the page that display the tutorial roadmap -->
<script>
    import Section from './Section.svelte'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();



    //blog post was clicked in Section.svelte, telling App.svelte
    function handleLinkClicked(event) {
        dispatch('linkClicked', event.detail);
    }

</script>

<main>
    <h4>Tutorial Roadmap</h4>

    <Section sectionName= {"Introduction"} blogPostNamesInSection = {[]} on:linkClicked={handleLinkClicked} />
    <Section sectionName= {"NegaMax"} blogPostNamesInSection = {["Understanding Moves","Terminal Positions","Zero Sum","Non Terminal Positions","Overview","Code","Search Trees","Code Optimized"]} on:linkClicked={handleLinkClicked} />
    <Section sectionName = {"NegaMax (Othello)"} blogPostNamesInSection = {[]} on:linkClicked={handleLinkClicked}/>
    <Section sectionName = {"Bitboards"} blogPostNamesInSection = {[]} on:linkClicked={handleLinkClicked}/>
    <Section sectionName = {"Alpha Beta Pruning"} blogPostNamesInSection = {["Alpha and Beta","Alpha and Beta", "Alpha Beta and Stopping","Extending Alpha Beta"]} on:linkClicked={handleLinkClicked}/>
    <!-- <ul>
        <li><a href="../index.html">Introduction</a></li>
        <li><a href="../Overview/overview.html">Overview</a></li>
        <li><a href="../Overview/searching_positions.html">Searching Positions</a></li>
        <li><a href="resources">Resources</a></li>
    </ul> -->
</main>

<style>
   main {
    height: 100%;
    width: 18%;
    position: fixed;
    padding-left: 20px;
    padding: 0px;
   }

   h4 {
    margin: 5px 0px 0px 7px;
   }

</style>
