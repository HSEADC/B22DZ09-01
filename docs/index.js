/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener("DOMContentLoaded", function () {
  handleMenu();
  handleFilter();
  handleTests();
});

function handleMenu() {
  var searchInput = document.getElementById('Q_SearchField');
  var searchResults = document.getElementById('C_SearchResults'); // Массив с вариантами результатов поиска

  var searchOptions = ["Angels Wings — самые лучшие леса для правильного поиска | Статья", "Белый гриб | ГрибВики", "Бледная поганка | ГрибВики", "Волнушка | ГрибВики", "Галерина окаймлённая | ГрибВики", "Голубцы | Рецепт", "Грибная безопасность | Тест", "Грибной отвар | Рецепт", "Грибной страх | Памятка", "Грибы в искусстве: влияние на литературу, живопись и музыку | Статья", "Груздь | ГрибВики", "Жареные шампиньоны | Рецепт", "Жульен | Рецепт", "Как выбрать экипировку? | Статья", "Как привить детям любовь к грибным походам? | Статья", "Календарь грибной охоты | Тест", "Китайские брокколи | Рецепт", "Лазанья | Рецепт", "Лисичка | ГрибВики", "Ложная лисичка | ГрибВики", "Ложный боровик | ГрибВики", "Ложный подберёзовик | ГрибВики", "Ложный подосиновик | ГрибВики", "Ложный опёнок | ГрибВики", "Маслёнок | ГрибВики", "Мухомор | ГрибВики", "Наборы для выращивания Pink Oyster | Статья", "Овощное рагу | Рецепт", "Одежда грибника | Памятка", "Опёнок | ГрибВики", "Палента | Рецепт", "Подберёзовик | ГрибВики", "Подосиновик | ГрибВики", "Путь грибника | Памятка", "Рыжик | ГрибВики", "Самые практичные дождевики для грибных походов | Статья", "Свинушка | ГрибВики", "Скумбрия | Рецепт", "Сморчок | ГрибВики", "Съедобный или ядовитый | Тест", "Тихая охота (Топ-5 правил) | Статья", "Timberland x Nina Chanel — свежий выбор для грибников? | Статья", "Toxic Mush | Памятка", "Феттучини | Рецепт", "Хумус | Рецепт", "Шампиньон | ГрибВики" // Добавлять сюда все варианты результатов поиска
  ]; // Функция для обновления результатов поиска при вводе текста в поле

  searchInput.addEventListener('input', function () {
    var searchTerm = this.value.toLowerCase(); // Очищает предыдущие результаты поиска

    searchResults.innerHTML = ''; // Фильтрует варианты поиска в соответствии с введенным текстом

    var filteredOptions = searchOptions.filter(function (option) {
      return option.trim().toLowerCase().startsWith(searchTerm);
    }); // Отображает найденные результаты

    filteredOptions.forEach(function (option) {
      var resultItem = document.createElement('a');
      var url = getPageUrl(option);
      resultItem.href = url;
      resultItem.textContent = option;
      searchResults.appendChild(resultItem);
    }); // Функция для возврата URL-адреса страницы для каждой позиции

    function getPageUrl(option) {
      // Возвращает URL-адрес страницы для каждой позиции
      if (option === 'Как выбрать экипировку? | Статья') {
        return 'articles/ekipirovka.html';
      } else if (option === 'Феттучини | Рецепт') {
        return 'recipes/fettuchini.html';
      } else if (option === 'Toxic Mush | Памятка') {
        return 'memos/toxic_mush.html';
      } else if (option === 'Одежда грибника | Памятка') {
        return 'memos/odezhda_gribnika.html';
      } else if (option === 'Грибной страх | Памятка') {
        return 'memos/gribnoi_strah.html';
      } else if (option === 'Путь грибника | Памятка') {
        return 'memos/puti_gribnika.html';
      } else if (option === 'Самые практичные дождевики для грибных походов | Статья') {
        return 'articles/dozhdeviki.html';
      } else if (option === 'Наборы для выращивания Pink Oyster | Статья') {
        return 'articles/pink_oyster.html';
      } else if (option === 'Angels Wings — самые лучшие леса для правильного поиска | Статья') {
        return 'articles/angels_wings.html';
      } else if (option === 'Как привить детям любовь к грибным походам? | Статья') {
        return 'articles/deti_i_pohodi.html';
      } else if (option === 'Timberland x Nina Chanel — свежий выбор для грибников? | Статья') {
        return 'articles/timberland.html';
      } else if (option === 'Грибы в искусстве: влияние на литературу, живопись и музыку | Статья') {
        return 'articles/gribi_v_iskusstve.html';
      } else if (option === 'Тихая охота (Топ-5 правил) | Статья') {
        return 'articles/tihaya_ohota.html';
      } else if (option === 'Жареные шампиньоны | Рецепт') {
        return 'recipes/zharenie_shampinioni.html';
      } else if (option === 'Китайские брокколи | Рецепт') {
        return 'recipes/kitaiskie_brokkoli.html';
      } else if (option === 'Грибная безопасность| Тест') {
        return 'tests/gribnaya_bezopasnost.html';
      } else if (option === 'Календарь грибной охоты | Тест') {
        return 'tests/kalendar.html';
      } else if (option === 'Съедобный или ядовитый | Тест') {
        return 'tests/sedobnie_ili_yadovitie.html';
      } else if (option === 'Белый гриб | ГрибВики') {
        return 'gribwiki/beliy_grib.html';
      } else if (option === 'Лисичка | ГрибВики') {
        return 'gribwiki/zolotie_lisichki.html';
      } else if (option === 'Сморчок | ГрибВики') {
        return 'gribwiki/smorchok.html';
      } else if (option === 'Подосиновик | ГрибВики') {
        return 'gribwiki/podosinovik.html';
      } else if (option === 'Ложный подберёзовик | ГрибВики') {
        return 'gribwiki/lozhniy_podberezovik.html';
      } else if (option === 'Бледная поганка | ГрибВики') {
        return 'gribwiki/blednaya_poganka.html';
      } else if (option === 'Опёнок | ГрибВики') {
        return 'gribwiki/openok.html';
      } else if (option === 'Груздь | ГрибВики') {
        return 'gribwiki/gruzd.html';
      } else if (option === 'Мухомор | ГрибВики') {
        return 'gribwiki/muhomor.html';
      } else if (option === 'Шампиньон | ГрибВики') {
        return 'gribwiki/shampinion.html';
      } else if (option === 'Ложный опёнок | ГрибВики') {
        return 'gribwiki/lozhniy_openok.html';
      } else if (option === 'Ложная лисичка | ГрибВики') {
        return 'gribwiki/lozhnaya_lisichka.html';
      } else if (option === 'Галерина окаймлённая | ГрибВики') {
        return 'gribwiki/galerina_okaimlennaya.html';
      } else if (option === 'Ложный подосиновик | ГрибВики') {
        return 'gribwiki/lozhniy_podosinovik.html';
      } else if (option === 'Волнушка | ГрибВики') {
        return 'gribwiki/volnushka.html';
      } else if (option === 'Свинушка | ГрибВики') {
        return 'gribwiki/svinushka.html';
      } else if (option === 'Рыжик | ГрибВики') {
        return 'gribwiki/rizhik.html';
      } else if (option === 'Маслёнок | ГрибВики') {
        return 'gribwiki/maslenok.html';
      } else if (option === 'Ложный боровик | ГрибВики') {
        return 'gribwiki/lozhniy_borovik.html';
      } else if (option === 'Подберёзовик | ГрибВики') {
        return 'gribwiki/podberezovik.html';
      } else if (option === 'Голубцы | Рецепт') {
        return 'recipes/golubci.html';
      } else if (option === 'Грибной отвар | Рецепт') {
        return 'recipes/gribnoi_otvar.html';
      } else if (option === 'Хумус | Рецепт') {
        return 'recipes/humus.html';
      } else if (option === 'Лазанья | Рецепт') {
        return 'recipes/lazania.html';
      } else if (option === 'Овощное рагу | Рецепт') {
        return 'recipes/ovoshnoe_ragu.html';
      } else if (option === 'Палента | Рецепт') {
        return 'recipes/palenta.html';
      } else if (option === 'Скумбрия | Рецепт') {
        return 'recipes/skumbria.html';
      } else if (option === 'Жульен | Рецепт') {
        return 'recipes/zhulien.html';
      } // Добавлять сюда другие условия

    } // Показывает результаты поиска, если они есть


    if (filteredOptions.length > 0) {
      searchResults.style.display = 'flex';
    } else {
      searchResults.style.display = 'none';
    }
  }); // Скрывает результаты поиска при клике вне поля поиска

  document.addEventListener('click', function (event) {
    if (!searchResults.contains(event.target) && event.target !== searchInput) {
      searchResults.style.display = 'none';
    }
  });
}

function handleFilter() {
  var filterButtons = document.querySelectorAll('.A_Filter');
  var articles = document.querySelectorAll('.MainCardArticle, .O_CardArticle, .O_CardRecipe, .O_CardLargeRecipe, .O_CardGrib, .O_CardLargeGrib');
  var cardContainer = document.querySelector('.S_CardsArticle');
  var photoArticles = document.querySelectorAll('.A_PhotoArticle'); // Устанавливаем начальный фильтр

  applyFilter('all');
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');
      applyFilter(filter); // Изменяем классы кнопок при клике

      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active'); // Изменяем flex-direction в зависимости от фильтра

      if (filter === 'all') {
        cardContainer.style.flexDirection = 'column';
      } else {
        cardContainer.style.flexDirection = 'row';
      } // Изменяем высоту картинки в зависимости от фильтра


      photoArticles.forEach(function (photo) {
        if (filter === 'all') {
          photo.style.height = 'auto';
        } else {
          photo.style.height = '28vw';
        }
      });
    });
  });

  function applyFilter(filter) {
    articles.forEach(function (article) {
      if (filter === 'all' || article.classList.contains(filter)) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  }
}

function handleTests() {
  var currentQuestion = 0;
  var score = 0;
  var questions = document.querySelectorAll('.O_TestQuestion');
  var totalQuestions = questions.length;
  questions.forEach(function (question, i) {
    var answers = question.querySelectorAll('.A_TestAnswer');
    answers.forEach(function (answer) {
      answer.addEventListener('click', function (e) {
        var isCorrect = answer.classList.contains('correct');

        if (isCorrect) {
          score++;
          answer.classList.add('green');
        } else {
          answer.classList.add('red');
          var correctAnswer = question.querySelector('.A_TestAnswer.correct');
          correctAnswer.classList.add('green');
        }

        answers.forEach(function (ans) {
          return ans.style.pointerEvents = 'none';
        });
      });
    });
    var nextButton = question.querySelector('#Q_NextQuestion');
    var prevButton = question.querySelector('#Q_PreviousQuestion');
    nextButton && nextButton.addEventListener('click', function (e) {
      currentQuestion++;
      updateQuestion();
    });
    prevButton && prevButton.addEventListener('click', function (e) {
      currentQuestion--;
      updateQuestion();
    });
  });
  var finishButton = document.querySelector('#Q_FinishTest');
  finishButton && finishButton.addEventListener('click', function (e) {
    var testResults = document.querySelector('.O_TestResults');
    questions[currentQuestion].style.display = 'none';
    testResults.style.display = 'flex';
    showResults();
  });

  function showResults() {
    var result = document.querySelector('#Q_TestResult');
    var percentage = Math.round(score / totalQuestions * 100);
    result.textContent = "".concat(percentage, "%");
  }

  updateQuestion();

  function updateQuestion() {
    questions.forEach(function (question, i) {
      if (i === currentQuestion) {
        question.style.display = 'flex';
      } else {
        question.style.display = 'none';
      }
    });
  }
}
/******/ })()
;