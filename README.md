# Технічне завдання Tweets

  Відповідно до макету було реалізувано картки юзера. При клікові на кнопку Follow - текст змінюється на Following. Також змінюється колір кнопки. А до 
кількості фоловерів додається і новий. Тобто, початкова кількість складає 1,000,000 фоловерів. При клікові на кнопку буде 1,000,001. При оновлені сторінки 
фіксується кінцевий результат дій юзера. Тобто, якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається в стані Following із відповідним 
кольором, а кількість фоловерів НЕ зменшується до початкового значення. При повторному клікові на кнопку її текст та колір змінюються до початкового стану. 
Також змінюється і кількість фоловерів. Вона зменшується на 1 (1,000,000). В коді цифра 1,000,000 прописана одним значенням (1000001). В UI - виведено через 
кому (1,000,000).
  Для виконання завдання було створено персональний бекенд для розробки за допомогою UI-сервісу mockapi.io. Створено ресурс users, та описано об'єкт юзера, 
відповідно до ТЗ.
  Також була створена маршрутизація, використовуючи React Router. У застосунку повинні бути такі маршрути: 
  - '/' – компонент Home, домашня сторінка;
  - '/tweets' - компонент tweets, сторінка із відображенням твітів.
Якщо користувач зайшов за неіснуючим маршрутом, його перенаправляє на домашню сторінку. На сторінці tweets додана стрілка (кнопка Back), яка веде на головну сторінку.
  
  Також до проекту додана FavIcon та Title сторінки.
  
  До завдання була додана фільтрація із використанням можливостей UI-сервісу mockapi.io. Dropdown із 3 опціями: show all, follow, followings, де show all - показати всі твіти, follow - показати твіти, у яких стан follow та followings - показати твіти, у яких стан following
