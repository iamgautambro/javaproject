      
function quote()
{    
    let previousQuote = document.getElementById('clear');
if (previousQuote) {
    previousQuote.remove();
}

    let m=document.querySelector('input[name="mood"]:checked');
    if(m.value==="sad")
    {

        let sad = ["Life is tough, my darling, but so are you.", "The soul that sees beauty may sometimes walk alone.", "Sometimes, the only way out is through."];  
        let randomIndex = Math.floor(Math.random() * sad.length);  //random index
        let selectedQuote = sad[randomIndex]; 

        let Output = document.createElement("p"); //create an element to display.
        Output.textContent = selectedQuote; //stores the selected quote.
        document.body.appendChild(Output); //passes element to body.
        Output.id="clear"
         
    }
    else if(m.value==="happy")
    {
        
        let happy  = [
"Today is a good day for a good day.",
"Every little thing is gonna be alright.",
"Happiness is a warm puppy.",
"The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
"Life is short, and it's up to you to make it sweet.",
"Do more things that make you forget to check your phone.",
"Good vibes only.",
"The best is yet to come.",
"Find joy in the ordinary.",
"Collect moments, not things.",
"Your smile is your best accessory.",
"Let your happiness burst forth!",
"A happy soul is the best shield for a cruel world.",
"Make today ridiculously amazing.",
"The secret of happiness is not in doing what one likes, but in liking what one does."
];               
       let ri = Math.floor(Math.random()*happy.length);
       let selected = happy[ri];

       let output=document.createElement('p'); //element createdd
       output.textContent=selected; //output given
       document.body.appendChild(output);
        output.id="clear"
    }
    else if(m.value==='romantic')
    {
        let romanticQuotes = [
"If I know what love is, it is because of you.",
"You are my heart, my life, my one and only thought.",
"I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
"To me, you are perfect.",
"I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
"You should be kissed and often, and by someone who knows how.",
"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
"I love you not only for what you are, but for what I am when I am with you.",
"You are my today and all of my tomorrows.",
"If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
"Whatever our souls are made of, his and mine are the same.",
"I need you like a heart needs a beat.",
"There is only one happiness in this life, to love and be loved.",
"You are the source of my joy, the center of my world and the whole of my heart.",
"My heart beats for you."


];               let ri = Math.floor(Math.random()*romanticQuotes.length);
       let selected = romanticQuotes[ri];

       let output=document.createElement('p'); //element createdd
       output.textContent=selected; //output given
       document.body.appendChild(output);
        output.id="clear";

    }
    else if(m.value==='worried')
    {
        let worriedQuotes = [
"Worrying does not empty tomorrow of its troubles, it empties today of its strength.",
"Our greatest weapon against stress is our ability to choose one thought over another.",
"Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more brightly.",
"Rule number one is, don't sweat the small stuff. Rule number two is, it's all small stuff.",
"Worry is a misuse of the imagination.",
"Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
"Just when you feel you have no strength, remember the strength of your ancestors.",
"Everything will be okay in the end. If it’s not okay, it’s not the end.",
"Sometimes the most productive thing you can do is relax.",
"You're allowed to scream, you're allowed to cry, but do not give up.",
"The greatest mistake you can make in life is to be continually fearing you will make one.",
"Breathe. It's just a bad day, not a bad life.",
"What lies behind us and what lies before us are tiny matters compared to what lies within us.",
"Don't believe every worried thought you have. Worried thoughts are liars.",
"Calmness is the cradle of power."
];               let ri = Math.floor(Math.random()*worriedQuotes.length);
       let selected = worriedQuotes[ri];

       let output=document.createElement('p'); //element createdd
       output.textContent=selected; //output given
       document.body.appendChild(output); output.id="clear";



    }
    else if(m.value==='confident')
    {
        let confidentQuotes = [
"Believe you can and you're halfway there.",
"Confidence is not 'they will like me.' Confidence is 'I'll be fine if they don't.'",
"Self-confidence is a superpower. Once you start to believe in yourself, magic starts happening.",
"No one can make you feel inferior without your consent.",
"The most beautiful thing you can wear is confidence.",
"You yourself, as much as anybody in the entire universe, deserve your love and affection.",
"With confidence, you have won before you have started.",
"Don't wait until you're ready. Just start.",
"Trust yourself. You know more than you think you do.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.",
"I am not a product of my circumstances. I am a product of my decisions.",
"Doubt kills more dreams than failure ever will.",
"Your success will be determined by your own confidence and fortitude.",
"I am in charge of how I feel and today I am choosing happiness."
];                 let ri = Math.floor(Math.random()*confidentQuotes.length);
       let selected = confidentQuotes[ri];

       let output=document.createElement('p'); //element createdd
       output.textContent=selected; //output given
       document.body.appendChild(output); output.id="clear";



    }
    else if(m.value==='hopeful')
    {
        let hopefulQuotes = [
"Hope is being able to see that there is light despite all of the darkness.",
"The very least you can do in your life is to figure out what you hope for. And the most you can do is live inside that hope. Not admire it from a distance but live right in it, under its roof.",
"Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality.",
"Everything that is done in the world is done by hope.",
"Hope is a waking dream.",
"We must accept finite disappointment, but never lose infinite hope.",
"Learn from yesterday, live for today, hope for tomorrow.",
"Hope is that thing with feathers that perches in the soul and sings the tune without the words and never stops at all.",
"There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
"Let your hopes, not your hurts, shape your future.",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
"Hope itself is a species of happiness, and perhaps, the chief happiness which this world affords.",
"Even the darkest night will end and the sun will rise.",
"The capacity for hope is the most significant fact of life. It provides human beings with a sense of destination and the energy to move along it.",
"Where there is hope, there is life. It fills us with fresh courage and makes us strong again."
];              
     let ri = Math.floor(Math.random()*hopefulQuotes.length);
       let selected = hopefulQuotes[ri];

       let output=document.createElement('p'); //element createdd
       output.textContent=selected; //output given
       document.body.appendChild(output); output.id="clear";



    }
    else  
    {
        let output=document.createElement('p'); //element createdd
        output.id="clear";  
        output.textContent="SELECT AN OPTION ^^"; //output given
        document.body.appendChild(output); output.id="clear";    
    }

}

