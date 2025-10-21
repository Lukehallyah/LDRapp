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

    {name:`Emoji Translation`,
        description:`Like playing charades but with emojis. One person sends a string of emojis and the other person 
        tries to guess what it means. A fun send and guess game that leads to lots of laughs and blunders.`
    },

    {name:`Truth or Dare`,
        description:`The classic game of truth and dare! One person asks the other person to choose truth or dare. That second 
        person chooses what they'd rather have. If truth the first person asks a question that the second person has to answer 
        truthfully. If dare, the second person has to do the dare that the first person asks them to do. An oldie but goodie that 
        leads to loads of good vibes`
    },

    {name:`What sound does this gif make?`,
        description:`One person sends a gif to the other person and that person sends a voice recording back of what 
        they think the sound the gif is making. A goofy but lighthearted game of fun that's bound to lead to lots of 
        laughter and randomness`
    },

    {name:`Never Have I Ever`,
        description:`Two people play and start with five points in this version. Both people have five fingers up on 
        one of their hands and lose a point if they have done that thing. The first to lose all points loses.`
    },

    {name:`Guess the Riddle`,
        description:`One person comes up with a riddle and the other person tries to guess what it means. An old but good
        old school game meant for deep thought`
    },

    {name:`Would You Rather`,
        description:`The classic game of would you rather pits a person in two different scenarious. Would you rather do 
        this or rather do that? One person asks this question of the other person and the first person has to answer. 
        Sometimes fun and sometimes crazy but always interesting!`
    },

    {name:`The Name Game`,
        description:`In this game you choose a subject for example 'animals'. The first person chooses the name of an animal
        (like a lion) and the second person chooses the name of the subject but with the last letter of that animal's name 
        (such as newt). This goes on until one person can't name the name of an animal and they lose`
    },

    {name:`Charades`,
        description:`A game best played on video chat or in person, one person acts out something without speaking and the 
        other person does their best to guess what it is. Speaking is not allowed and neither is writing and if the second 
        person cannot guess what it is, then the first person wins. A good way to have fun and lots of laughs`
    },

    {name:`Finish My Sentence`,
        description:`One person starts a sentence and the other person finishes that sentence for them. Make this as 
        absurd or as serious as you want there really are no limitations!`
    },

    {name:`20 Questions`,
        description:`In this game, one person comes up with something in their mind but doesn't tell the second person. 
        The second person is allowed to ask up to twenty questions to try and guess what the first person is thinking of. 
        They are not allowed to ask more and if they can guess what it is, then they win! Otherwise the first person wins`
    },

    {name:`Hangman`,
        description:`One person thinks of a word or short phrase writing lines on a piece of paper for each letter. The other 
        person tries to guess letters and if they guess right, then that letter is written in the line it's on. If not then 
        a piece of the hangman is drawn on a piece of paper. Usually a head, body, two arms, and two legs although you can go 
        more if you want to. If the hangman is drawn all the way, the guessing partner loses and the questioner wins`
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