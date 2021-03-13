// const express = require ('express');

// const app = express();
// const PORT = 5000;


// const news = [
//     {
//         title: 'В кр прошли выборы',
//         content: 'лдорпаролоримпрол',
//         date: new Date(),
//     }
// ]


// app.get('/news', async (req, res) => {
//     try {
// res.status(200).json({
//     message: 'Новости за последние 12 часов',
//     news: ['Новость 1', 'Новость 2']
// })
//     } catch (e) {

//     }
// });

// app.listen(PORT,() =>{
//     console.log('Backend запущен! на порту : ' + PORT)
// });





// const express = require('express');
// const app = express();

// const PORT = 5000;


// const heroes = [
//     {
//         name: 'Captain America',


//     }
// ]
// app.get('/heroes', async(req,res) => {
//     try {
//         res.status(200).json({
//         message: 'Герои Marvel',
//             heroes: ['Captain America', 'Iron Man', 'etc']
//         })
//             } catch (e) {

//             }
//         });

// app.listen(PORT,() =>{
//         console.log('Backend запущен! на порту : ' + PORT)
//     });



const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {router} = require('./router/api')

app.use(bodyParser.json())
app.use(router);

const PORT = 6667;

app.listen(PORT, () => {
    console.log(`Приложение запущено на ${PORT} порту`);
})
