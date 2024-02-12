<script>
    import { onMount } from 'svelte';
   import Header from './common/Header.svelte'
   import TutorialRoadmap from './common/Roadmap.svelte'
   import Introduction from "./tutorial/Introduction/Introduction.svelte"

   
   let currentSectionComponent;
   let Hello;

   async function setCurrentSectionComponent(pathToComponent) {
      try { 
			currentSectionComponent = (await import(pathToComponent)).default; 
         console.log("Current Section Component is now: " + pathToComponent );
		} catch (e) { 
			error = e.toString(); 
		}	
   }


   // onMount( () => {
   //    currentSectionComponent = getSvelteComponent('./tutorial/Introduction/Introduction.svelte');
   //    console.log(currentSectionComponent);
   // })


   onMount(async () => {
      setCurrentSectionComponent('./tutorial/Introduction/Introduction.svelte');
	});

   //one of the blog posts was clicked, and so we display the svelte component that corresponds
   async function handleLinkClicked(event) { 
      const sectionName = event.detail.sectionName;
      const postName = event.detail.postName.replace(/[\s:]/g, '');

      setCurrentSectionComponent(`./tutorial/${sectionName}/${postName}.svelte`)
   }

</script>

<div id="app">
   <TutorialRoadmap on:linkClicked={handleLinkClicked} />

   <div>
      <Header />
      <div id="tutorial-content">
         <svelte:component this={currentSectionComponent} />
      </div>
   </div>

</div>


<style>
   #tutorial-content {
      margin-left: 20%;
      width: 80%;
      padding-bottom: 50px;
   }
</style>
