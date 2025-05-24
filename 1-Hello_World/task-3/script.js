// Теперь перейдите в js-info.js, ответьте на вопросы ниже и выведите в модальном окне с помощью alert() ответы на данные вопросы (для каждого пункта требуется создавать отдельный alert() и в него указываем ответ на вопрос):

// Кто разработал язык программирования JavaScript?
// За сколько дней был разработан JavaScript?
// В каком году появился JavaScript?
// JavaScript — это то же самое, что и Java? (отвечайте либо «JavaScript — это Java», либо «JavaScript — это не Java»)
// Как называется спецификация JavaScript?

const arrayOfQuestions = [
  "Кто разработал язык программирования JavaScript?",
  "За сколько дней был разработан JavaScript?",
  "В каком году появился JavaScript?",
  "JavaScript — это то же самое, что и Java?",
  "Как называется спецификация JavaScript?",
];

const generatingQuestions = () => {
  for (let i = 0; i < arrayOfQuestions.length; i++) {
    prompt(arrayOfQuestions[i]);
  }
};

generatingQuestions();
