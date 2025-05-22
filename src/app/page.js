export default function Home() {
  return (
<main className="min-h-screen bg-[#f8f8f8] text-[#333333] font-['Open Sans']">
      {/* Секция хедера */}
      <header className="bg-[#1E434C] bg-gradient-to-br from-[#1E434C] to-[#8D230F] text-white py-20 text-center shadow-lg">
        <div className="container mx-auto px-5">
          {/* Заголовок страницы */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Montserrat'] mb-4">МОТИВАЦИОННАЯ СХЕМА ДЛЯ АНАЛИТИКА ПО ТОВАРАМ В СНАБЖЕНИИ</h1>          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl opacity-90">Находите маржинальные позиции и зарабатывайте!</p>
        </div>
      </header>

      {/* Секция "О Задании" */}
      <section className="py-16 bg-white border-b border-gray-200 rounded-lg shadow-sm mx-4 my-8 md:mx-auto max-w-4xl">
        <div className="container mx-auto px-5">
          {/* Заголовок секции */}
          <h2 className="text-4xl font-bold font-['Montserrat'] text-[#8D230F] text-center mb-10">Нам нужен аналитик, способный находить маржинальные позиции!</h2>
          {/* Описание задачи */}
          <p className="text-lg leading-relaxed mb-6">Если вы умеете глубоко анализировать рынок, поставщиков и условия, это задание для вас. Мы ищем специалистов, готовых находить высокомаржинальные позиции (оборудование, стройматериалы, металлопрокат) для нашего отдела снабжения.</p>

          {/* Подзаголовок "Ваша задача" */}
          <h3 className="text-3xl font-semibold font-['Montserrat'] text-[#1E434C] mb-6">Ваша задача:</h3>
          <ul className="list-disc list-inside text-lg mb-8 space-y-2">
            <li>Найти 10 уникальных товаров (оборудование, стройматериалы, металлопрокат).</li>
            <li>Предоставить по каждому товару подробную аналитику согласно нашему регламенту.</li>
          </ul>
          {/* Подзаголовок "Типы маржинальности" */}
          <h4 className="text-2xl font-semibold font-['Montserrat'] text-[#9B4F0F] mb-4">Мы ищем два типа маржинальности:</h4>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li><strong className="text-[#8D230F]">Вариант 1:</strong> Товары с маржинальностью от 15% до 20%.</li>
            <li><strong className="text-[#8D230F]">Вариант 2:</strong> Товары с маржинальностью от 21% до 30%.</li>
          </ul>
        </div>
      </section>

      {/* Секция "Условия выполнения и Регламент" */}
      <section className="py-16 bg-[#f8f8f8] border-b border-gray-200 rounded-lg shadow-sm mx-4 my-8 md:mx-auto max-w-4xl">
        <div className="container mx-auto px-5">
          {/* Заголовок секции */}
          <h2 className="text-4xl font-bold font-['Montserrat'] text-[#1E434C] text-center mb-10">Как выполнить задание?</h2>
          {/* Срок выполнения и формат отчета */}
          <p className="text-lg leading-relaxed mb-4"><strong className="text-[#8D230F]">Срок выполнения:</strong> Неограничен. Работайте в удобном для вас темпе.</p>
          <p className="text-lg leading-relaxed mb-8"><strong className="text-[#8D230F]">Формат отчета:</strong> Google Таблица.</p>
          {/* Подзаголовок "Аналитика" */}
          <h3 className="text-3xl font-semibold font-['Montserrat'] text-[#1E434C] mb-6">В каждом отчете по товару должна быть следующая аналитика:</h3>
          <ol className="list-decimal list-inside text-lg space-y-3">
            <li><strong>Товар:</strong> Четкое наименование (например, &quot;Тепловая пушка дизельная 50кВт&quot;).</li>
            <li><strong>Поставщики:</strong> Минимум 4, желательно 10 поставщиков.</li>
            <li><strong>Регион:</strong> Указать регион покупки и продажи (например, &quot;Казань / МСК&quot;).</li>
            <li><strong>Цены:</strong> Сводная таблица цен от каждого поставщика. <span className="font-semibold text-green-600">Выгодные цены подсветить зеленым.</span></li>
            <li><strong>Счета/КП:</strong> Прикрепить сканы счетов или коммерческих предложений от поставщиков.</li>
            <li><strong>Условия сотрудничества:</strong> Указать способ оплаты, отсрочку, условия доставки для каждого поставщика.</li>
            <li><strong>Расчет маржи:</strong> Подробный расчет по формуле: <code className="bg-gray-200 p-1 rounded font-mono text-sm">(Продажная цена - (Закупка + Логистика)) / Себестоимость * 100%</code>.</li>
            <li><strong>Источники и обоснование:</strong> Почему выбран именно этот товар, какие источники анализа использовались (Google, тендеры, Авито и т.д.).</li>
            <li><strong>Целевая аудитория:</strong> Описать потребителя и уровень заинтересованности (прорабы, заводы, частник, строитель, госкомпания).</li>
          </ol>
        </div>
      </section>

      {/* Секция "Приоритетные Направления" */}
      <section className="py-16 bg-white border-b border-gray-200 rounded-lg shadow-sm mx-4 my-8 md:mx-auto max-w-4xl">
        <div className="container mx-auto px-5">
          {/* Заголовок секции */}
          <h2 className="text-4xl font-bold font-['Montserrat'] text-[#8D230F] text-center mb-10">Какие товары нас интересуют?</h2>
          <p className="text-lg leading-relaxed mb-8">Мы открыты к вашим предложениям, но особенно нас интересуют следующие категории:</p>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li><strong className="text-[#1E434C]">Оборудование:</strong> Строительное, инженерное, вентиляция, отопление – только в крупном опте.</li>
            <li><strong className="text-[#1E434C]">Крупногабаритные материалы:</strong> Где логистика является важным фактором маржи.</li>
            <li><strong className="text-[#1E434C]">Узкие ниши:</strong> Спецпрофиль, нестандартные позиции, продукция малых заводов.</li>
            <li><strong className="text-[#1E434C]">Стройка + Оборудование:</strong> Комплексные поставки под объекты.</li>
            <li><strong className="text-[#1E434C]">Металлопрокат редких типоразмеров:</strong> Лист 10 мм, нестандартные балки, толстостенная труба.</li>
            <li><strong className="text-[#1E434C]">Кровля:</strong> Доборные элементы, оцинковка, нестандартные цвета.</li>
            <li><strong className="text-[#1E434C]">Нержавейка:</strong> Пруты, фланцы, фитинги для промышленной сферы.</li>
            <li><strong className="text-[#1E434C]">Узкие рынки РФ и СНГ.</strong></li>
          </ul>
          <p className="text-base italic text-gray-600 border-l-4 border-[#C99E10] pl-4 mt-10 rounded-sm">
            *Предложения по товарным группам приветствуются. Эти направления носят рекомендательный характер. В процессе работы вы можете задавать вопросы и обсуждать действия с нами.
          </p>
        </div>
      </section>

      {/* Секция "Условия Оплаты" */}
      <section className="py-16 bg-[#f8f8f8] border-b border-gray-200 rounded-lg shadow-sm mx-4 my-8 md:mx-auto max-w-4xl">
        <div className="container mx-auto px-5">
          {/* Заголовок секции */}
          <h2 className="text-4xl font-bold font-['Montserrat'] text-[#1E434C] text-center mb-10">Ваше вознаграждение</h2>
          <p className="text-lg leading-relaxed mb-8">Оплата производится за каждую успешно принятую партию из 10 товаров, согласно их маржинальности:</p>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex-1 min-w-[300px] max-w-md bg-white border-2 border-[#C99E10] rounded-lg p-8 text-center shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold font-['Montserrat'] text-[#1E434C] mb-4">За 10 товаров с маржинальностью 15-20%:</h3>
              <p className="text-5xl font-bold text-[#C99E10]">5 000 руб.</p>
            </div>
            <div className="flex-1 min-w-[300px] max-w-md bg-white border-2 border-[#C99E10] rounded-lg p-8 text-center shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold font-['Montserrat'] text-[#1E434C] mb-4">За 10 товаров с маржинальностью 21-30%:</h3>
              <p className="text-5xl font-bold text-[#C99E10]">8 000 руб.</p>
            </div>
          </div>
          {/* Подзаголовок "Процесс оплаты" */}
          <h3 className="text-3xl font-semibold font-['Montserrat'] text-[#1E434C] mb-6">Процесс оплаты:</h3>
          <ol className="list-decimal list-inside text-lg space-y-3">
            <li>Вы предоставляете аналитику.</li>
            <li>Мы проверяем данные (от 1 до 5 дней).</li>
            <li>При отсутствии ошибок и подтверждении всех данных, оплата производится на вашу карту.</li>
          </ol>
        </div>
      </section>

      {/* Секция "Контакты" */}
      <section className="py-20 bg-[#1E434C] text-white text-center rounded-t-lg shadow-lg mx-4 my-8 md:mx-auto max-w-4xl">
        <div className="container mx-auto px-5">
          {/* Заголовок секции */}
          <h2 className="text-4xl font-bold font-['Montserrat'] text-[#C99E10] mb-8">Готовы начать?</h2>
          <p className="text-xl leading-relaxed mb-10">Присоединяйтесь к нашей команде аналитиков! Если у вас есть вопросы или вы готовы приступить к работе, свяжитесь с нами удобным для вас способом.</p>
          {/* Контактные данные */}
          <address className="not-italic text-lg mb-10 space-y-4">
            <p><strong>Контактное лицо:</strong> Наталья</p>
            <p><strong>Email:</strong> <a href="mailto:snabosb@gmail.com" className="text-white hover:text-[#C99E10] font-semibold">snabosb@gmail.com</a></p>
            <p><strong>Телефон:</strong> +7 (812) 223-48-61</p>
            <p><strong>Telegram:</strong> <a href="https://t.me/natagera0705" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C99E10] font-semibold">@natagera0705</a></p>
          </address>
          {/* Кнопка призыва к действию */}
          <a href="mailto:snabosb@gmail.com" className="inline-block bg-[#C99E10] text-[#1E434C] py-4 px-8 rounded-lg font-bold text-lg uppercase shadow-lg hover:bg-[#9B4F0F] hover:text-white transition-colors duration-300">
            Написать нам на Email
          </a>
        </div>
      </section>

      {/* Секция футера */}
      <footer className="bg-[#1E434C] text-gray-400 py-8 text-center text-sm">
        <div className="container mx-auto px-5">
          <p>&copy; 2025 Все права защищены.</p>
        </div>
      </footer>
    </main>
  );
}