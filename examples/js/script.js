const code = document.querySelector('[data-example-code]').innerText.split('\n');
code.shift();

const padding = code[0].match(/^(\s)*/g)[0].length;
document.querySelector('[data-example-hljs]').innerText = code.map(line => line.slice(padding)).join('\n');

for (let block of document.querySelectorAll('pre code'))
  hljs.highlightBlock(block);
