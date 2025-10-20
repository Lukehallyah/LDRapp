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

    {name:``,
        description:``
    },
];


btn.onclick=()=>{
    const randomIndex=Math.floor(Math.random()*activities.length);
    const choose=activities[randomIndex];

    activitybox.textContent=choose.name;
    describebox.textContent=choose.description;
}



//Works to Randomize the lists, need to work on adding the activites now