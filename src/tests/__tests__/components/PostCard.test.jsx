import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";

const mockPost = {
  id: 1,
  title: "Тестовый пост",
  content: "Это тестовый контент поста",
  date: "2024-05-05",
  author: { name: "Тест Автор", bio: "Тестер" },
  tags: ["react", "test"],
};

const mockOnTagClick = jest.fn();

test("PostCard рендерит все основные элементы", () => {
  render(<PostCard post={mockPost} onTagClick={mockOnTagClick} />);

  expect(screen.getByText("Тестовый пост")).toBeInTheDocument();
  expect(screen.getByText("Это тестовый контент поста")).toBeInTheDocument();
  expect(screen.getByText("Тест Автор")).toBeInTheDocument();
  expect(screen.getByText("#react")).toBeInTheDocument();
});
