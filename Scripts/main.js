let storyRegions = [ { id: "#character", text: "Person (female)" }, 
                     { id: "#noun", text: "Plural Noun" },
                     { id: "#adjective", text: "Adjective" },
                     { id: "#noun2", text: "Noun" },
                     { id: "#verb", text: "Verb ending in -ing" },
                     { id: "#noun3", text: "Noun" },
                     { id: "#adjective2", text: "Adjective" }
                   ];

nextStory();

document.querySelector("#StoryContent").onclick = function(){
    //populateStory();
} 
document.querySelector('#btnStart').onclick = function(){
    populateStory();
};

document.querySelector('#btnReset').onclick = function(){
    resetForm();
}

/* Loads the next story */
document.querySelector("#btnNext").onclick = function(){
    //nextStory();
    alert("Sorry, no other stories available at this time.");
}

/* Pop the social share dialog */
document.querySelector('#btnShare').onclick = function(){
    alert("Thanks for sharing!");
}

/* Fetches the next story from the mad libs api */
function nextStory(){

    //TODO: Fetch our new story

    resetForm();
}

/* Loads the story */
function populateStory(){
    for(var i = 0; i < storyRegions.length; i++){
        let value = prompt(storyRegions[i].text);
        let space = document.querySelector(storyRegions[i].id);
        
        value ? space.textContent = value : space.textContent = storyRegions[i].text;
    }
}

/* Reset the current form and clears all of the content out */
function resetForm(){
    for(var i = 0; i < storyRegions.length; i++){
        document.querySelector(storyRegions[i].id).textContent = storyRegions[i].text;
    }
}