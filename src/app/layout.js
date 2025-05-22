import './globals.css';
import { Montserrat, Open_Sans } from 'next/font/google';

// Определяем шрифты Open Sans
const openSans = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

// Определяем шрифты Montserrat
const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Метаданные страницы, включая директивы для поисковых роботов
export const metadata = {
  title: 'Мотивационная схема для аналитика',
  description: 'Находите маржинальные позиции и зарабатывайте!',
  robots: {
    index: false, // Запрещает индексацию страницы
    follow: false, // Запрещает переходить по ссылкам на странице
    nocache: true, // Просит поисковики не кэшировать страницу
    googleBot: { // Специальные директивы для Googlebot
      index: false,
      follow: false,
      noimageindex: true, // Запрещает индексацию изображений
      'max-video-preview': -1, // Отключает превью видео
      'max-snippet': -1, // Отключает сниппеты текста
    },
  },
  // =================================================================
};

// Корневой макет приложения
export default function RootLayout({
  children,
}) {
  return (
    <html lang="ru" className={`${openSans.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
