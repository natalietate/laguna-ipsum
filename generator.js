// This is where we're generating the actual text!

// create new object by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// constructor function time!
function GenerateNewText() {
  this.sentences =
  [
    'I never did learn anything, I never went to school, I never did anything, I just went shopping and hung out.',
    'Did you ever see that Seinfeld episode where that bald guy’s fiance licked all of the envelopes and she like died from glue poisoning?',
    'This is where it all happened. Laguna Beach, California. A small town in the OC where I grew up. I just finished my senior year of high school, a year I’ll never forget.',
    'I’m really gonna miss my friends. Especially my best friend, Lo. No matter how crazy it got this year, I could always count on Lo.',
    'That’s Christina. She’s the reverend’s daughter. No, really, she is.',
    'There’s Morgan. Her goal is to save herself for the right guy.',
    'That’s Trey. I guess you could say he was the serious one. But he also had the best party house in Laguna.',
    'The guy on the surfboard, that’s Talan. He’s a junior and he’s hooked up with most of the girls at our school, twice.',
    'That, that would be Kristin, another junior. Wherever Kristin went drama followed. She thinks she’s hot. Okay, I guess she is, but she can’t stand me.',
    'Stephen. I guess he’s kind of her boyfriend. But Stephen and I have been really close forever. We’re even going to college together in San Francisco. Kristin’s the wrong girl for him.',
    'Oh, and me? I’m Lauren, but my friends call me LC.',
    'I’ve always been the nice girl. But this year, I realized sometimes you just have to go after what you want.',
    'And all this drama started with the black and white party.',
    'We’re going to be putting bubble bath in Jacuzzi’s so it creates a massive amount of bubbles.',
    'If you and Stephen had babies, they’d be so good looking. They would.',
    'This is my clothes closet and that one\'s my shoes and purse closet.',
    'Dude, this is so gnarly. It reminds me of the houses on The OC. Oh God.',
    'I’m really stressed out on Stephen and Lauren because last night, he told me he was going to bed early, and today I found out he was at her house.',
    'And their office is gorgeous. Like inside they have brick walls and this awesome paintings, and I get like a lunch break and stuff.',
    'Well, it’s not what I thought it was going to be. Now they’re saying it’s full time 9-6. It’s so boring! I’m stuffing envelopes. This was my nightmare of a job.',
    'My Dad always told me ‘Flowers mean I’m sorry, chocolates mean I love you.',
    'Sometimes there are just some people you just never get over.',
    'You know you’re growing up when you want stuff for your apartment. Instead of like toys and clothes. I’m not there yet.',
    'Heidi, it looks like you may be my New Year’s kiss. ‘Cause we have 12 minutes and I will have a New Year’s kiss.',
    'I feel like it’s all on the verge of a turning point but I don’t know exactly what it’s going to be.',
    'Love is not a maybe thing; You know when you love someone.',
    'I’m totally focused on my real friendships right now and like you’re a very important person to me. I’m just really glad that I’m here and we’re talking.',
    'I’m glad that you’re part of my fresh start. I’m glad that you’re here to really be a part of this because you mean so much to me.',
    'Heidi knows exactly what she did.',
    'Wait, are you going with LC or are you going with Kristin?',
    'Kristin’s like a really good girl to hook up with and have fun with. We can have like so much fun.',
    'But, coming down to the boyfriend and girlfriend stuff, Lauren would like a better girl.',
    'If I put a baby next to your car are you going to run over it?',
    'I like how we’re all wearing black and Kristin’s wearing white. How ironic.',
    'I’m the only one that wore white. I’m different.',
    'Sorry for wasting your time Stephen.',
    'You didn’t waste my time, it just seemed like you were wasting your time.',
    'It’s like, I’m so nervous, because like if I don’t get in, I’ve worked for this my whole entire high school.',
    'I’m getting out of the bubble. Like I wanna be around those people, I wanna be around people with the same standards and I wanna get out of this party scene and stupid kids screwing up on their parent’s money.',
    'I’m not staying here. I’m not gonna stay in Laguna Beach, you know?',
    'This is gonna be an adventure for me. Do you think Stephen could be in a jealous rage again?',
    'Last night with Stephen was really, really weird.',
    'I wanna leave so bad. I’m not trying to bring anything up, but there’s so many things I wish I could take back and just like not have happened.',
    'My car is dunzo!',
    'Art School, Fashion School whatever.',
    'There\'s no way I\'m going to hook up with LC!',
    'Why don\'t you get up and dance on the pole again? You looked good up there, slut!',
    'Smoke poofs! Does that mean people are blazing?',
    'When are we going to go to Newport and find boys?',
    'Light on the dress, heavy on the make up.',
    'Stephen, that was so lame. You didn\'t even look like a bear.',
    'Kristin\'s voice is like nails on a chalkboard.',
    'You look like you\'re ready to go to Santa Barbara.',
    'Lauren thinks she\'s really cool, but she\'s a bitch!',
    'So Talan, do you have girls in your jacuzzi frequently?',
    'To the end of one chapter of our lives and the beginning of another.',
    'This is a really sad face because I\'m leaving you.',
    'This is a slash between Gucci and Coach.',
    'We\'re just together with an "open relationship".',
    'This is going to be my last sunset in Laguna for a while.',
    'Alex, make me stop lusting Jason!',
    'If you\'re aware of the fact that you\'re, like, obsessed with him, then why don\'t you, like, stop it?',
  ];
}

// method using the constructor to generate a random sentence 

GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)];
    return randomSentence;
};

// method using the constructor to generate a paragraph from random sentences

GenerateNewText.prototype.getParagraph = function() {
  let paragraph = '';
  let minimumCharacterLength = 250;
  let firstSentence = true;

  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(' ' + this.getRandomSentence());
    }
  }
  return paragraph;
};

// method using constructor to generate multiple paragraphs

GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // generate based on user selected number
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // convert array into HTML string for styling
  let paragraphHTML = '';
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += '<p>' + paragraph + '</p>';
  });
  return paragraphHTML;
};

// lets us require this in app.js
module.exports = loremIpsum;