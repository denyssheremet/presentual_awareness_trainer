var currentlySpeaking = false;
var myVar;

function startSpeaking() {
    if (currentlySpeaking) {return;}
    currentlySpeaking = true;
    speak(); 
    recursiveSpeaking();
}

function recursiveSpeaking() {
    myVar = setTimeout(function () {
        speak(); 
        currentlySpeaking = false;
        recursiveSpeaking();
    }, 5000);
}

function stopSpeaking() {
    clearTimeout(myVar);
}



function speak() {
    var msg = new SpeechSynthesisUtterance();
    var x = Math.floor(Math.random() * questions.length);
    var y = Math.floor(Math.random() * questions[x].length);
    msg.text = questions[x][y];
    msg.lang = 'nl';
    msg.rate = 0.8; // From 0.1 to 10
    msg.pitch = 0; // From 0 to 2
    window.speechSynthesis.speak(msg);
    console.log(msg.text);
}

var questions =
    [
        [
            "Waar kijk je naar?",
            "Waar kijk je naar?",
            "Waar zie je rood?",
            "Waar zie je blauw?",
            "Waar zie je wit?",
            "Waar zie je geel?",
            "Waar zie je een warme kleur?",
            "Wat is er aan de horizon?",
            "Waar is iets zachts?",
            "Waar is iets hards?",
            "Waar zie je een patroon?",
            "Welk patroon zie je onder je voeten?",
            "Ziet het er oud uit?",
            "Wat zie je links van je?",
            "Wat zie je rechts van je?",
            "Welke kant kijk je op?",
            "Wat is het helderste dat je kan zien?",
            "Wat is het donkerste dat je kan zien?",
            "Wat is het verste wat je kan zien?",
        ],
        [
            "Wat hoor je?",
            "Wat is het achtergrondgeluid?",
            "Kan je iemand horen praten?",
            "Kan je vogels horen?",
            "Hoor je hoog geluid?",
            "Hoor je laag geluid?",
        ],
        [
            "Hoe voelen je handen?",
            "Hoe voelt het ding voor je?",
            "Kan je iets zachts voelen?",
            "Kan je iets met een textuur voelen?",
            "Hoe voelt iets wat naast je is?",
        ],
        [
            "Welke smaak heb je in je mond?",
            "Waar doet de smaak in je mond je aan denken?",
        ],
        [
            "Hoe ruikt het?",
            "Wat ruik je?",
            "Wat ruikt er lekker in de buurt?",
            "Waar komt de geur vandaan?",
        ],
        [
            "Hoe adem je?",
            "In welke houding ben je?",
            "Hoe beweeg je?",
            "Hoe zijn je ogen?",
            "Waar ben je?",
            "Welke sokken heb je aan?",
            "Hoe zien je veters eruit?",
            "Zou je haar doen?",
        ],
        [
            "Droom je?",
            "Droom je?",
            "Droom je?",
            "Droom je?",
            "Droom je?",
            "Droom je?",
            "Zou dit een droom kunnen zijn?",
            "Ben je aan het dromen?",
            "Dit is geen droom, of wel?",
        ],
    ]