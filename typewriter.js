const sentence = "hello there from lighthouse labs";
const newSentence = sentence + '\n';

let waitTime = 50;
for (const char of newSentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, waitTime);
  waitTime += 50;
}