const child_process = require('child_process');
const fs = require('fs');
const path = require('path');

fs.readdir('/DashiumOS/apps/', (err, files) => {
    files.forEach(file => {
        console.log(file);

        child_process.exec(`bash ${__dirname.replace(/\\/g, '/')}/updateALL.sh ${file}`, (err, stdout) => {
            console.log(err, stdout);
        });
    });
});