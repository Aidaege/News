const { DATABASE_NEWS } = require('../database/db')

exports.getNews = async (request, response) => {
    try {
        const lang = request.headers.language;
        const filteredNews = DATABASE_NEWS.filter((n) => {
            return n.lang === lang;
        })
        console.log(lang);

        response.status(200).json(filteredNews)
    } catch (e) {
        response.status(500).json(e.message);
    }
}


exports.getOneNews = async (req, res) => {
    try {
        const news = DATABASE_NEWS.find(news => news.id === req.params.newsId);
        
        if (!news) {
            return res.status(404).json('Ничего не найдено');
        }

        console.log('Получен  id', req.params.newsId)
        console.log('Получение одной новости');


        return res.status(200).json(news);
    } catch (e) {
        console.error(e.massage);
        res.status(500).json('Сервер упал');
    }
}

exports.createNews = async (req, res) => {
    try {
        const news = req.body;
        console.log(req.body);//новая новость

        news.date = new Date();

        console.log('Получили новость: ', news);
        DATABASE_NEWS.push(news);
        console.log('Сохранили новость, все новости: ', DATABASE_NEWS);

        res.status(201).json({
            message: 'Новость создана',
            allNews: DATABASE_NEWS
        });
    } catch (e) {
        console.log(e.message)
    }
}