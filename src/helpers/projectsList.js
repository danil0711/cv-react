
import project01 from "./../img/projects/self_projects/01.jpg"
import project01Big from "./../img/projects/self_projects/01-big.jpg"
import project02 from "./../img/projects/self_projects/02.jpg"
import project02Big from "./../img/projects/self_projects/02-big.jpg"
import project03 from "./../img/projects/self_projects/03.jpg"
import project03Big from "./../img/projects/self_projects/03-big.jpg"
import project04 from "./../img/projects/self_projects/04.jpg"
import project04Big from "./../img/projects/self_projects/04-big.jpg"
import project05 from "./../img/projects/self_projects/05.jpg"
import project05Big from "./../img/projects/self_projects/05-big.jpg"



const projects = [
    {
        title: 'Генератор цветов',
        skills: 'HTML + CSS, Bootstrap5.0, JS(ES6), localStorage.',
        description: 'Сайт, генерирующий RGB цвет. Создан для закрепления JS, CSS и HTML навыков. Сайт гененерирует цвета по RGB коду, хеширует их в URL, при обновлении сайта берет RGB код из URL. Можно блокировать некоторые цвета для того, чтобы при обновлении они не менялись. ',
        img: project01,
        bigImg: project01Big,
        gitHubLink: 'https://github.com/danil0711/colorGenerator',
        gitHubPages: 'https://danil0711.github.io/colorGenerator'
    },
    {
        title: 'Суши - шоп',
        skills: 'HTML + CSS, Bootstrap5.0, JS(ES6): DOM Navigation, events listeners, etc.',
        description: 'Прототип Интернет - магазина с интерактивной корзиной товаров. Написан на JS, дизайн сделан с использованием Bootstrap 5.0.',
        img: project02,
        bigImg: project02Big,
        gitHubLink: 'https://github.com/danil0711/WebShop',
        gitHubPages: 'https://danil0711.github.io/WebShop/'
    },
    {
        title: 'ToDo List (список дел)',
        skills: 'HTML + CSS, Bootstrap5.0, JS(ES6): DOM Navigation, events listeners, localStorage, JSON.',
        description: "Каждый начинающий фронтенд-разработчик рано или поздно создает свой собственный список задач, как самый типичный пет-проект. Процесс создания улучшил мои навыки работы с HTML+CSS, а также и навыки работы с JS, были применены следующие функции языка: прослушиватели событий, навигация по DOM, работа с localStorage (при обновлении страницы, таски(задачи) не пропадают, а подгружаются из localStorage браузера, вместе с конфигами.",
        img: project03,
        bigImg: project03Big,
        gitHubLink: 'https://github.com/danil0711/ToDoList',
        gitHubPages: 'https://danil0711.github.io/ToDoList/'
    },
    {
        title: 'ToDo List (список дел)',
        skills: 'HTML + CSS, Bootstrap5.0, JS(ES6)',
        description: 'Отображение QR-кода по API запросу. Небольшой сайт, созданный для улучшения навыков прослушивания и обработки событий в JavaScript.',
        img: project04,
        bigImg: project04Big,
        gitHubLink: 'https://github.com/danil0711/QR-generator',
        gitHubPages: 'https://danil0711.github.io/QR-generator/'
    },
    {
        title: 'ToDo List (список дел)',
        skills: "HTML + CSS, Bootstrap5.0, JS(ES6)",
        description: "Простой конвертатор валют. Конвертирует значение из рублей в доллары, евро и фунты стерлингов, отображает актуальный курс данных валют с помощью fetch-API запроса. Создан в целях отработки навыков DOM navigation и events listeners в языке JavaScript.",
        img: project05,
        bigImg: project05Big,
        gitHubLink: 'https://github.com/danil0711/simpleconverte',
        gitHubPages: 'https://danil0711.github.io/simpleconverter/'
    },



    
]

export {projects}