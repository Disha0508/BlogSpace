export const posts = [
  {
    id: 1,
    title: "Знакомство с React",
    content:
      "React — это библиотека для создания пользовательских интерфейсов...",
    author: {
      name: "Иван Петров",
      bio: "Frontend-разработчик",
    },
    tags: ["react", "javascript"],
    date: "2024-03-10",
  },
  {
    id: 2,
    title: "Почему Vite быстрее Webpack",
    content: "Vite использует ES-модули и мгновенный запуск dev-сервера...",
    author: {
      name: "Анна Смирнова",
      bio: "Web-инженер",
    },
    tags: ["vite", "tools"],
    date: "2024-03-12",
  },
  {
    id: 3,
    title: "Основы Hooks (useState, useEffect)",
    content:
      "Хуки позволяют использовать состояние и другие возможности React без написания классов. useState управляет данными, а useEffect — побочными эффектами.",
    author: {
      name: "Дмитрий Соколов",
      bio: "Fullstack-разработчик",
    },
    tags: ["react", "hooks"],
    date: "2024-03-15",
  },
  {
    id: 4,
    title: "Стилизация в React: CSS Modules vs Tailwind",
    content:
      "Выбор способа стилизации зависит от проекта. CSS Modules дают изоляцию стилей, а Tailwind ускоряет верстку прямо в JSX.",
    author: {
      name: "Елена Кузнецова",
      bio: "UI/UX Designer",
    },
    tags: ["css", "tailwind"],
    date: "2024-03-18",
  },
  {
    id: 5,
    title: "State Management: когда нужен Redux?",
    content:
      "Для небольших приложений достаточно Context API, но в крупных проектах Redux Toolkit помогает структурировать сложную логику данных.",
    author: {
      name: "Артем Волков",
      bio: "Senior Frontend Developer",
    },
    tags: ["react", "redux", "javascript"],
    date: "2024-03-20",
  },
  {
    id: 6,
    title: "Оптимизация рендеринга с useMemo и useCallback",
    content:
      "Эти хуки помогают избежать лишних перерисовок компонентов, мемоизируя тяжелые вычисления и ссылки на функции.",
    author: {
      name: "Мария Иванова",
      bio: "Performance Engineer",
    },
    tags: ["react", "optimization"],
    date: "2024-03-22",
  },
];
