const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * This script prompts the user for a folder name and creates a new directory
 * with that name. Inside this directory, it creates an 'assets' subdirectory,
 * and three files: 'index.html', 'script.js', and 'styles.css'.
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the name of the folder: ', (folderName) => {
    const folderPath = path.join(__dirname, '..', folderName);

    // Create the main folder
    fs.mkdir(folderPath, (err) => {
        if (err) {
            console.error('Error creating folder:', err);
        } else {
            console.log('Folder created successfully');

            // Create the assets folder
            fs.mkdir(path.join(folderPath, 'assets'), (err) => {
                if (err) {
                    console.error('Error creating assets folder:', err);
                } else {
                    console.log('Assets folder created successfully');

                    // Create index.html file
                    fs.writeFile(path.join(folderPath, 'index.html'), '', (err) => {
                        if (err) {
                            console.error('Error creating index.html:', err);
                        } else {
                            console.log('index.html created successfully');
                        }
                    });

                    // Create script.js file
                    fs.writeFile(path.join(folderPath, 'script.js'), '', (err) => {
                        if (err) {
                            console.error('Error creating script.js:', err);
                        } else {
                            console.log('script.js created successfully');
                        }
                    });

                    // Create styles.css file
                    fs.writeFile(path.join(folderPath, 'styles.css'), '', (err) => {
                        if (err) {
                            console.error('Error creating styles.css:', err);
                        } else {
                            console.log('styles.css created successfully');
                        }
                    });
                }
            });
        }
    });

    rl.close();
});
