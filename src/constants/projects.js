import LearnKeyboard from '../images/Learn-keyboard.jpg';
import MessageTemplateEditor from '../images/Message-Template-Editor.jpg';
import MandelbrotCanvasReact from '../images/Mandelbrot-Canvas-React.jpg';
import MoviesExplorer from '../images/Movies-Explorer.jpg';
import Mesto from '../images/Mesto.jpg';
import RussianTravel from '../images/RussianTravel.jpg';
import HowToLearn from '../images/HowToLearn.jpg';
import Portfolio from '../images/Portfolio.jpg';

const projects = {
  educationalProjects: [
    {
      id: 0,
      name: 'Mesto',
      about: 'Это интерактивная платформа, созданная для обмена фотографиями и местами, которые тебе нравятся. Ты можешь загружать ссылки на свои фотографии, исследовать различные места и делиться своими впечатлениями с другими пользователями.',
      note: 'Зарегистрируйтесь для полной функциональности.',
      techs: 'React, React Router, Express, MongoDB, JWT.',
      preview: Mesto,
      link: 'https://www.extra-develop.ru/mesto/',
      gitHubLink: 'https://github.com/yryryk/react-mesto-api-full-gha'
    },
    {
      id: 1,
      name: 'Movies Explorer',
      about: 'Дипломная работа, Веб-разработчик, Яндекс Практикум',
      note: 'Зарегистрируйтесь для полной функциональности. Обратите внимание на оригинальную анимацию кнопки бургер меню.',
      techs: 'React, React Router, Express, MongoDB, JWT.',
      preview: MoviesExplorer,
      link: 'https://www.extra-develop.ru/movies-explorer/',
      gitHubLink: [
        {
          id: 0,
          name: 'фронтенд',
          link: 'https://github.com/yryryk/movies-explorer-frontend',
        },
        {
          id: 1,
          name: 'бэкенд',
          link: 'https://github.com/yryryk/movies-explorer-api',
        },
      ]
    },
    {
      id: 2,
      name: 'Russian Travel',
      about: 'Откройте для себя невероятную красоту России с нашим сайтом "Путешествие по России"!',
      note: 'Типовой одностраничный сайт.',
      techs: 'HTML5, CSS3, Flex, Grid, Pseudo-classes, Адаптивная верстка, PerfectPixel.',
      preview: RussianTravel,
      link: 'https://www.extra-develop.ru/russian-travel/',
      gitHubLink: 'https://github.com/yryryk/russian-travel'
    },
    {
      id: 3,
      name: 'How To Learn',
      about: 'Мы живем в эпоху информационного взрыва, где умение эффективно учиться является ключом к успеху. Но как развить эту навык? Как научиться учиться самому? У нас есть ответы на все ваши вопросы! На нашей веб-странице вы найдете широкий спектр полезных материалов, стратегий и техник, которые помогут вам стать эффективным учащимся.',
      note: 'Типовой одностраничный сайт.',
      techs: 'HTML5, CSS3.',
      preview: HowToLearn,
      link: 'https://www.extra-develop.ru/how-to-learn/',
      gitHubLink: 'https://github.com/yryryk/how-to-learn/',
    },
  ],
  petProjects: [
    {
      id: 0,
      name: 'Learn keyboard',
      about: 'Это десктопное веб-приложение для обучения слепой печати на клавиатуре. Вам предоставляется случайный символ, и вы должны нажать его на своей клавиатуре. На экране отображается изображение клавиатуры с нажатой клавишей и той, которую необходимо нажать. Стрелка между ними указывает на правильное направление.',
      note: 'Язык клавиатуры может быть RU или ENG(US).\u000AСлучайные символы появляются в самописной карусели барабанного типа.',
      techs: 'React, Canvas.',
      preview: LearnKeyboard,
      link: 'https://www.extra-develop.ru/learn-keyboard/',
      gitHubLink: 'https://github.com/yryryk/learn-keyboard/',
    },
    {
      id: 1,
      name: 'Portfolio',
      about: 'Реализация идеи сайта-портфолио для быстрого ознакомления с выполненными проектами.',
      note: 'Задеплоено, настроено, всё работает.',
      techs: 'React, Yandex Cloud, Nginx, timeweb.',
      preview: Portfolio,
      link: 'https://www.extra-develop.ru/',
      gitHubLink: 'https://github.com/yryryk/portfolio/',
    },
    {
      id: 2,
      name: 'Mandelbrot Canvas React',
      about: 'Приложение для визуального ознакомления с множеством Мандельброта с возможностью масштабирования и изменения цветовой схемы. Увеличивайте приграничные области, углубляйтесь в спиральные туннели и заглядывайте в труднодоступные места в поисках необычных картинок.',
      note: 'Требуется доработка приложения для увеличения проиводительности и создания дополнительной фунциональности.',
      techs: 'React, Canvas.',
      preview: MandelbrotCanvasReact,
      link: 'https://www.extra-develop.ru/mandelbrot/',
      gitHubLink: 'https://github.com/yryryk/mandelbrot-canvas-react',
    },
    {
      id: 3,
      name: 'Message Template Editor',
      about: 'Позволяет создать текст с помощью каскада условных конструкций и оценить результат в отдельном виджете. Может применяться для создания персонализированных рассылок',
      note: 'Тестовое задание. Незавершено.',
      techs: 'React, TypeScript.',
      preview: MessageTemplateEditor,
      link: 'https://www.extra-develop.ru/mte/',
      gitHubLink: 'https://github.com/yryryk/MTE/',
    },
  ],
};

export default projects;


