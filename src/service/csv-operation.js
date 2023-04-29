const fs = require('fs');
const path = require('path');
const { Compound } = require("../models/compound.model");
const csv = require('csv-parser')

module.exports = {

    // Read CSV File
    addTableDataFromCsv: async () => {
        try {
            const filePath = path.join(appPath, 'assets/files/compound.csv');
            const results = [];
            fs.createReadStream(filePath).pipe(csv()).on('data', (data) => {
                results.push(data);
            }).on('end', () => {
                if (results.length) {
                    Compound.bulkCreate(results)
                        .then(() => console.log("Users data have been saved"))
                        .catch(error => {
                            console.log('error ==>>', error);
                        })
                }
            })
        } catch (error) {

        }
    }
}