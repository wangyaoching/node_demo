const Xray = require('x-ray'); // 路徑下的檔案使用 require(./name.js) 
const x = Xray(); 
 
 
x('https://kiki.ccu.edu.tw/~ccmisp06/Course/5304.html','table > tr',[ 
    { 
    NO:'td:nth-child(2)', 
    courseName:'td:nth-child(4)', 
    teacher:'td:nth-child(5)', 
    } 
]).write('./dist/course.json'); 
 
