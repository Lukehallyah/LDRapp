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

    {name:`Lightning Fast!`,
        description:`In this game one person says a word and the other person says the first thing that comes to mind! This 
        game is meant to be played quickly and lightheartedly and a time limit of 5 seconds could be given for the person to 
        give an answer. See what kinds of crazy things pop up!`
    },

    {name:`Categories`,
        description:`Both players agree on a category. Then taking turns they both respond with something that belongs to 
        that category and the first person who takes too long to respond loses the game.`
    },

    {name:`Reaction Photo`,
        description:`One person sends a gif and the other person sends a picture of them acting it out. Could be anything 
        and could be used with emojis too if you wanted. A good way to laugh and have fun after a long day.`
    },

    {name:`Emoji Story`,
        description:`One Person sends a string of emoji and the other person comes up with a short story from that string 
        of emoji. Could be send using audio or by typing but creativity helps here!`
    },

    {name:`Rhymes`,
        description:`Take turns rhyming with each other to see how long you can go. The first person unable to rhyme or 
        repeating a word loses. Can go back and forth and try many different words and even phrases if you wanted`
    },

    {name:`Where Am I?`,
        description:`Describe a place in the world or an area and see if the other person can guess where you are talking 
        about. Could be anything from countries to landmarks, museums to beaches, or something normal like malls or movie 
        theatres. See how interesting you can make this and if your partner can guess`
    },

    {name:`What Am I?`,
        description:`The first partner describes very simply without giving away too many details and the other person 
        tries their best to figure out what they are. Not a very difficult game but one that requires creativity`
    },

    {name:`I spy`,
        description:`The first person says "I spy something (fill in the blank)" and the other person tries their best to 
        guess what the first person is referring to. Should be something around you or if video chatting something around 
        your partner.`
    },

    {name:`Fill in the Blanks`,
        description:`Kind of like those MadLibs that people used to do. You come up with a short story or sentence and 
        the other person fills in the blanks as randomly or seriously as they want. This can lead to all sorts of fun and 
        unexpected laughs!`
    },

    {name:`Unpopular Opinion`,
        description:`This is kinda similiar to a "hot take". Someone says an unpopular opinion that they have and both of you 
        go back and forth saying one unpopular opinion after another. A great way to get to know your partner and loved one and 
        a good way to spend an evening together.`
    },

    {name:`What Should I do?`,
        description:`One partner comes up with a situation that can literally be anything. It can be a good or bad situation 
        really anything that you want. Then then ask the other partner what they should do in this situation. Can lead to some 
        interesting conversations and some really good bonding moments too.`
    },

    {name:`Tic Tac Toe`,
        description:`This can be played thru video chat, sending pictures back and forth to each other, or by playing it 
        using the numbers 1-9. So 159 would be a success. So would 147 and so on. If it helps, remember how a phone is dialed 
        and it makes it easier to keep track of`
    },

    {name:`Song Lyrics`,
        description:`Text song lyrics back and forth. It can be the same song that both of you love or it can be a random line 
        from a song that really means the world to you. You can discuss or just enjoy spending time together and also gives the 
        chance to listen to music together. Music brings the world just a little closer`
    },

    {name:`The Alphabet Game`,
        description:`Can make this a category or can be something random. You and your partner start with A and work your way thru 
        to Z each of you taking turns and naming something in order. The first person unable to name something loses.`
    },

    {name:`Rock-Paper-Scissors`,
        description:`The best way to play this game over long distance I've thought is either video chat or with emojis. Emojis 
        makes it easier to play and kinda fun if both of you aren't feeling up to video chat and makes an interesting way to settle 
        disputes if each of you may want to do something different and can't decide. Overall a Win-Win.`
    },

    {name:`Question Respond`,
        description:`A wacky game where each partner takes turns asking a question and the other person answers with a question. 
        No one actually answers the question unless they want to but makes for an interesting and hilarious game to play with 
        each other.`
    },

    {name:`Emoji Picture React`,
        description:`One partner sends an emoji and the other sends a picture of them reacting to it. A goofy but simple little 
        game that leaves the door wide open for all kinds of possibilities!`
    },

    {name:`3 second video`,
        description:`Send a 3 second video of you doing something and it can be anything and send to your partner. Could be singing
        or dancing, could be writing or doing homeword or studying, walking or exploring the world around you, the world is your oyster!`
    },

    {name:`Word Association`,
        description:`One partner says a word and the other has to say something associated with it. For example if someone 
        says 'fast food' you can say 'burger' or anything in between. Go back and forward until one person takes too long and 
        the other one wins!`
    },

    {name:`Emoji Voice`,
        description:`One partner sends an emoji and the other person sends a voice recording of what they think it sounds like 
        or something related to the emoji. Bound to lead to lots of laughs and good times!`
    },

    {name:`Practice Language`,
        description:`For many LDR couples, practicing language is vital to understanding the culture of a nation. This 
        brings everyone closer together and can be a fun way to learn and to study together`
    },

    {name:`Model Clothes for Each Other`,
        description:`Is there something that you just love seeing your partner in? That blue dress that just drives you 
        wild, or that slim black shirt that makes you crazy? Try modeling clothes for each other and different styles 
        to see what each of you likes`
    },

    {name:`Couples Card Game`,
        description:`If you already have a couples card game this is great but not necessary for this to work. If you have, 
        use the couple's card game to ask each other questions that really bring you closer together. Try not to make each other 
        uncomfortable but it's a good way to be intimate on a deep level. If you may not have a couple's card game, asking 
        questions that come to mind works just as well, and can lead to each partner opening up a little more`
    },

    {name:`Video Chat Walk`,
        description:`Is your partner stressed? Are they in a stressful anxious situation that they may not be able to get 
        away from in this moment? Going for a walk even through the neighborhood can give them that escape that they need 
        and may turn into a long distance date! Who knows what can happen and it's bound to spark conversations`
    },

    {name:`Video Chat`,
        description:`Video chatting is a good way for people to connect over long distance. Some people love to hear their 
        parnter's voices and other's love to see their smiles and their laughs. It's like giving them a hug from halfway 
        across the world and it makes everyone feel closer. It's alright if your partner isn't comfortable and you could always 
        try a different time. `
    },

    {name:`MadLibs Improv`,
        description:`A short story with "fill in the blanks" that can be downloaded or copied online for free or you can make 
        your own! Leave some blanks there so that the other partner can add some words and things and see how crazy the stories 
        can get. You'd be surpised what you both with create together!`
    },

    {name:`Video Dance Party`,
        description:`Ever wanted to dance with your partner but they seem so far away? Just boot up the old video chat, 
        put on some music and dance together! This could be any music as long as you both have fun together. This is a great 
        way to unwind after a long day of work or study`
    },

    {name:`Share Recipes`,
        description:`Ever wanted to cook together or just get a feel of what your partner likes to eat? Sharing recipes together 
        can be a great way to learn! A great way to learn about culture and the interests of your parnter and the foods they love 
        and grew up eating and enjoying. And who knows? You may find new foods that you really enjoy!`
    },

    {name:`Video Games`,
        description:`Play or Discover new video games together! See that new block game and you're dying to try? Give it a whirl 
        and bring your partner in on the fun. See who can get the newest high schore and who finds the most creative way of doing 
        things. Who knows what new games you'll find and what kinds of experiences you'll have?`
    },

    {name:`Trying New Hobby`,
        description:`Try a new hobby together. Could be something as simple as origami, drawing, or even studying together! 
        Doing things together brings you closer and opens up new opportunities for closeness and intimacy. See what new possibilities 
        are out there for the both of you there's an entire world of knowledge waiting!`
    },

    {name:`Discuss Likes in the Relationship`,
        description:`Discuss those things you like in the relationship that especially make you smile! Those things you are 
        thankful for but sometimes may not tell your partner enough. Talking about these things brings gratitude and where 
        there is gratitude each partner feels appreciated. Give it a try and see what happens!`
    },

    {name:`What can Improve?`,
        description:`With your partner, discuss those things you'd like to see more of in the relationship and what can improve. 
        Each partner is responsible for not being critical or defensive and this is just meant as more of a safe place to discuss 
        those things that you may long more for in the relationship. Be careful to tell your partner also those things you love 
        and enjoy and be kind and gentle with them. This is all about closeness and connection`
    },

    {name:`Read Together`,
        description:`Reading together can be a great way to grow close when both of you are tired after a long day. One person 
        can read while the other person relaxes or you can both take turns. It's important to try not to be on social media during 
        this time and to focus on resting with each other and feeling each other's presence`
    },

    {name:`Sing A Song`,
        description:`Singing a song is perhaps the most vulnerable thing a person can do. But in the heart of your partner 
        you'll find that sometimes they long for your voice and singing. Try singing some of your favorite lines or songs to 
        each other and see what beautiful moments can unfold`
    },

    {name:`Discuss Fashion`,
        description:`Ever wondered what type of clothes that your partner really likes? Ever wanted to see them try on something 
        that really interested you but never knew the right time to bring it up? Now's your chance! Discuss those things you'd really 
        like to see them wear or let them tell you what they'd like to see you wear too, can lead to some interesting conversations`
    },

    {name:`Chika Chika`,
        description:`In the philippines, "Chika Chika" is like gossip! Could be anything you heard during your day but always 
        being respectful of other people and things. Could be things happening around the world or just things you've heard about 
        really just about anything you could talk about could be discussed here`
    },

    {name:`Bucket List`,
        description:`Each Partner comes up with 5 things they'd like to do before they pass away and places it in their 
        bucket list. These are your dreams of places you'd like to go one day. Things you'd really like to do, foods you'd 
        really like to try, people you'd really like to meet, experiences that really interest you, these can be anything!`
    },

    {name:`Study Together`,
        description:`Kind of just want to feel close but both of you are students or studying? No pressure and no stress 
        just booting up your favorite app and video calling is the perfect way to connect and uplift each other during a hard day`
    },

    {name:`Rabbit Hole`,
        description:`One partner picks topics and the other person asks questions about that topic and see how far down 
        the 'rabbit hole' you can go! This can lead to some long conversations and some interesting beliefs and who knows 
        what knowledge you can learn together?`
    },

    {name:`Something Attractive`,
        description:`Something you find really attractive about your partner. Don't be afraid to let your partner know 
        how pretty they are or handsome they are to you, this is about going all out and showing your partner how lovely 
        they are to you. Try not to hold back because it's important for your loved one to know how amazing you think they
        really are even if sometimes they can't see it themselves`
    },

    
];


btn.onclick=()=>{
    const randomIndex=Math.floor(Math.random()*activities.length);
    const choose=activities[randomIndex];

    activitybox.textContent=choose.name;
    describebox.textContent=choose.description;
}



//Works to Randomize the lists, need to work on adding the activites now