const args = process.argv.slice(2);
const argsAll = process.argv;
const [name] = args;

if (name === undefined) {
    console.error('Please pass a name, e.g. node hello.js William B');
    process.exit(0);
}

console.log(`Good day to you ${name}.`);
console.log(argsAll);