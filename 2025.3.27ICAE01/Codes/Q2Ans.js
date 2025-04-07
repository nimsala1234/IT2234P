const students = require('./Data.js');

function getUniqueLanguages(students) {
    const languageSet = new Set();

    students.forEach(student => {
        student.Pro_languages.forEach(lang => {
            if(lang!="JS"){
                languageSet.add(lang)
            }
        });
    });

    return Array.from(languageSet);
}


console.log(getUniqueLanguages(students));