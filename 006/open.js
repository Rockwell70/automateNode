const { platform } = require('os');
const { exec } = require('child_process');

const WINDOW_PLATFORM = 'win_32';

const osPlatform = platform();

const url = "https://www.axios.com/";

let command = `open -a "Google Chrome" ${url}`

exec(command)