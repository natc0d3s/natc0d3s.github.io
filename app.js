var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 50,
  autoStart: true,
  cursor: '█',
  strings: ['']
});

typewriter
  .changeDelay(10)
  .typeString('<br /><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴</a><br />')
  .typeString('<a href="ascii.html" target="_blank">⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿</a><br />')
  .typeString('<br /><br />')
  .typeString('Hello there, I am an experienced LSL scripter and available for hire.')
  .typeString('<br /> <br />I have worked on a variety of inworld projects over the years. While coding is my primary focus, I have a deep understanding of game asset creation in general. <br /> <br />')
  .pauseFor(100)
  .typeString('If you need assistance with your project, just contact me inworld!')
  .typeString('<br /> <br /> <a href="vulcan_salute.html" target="_blank">Live long and prosper!</a> <br />')
  .typeString('<br /> <br />Find me online: <br /> <br />')
  .pauseFor(100)
  .typeString('<a href="https://world.secondlife.com/resident/140daf33-db90-4451-954c-4fbeceb186c8" target="_blank"">Second Life</a> <br />')
  .typeString('<a href="https://github.com/natc0d3s/" target="_blank">GitHub</a> <br />')
    