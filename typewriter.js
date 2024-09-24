const sentence = "hello there from lighthouse labs";
const delayArr =[];
for (let i = 0; i < sentence.length; i++) {
  delayArr.push(i*50);
}
let charIndex =0;

delayArr.forEach((delay) => {
  setTimeout(() => {
    process.stdout.write(sentence[charIndex]);
    charIndex++;
    if(charIndex === sentence.length)
    {
      console.log("\n");
    }
  }, delay);
  
});
