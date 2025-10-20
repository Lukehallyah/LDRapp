const activitybox =document.querySelector(".activity");
const describebox =document.querySelector(".describe");
const btn=document.querySelector(".random");

const activities=[
    {name:"What Are The Odds?",
        description:`One player dares player two to do something and both players pick a number between 1 and 20.
        If both players pick the same number on the count of 3, then player 2 has to do the dare.`},
    
    {name:"Truth and Deeper Truth", 
        description:`This is a game where you can ask a generic question(What is your favorite color)
         or something much deeper(What is your fondest memory)`},
    
    {name:`Scrapbooking`,
        description:`Try making a scrapbook together. Maybe of your fondest memories or things that are important
        to you both. This can be a fun no pressure way to spend an evening together`
    },
    
    {name:`Word Unscramble`,
        description:`Send a scrambled word to each other to see if the other person can guess what word it is. Helps if 
        the first and last letter of the word or is the same. A fun and engaging twist on texting games!`
    },
    
    {name:`Origami`,
        description:`Origami is a fun way to pass an evening together possibly on video chat. Helping each other and
        seeing who can make the best creation is a beautiful way to spend an evening full of laughs and smiles`
    },

    {name:`Storybuilding`,
        description:`Try building a story together! You can go line by line or paragraph by paragraph, but it's important
        to build it together. Try to make each other laugh, throw a wrench into the story, make it spicy, whatever your 
        fancy or however you want to build, creating a story together is the perfect way to have fun!`
    },

    {name:`Draw Together`,
        description:`Nothing like drawing together to get the creativity flowing! Try drawing something together. It could
        be something that each of you draws your own version of, or it may be together on an app or using your phone's
        camera to save and send until you have your finished product. However you choose remember to have fun!`
    },

    {name:`What Would You Do?`,
        description:`One person comes up with a scenario and asks the other person what they would do there. It's a
        lighthearted questions game that can give each of you a glimpse into the mind of the other person. An exciting 
        way to find out how your partner thinks!`
    },

    {name:`Have a Movie Night`,
        description:`Are you stressed after a long day of study or work? Want to spend time together but your social 
        battery has run dry? Watching a movie together is the perfect date night idea for when both of you have had enough
        of today but want to spend time together and the best part? It's low pressure too.`
    },
];


btn.onclick=()=>{
    const randomIndex=Math.floor(Math.random()*activities.length);
    const choose=activities[randomIndex];

    activitybox.textContent=choose.name;
    describebox.textContent=choose.description;
}



//Works to Randomize the lists, need to work on adding the activites now