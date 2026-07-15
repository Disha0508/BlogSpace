import { parseMarkdown } from "../markdown";

describe("Функция parseMarkdown", () => {
  test("преобразует жирный текст (text)", () => {
    expect(parseMarkdown("Это жирный текст")).toContain(
      "<strong>жирный</strong>",
    );
  });

  test("преобразует курсив (*text*)", () => {
    expect(parseMarkdown("Это *курсивный* текст")).toContain(
      "<em>курсивный</em>",
    );
  });

  test("преобразует заголовки", () => {
    expect(parseMarkdown("# Главный заголовок")).toContain(
      "<h1>Главный заголовок</h1>",
    );
    expect(parseMarkdown("## Подзаголовок")).toContain("<h2>Подзаголовок</h2>");
    expect(parseMarkdown("### Маленький заголовок")).toContain(
      "<h3>Маленький заголовок</h3>",
    );
  });

  test("обрабатывает комбинацию markdown", () => {
    const input = "# Заголовок\n**Жирный** и *курсив* текст";
    const result = parseMarkdown(input);

    expect(result).toContain("<h1>Заголовок</h1>");
    expect(result).toContain("<strong>Жирный</strong>");
    expect(result).toContain("<em>курсив</em>");
  });
});
