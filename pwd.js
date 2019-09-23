

module.exports = function pwd() {
    process.stdout.write('prompt > ');
    const pwd = process.stdin.on('data', () => {
    
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
});
}
