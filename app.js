var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 50,
  autoStart: true,
  cursor: '█',
  strings: ['']
});

typewriter
  .typeString('Hello there, my name is <strong>Nat Byron</strong> and I am  a resident of the sandbox game <strong>Second Life</strong>.<br /> <br />')
  .pauseFor(300)
  .typeString('I am an experienced LSL coder and not available for hire at this moment.')
  .pauseFor(2000)
  .changeDeleteSpeed(1)
  .deleteChars(39)
  .typeString(' totally available for hire ;)')
  .typeString(' <br /> <br />I have worked on a variety of inworld projects over the years. While scripting is my primary focus, I have a deep understanding of game asset creation in general. <br /> <br />')
  .pauseFor(300)
  .typeString('If you need assistance with your project, just contact me inworld!')
  .typeString('<br /> <br />Find me online: <br /> <br />')
  .pauseFor(300)
  .typeString('<a href="https://world.secondlife.com/resident/140daf33-db90-4451-954c-4fbeceb186c8">Second Life</a> <br />')
  .typeString('<a href="https://github.com/natc0d3s/">GitHub</a> <br />')
  
 