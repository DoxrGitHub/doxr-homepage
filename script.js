// card recommended size ratio is 346:245

let iE = document.createElement("i");
iE.className = "fa-solid fa-lightbulb fa-4x";
iE.id = "theme";
document.body.insertBefore(iE, document.body.firstChild);

console.log('hello, onlooker! welcome to the dark side of the internet :D')

const randomPhrases = [
 'Hey! I\'m doxr!',
 'Hey, my name is doxr.',
 `What's up, I'm doxr.`,
 `Hey there, I'm doxr.`,
 `Hello! I'm doxr, and I like coding.`,
 'Greetings! I\'m doxr, a coder.',
 'Hi there! I\'m doxr, and I enjoy coding.',
 'Hello! I\'m doxr, and coding is my passion.',
 'Hey. I\'m doxr, and I like coding.',
 'Yo, nice to meet you! I\'m doxr.',
 'Welcome! I\'m doxr, and I code for fun.',
 'Yo, I\'m doxr, and I\'m into coding.',
 'Hi, I\'m doxr, and I\'m a coding enthusiast.',
 'Hello, I\'m doxr, and I\'m here to code.',
 'Hey, I\'m doxr, and I\'m a programming fan.',
 'Hi, I\'m doxr, and I like to code.',
 'Hey, I\'m doxr.'
]

window.onload = function() {
 let selected = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
 console.log(selected);

 const ss = selected + '';
 const keys = ss.split('');
 console.log(keys);
 let i = 0;
 function typeChar() {
 if (i < keys.length) {
   document.getElementById('heytype').innerHTML += keys[i];
   i++;
   setTimeout(typeChar, 20);
 } else {
   typeChar2();
 }
 }
 typeChar();

 let bio = `If the title didn't tell you, I'm Izaan Shaik (I go online as "doxr") and I have a passion for coding (I'm a fullstack developer). I started liking "coding" when I first used Scratch, and then my teacher (very briefly) went over real code: HTML. Before this it was all fake code (ex. we learned to use fake functions like <code>moveForward(3)</code>) but I felt that learning this fake coding wasn't very beneficial for me. That's when I started learning everything about HTML/CSS/JS myself, which lead to learning more completely by myself (like bash and Node.js), and I connected with other people who also like programming. This has immensely helped me. I'm a person who usually appreciates functionality over initial good looks. (Linux > Windows!)`
 let stuff = bio.split('')
 let j = 0;
  function typeChar2() {
   if (j < stuff.length) {
     var tempDiv = document.createElement("div");
     tempDiv.innerHTML = stuff[j];
     var textNode = tempDiv.firstChild;
     document.getElementById('heytype2').appendChild(textNode);
     j++;
     setTimeout(typeChar2, 0.000001);
   }
  }
};

let dm = false;
let anime = false;
let ls_theme = localStorage.getItem('theme');
if (ls_theme === 'dark') {
  document.getElementById('theme_css').href = 'colors-dark.css';
  dm = true;
} else {
  document.getElementById('theme_css').href = 'colors-light.css';
}
document.getElementById('theme').addEventListener('click', function() {
 if (anime) {
  return;
 }
 dm = !dm;
 if(dm) {
  document.getElementById('theme_css').href = 'colors-dark.css';
   localStorage.setItem('theme', 'dark');
 } else {
  document.getElementById('theme_css').href = 'colors-light.css';
   localStorage.setItem('theme', 'light');
 }
});
document.getElementById('theme').style.cursor = 'pointer';
document.getElementById('theme').addEventListener('click', function() {
 this.classList.add('bounce');
 anime = true;
 this.style.cursor = 'not-allowed';

 setTimeout(() => {
  this.classList.remove('bounce');
  anime = false;
   this.style.cursor = 'pointer';
 }, 2000);
});