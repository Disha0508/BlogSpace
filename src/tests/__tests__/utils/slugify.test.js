import { slugify } from "../slugify";

describe("Функция slugify", () => {
  test("преобразует русский заголовок в slug", () => {
    expect(slugify("Знакомство с React")).toBe("знакомство-с-react");
    expect(slugify("Почему Vite быстрее Webpack")).toBe(
      "почему-vite-быстрее-webpack",
    );
  });

  test("обрабатывает заголовки с пунктуацией", () => {
    expect(slugify("State Management: когда нужен Redux?")).toBe(
      "state-management-когда-нужен-redux",
    );
    expect(slugify("Hello, World!!!")).toBe("hello-world");
  });

  test("обрабатывает пустую строку и пробелы", () => {
    expect(slugify("")).toBe("");
    expect(slugify("   ")).toBe("");
    expect(slugify("  Тест   ")).toBe("тест");
  });

  test("убирает множественные дефисы", () => {
    expect(slugify("React --- Hooks")).toBe("react-hooks");
  });
});
