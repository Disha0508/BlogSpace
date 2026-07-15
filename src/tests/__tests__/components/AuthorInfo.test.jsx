import { render, screen } from "@testing-library/react";
import AuthorInfo from "./AuthorInfo";

const mockAuthor = {
  name: "Иван Петров",
  bio: "Frontend-разработчик с опытом более 5 лет",
};

describe("Компонент AuthorInfo", () => {
  test("отображает имя и био автора", () => {
    render(<AuthorInfo author={mockAuthor} />);

    expect(screen.getByText("Иван Петров")).toBeInTheDocument();
    expect(
      screen.getByText("Frontend-разработчик с опытом более 5 лет"),
    ).toBeInTheDocument();
  });

  test('имеет класс "author"', () => {
    const { container } = render(<AuthorInfo author={mockAuthor} />);
    expect(container.firstChild).toHaveClass("author");
  });
});
