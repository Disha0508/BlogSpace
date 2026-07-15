import { render, screen, fireEvent } from "@testing-library/react";
import TagList from "./TagList";

describe("Компонент TagList", () => {
  const mockTags = ["react", "javascript", "vite"];
  const mockOnTagClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("отображает все теги с префиксом #", () => {
    render(<TagList tags={mockTags} onTagClick={mockOnTagClick} />);

    expect(screen.getByText("#react")).toBeInTheDocument();
    expect(screen.getByText("#javascript")).toBeInTheDocument();
    expect(screen.getByText("#vite")).toBeInTheDocument();
  });

  test("вызывает onTagClick при клике на тег", () => {
    render(<TagList tags={mockTags} onTagClick={mockOnTagClick} />);

    fireEvent.click(screen.getByText("#react"));

    expect(mockOnTagClick).toHaveBeenCalledTimes(1);
    expect(mockOnTagClick).toHaveBeenCalledWith("react");
  });

  test("отображает пустой список без ошибок", () => {
    render(<TagList tags={[]} onTagClick={mockOnTagClick} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument(); // или span
  });
});
