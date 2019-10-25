let currentStory = 0;

let stories = [
    {
        title: "The Grocery Store",
        body: "One day <span id='character'></span> walked to the grocery store to get some <span id='noun'></span>.  On the way she saw a/n <span id='adjective'></span> looking <span id='noun2'></span> that struck her as odd.  She decided <span id='verb'></span> was the best thing to do since this <span id='noun3'></span> was <span id='adjective2'></span>. <br /><br /> Another day had passed and ...",
        regions: [ { id: "#character", text: "Person (female)" }, 
                    { id: "#noun", text: "Plural Noun" },
                    { id: "#adjective", text: "Adjective" },
                    { id: "#noun2", text: "Noun" },
                    { id: "#verb", text: "Verb ending in -ing" },
                    { id: "#noun3", text: "Noun" },
                    { id: "#adjective2", text: "Adjective" }
                ]
    },
    {
        title: "Bears",
        body: "If you go to some <span id='adjective'></span> place like Yellowstone National <span id='noun'></span>, you must know how to deal with the wild animals such as bears and wolves and <span id='noun2'></span>.  The most important of these is the bear.  There are three kinds of bears, the grizzly bear, the <span id='adjective2'></span> bear, and the <span id='adjective3'></span> bear.  Bears spend most of their time <span id='verb'></span> or <span id='verb2'></span>.  They look very <span id='adjective4'></span>, but if you make them <span id='adjective5'></span>, they might bite your <span id='noun3'></span>.  Bears will come up to your car and beg for <span id='noun4'></span>.  They will stand on their hind legs and clap their <span id='noun5'></span> together and pretend to be <span id='adjective6'></span>.  But do not get out of your <span id='noun6'></span> or offer the bears <span id='noun7'></span> or <span id='noun8'></span>.  This same advice applies to other wild creatures such as  <span id='noun9'></span> and <span id='noun10'></span>.  Remember all these rules and you will spend your vacation <span id='adverb'></span> and not get eaten by a/an <span id='noun11'></span>.",
        regions: [ { id: "#adjective", text: "Adjective" },
                    { id: "#noun", text: "Noun" },
                    { id: "#noun2", text: "Plural Noun" },
                    { id: "#adjective2", text: "Adjective" },
                    { id: "#adjective3", text: "Adjective" },
                    { id: "#verb", text: "Verb ending in ‘ing’." },
                    { id: "#verb2", text: "Verb ending in ‘ing’." },
                    { id: "#adjective4", text: "Adjective" },
                    { id: "#adjective5", text: "Adjective" },
                    { id: "#noun3", text: "Noun" },
                    { id: "#noun4", text: "Food (Plural)" },
                    { id: "#noun5", text: "Part of the body (Plural)" },
                    { id: "#adjective6", text: "Adjective" },
                    { id: "#noun6", text: "Vehicle" },
                    { id: "#noun7", text: "Food (Plural)" },
                    { id: "#noun8", text: "Food (Plural)" },
                    { id: "#noun9", text: "Something Alive (Plural)" },
                    { id: "#noun10", text: "Something Alive (Plural)" },
                    { id: "#adverb", text: "Adverb" },
                    { id: "#noun11", text: "Noun" }
                ]
    }
];

resetForm();

document.querySelector('#btnStart').onclick = function(){
    populateStory();
};

document.querySelector('#btnReset').onclick = function(){
    resetForm();
}

/* Loads the next story */
document.querySelector("#btnNext").onclick = function(){
    
    if(currentStory === stories.length - 1)
        currentStory = 0;
    else
        currentStory++;

    resetForm();
}

/* Pop the social share dialog */
document.querySelector('#btnShare').onclick = function(){
    alert("Thanks for sharing!");
}

/* Loads the story */
function populateStory(){

    let story = stories[currentStory];

    for(var i = 0; i < story.regions.length; i++){
        let value = prompt(story.regions[i].text);
        let space = document.querySelector(story.regions[i].id);
        
        //-- handle the prompt value and break out if user cancels.
        if(value === null)
            break;
        else
            space.textContent = value;
    }
}

/* Reset the current form and clears all of the content out */
function resetForm(){

    let story = stories[currentStory];

    document.querySelector('#StoryTitle').innerHTML = story.title;
    document.querySelector('#StoryBody').innerHTML = story.body;

    for(var i = 0; i < story.regions.length; i++){
        //console.log(story.regions[i].id);
        document.querySelector(story.regions[i].id).textContent = story.regions[i].text;
    }
}