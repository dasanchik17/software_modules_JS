// Массив вопросов
const arrayOfQuestions = [
  "Сколько будет 2 + 2? Ответ: если ты ответил 4, то ты прав.",
  "Чему равен корень из 9? Ответ: если ты ответил 3, то ты прав.",
  "Сколько будет 2 в 5-й степени? Ответ: если ты ответил 32, то ты прав.",
];

// функция генерации вопросов
const generatingQuestions = () => {
  for (let i = 0; i < arrayOfQuestions.length; i++) {
    prompt(arrayOfQuestions[i]);
  }
};

generatingQuestions();
