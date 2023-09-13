import { sum } from "../sum";
test("Sum Fn Should Calculate sum of two numbers", () => {
  const result = sum(2, 3);

  // ASSERTION

  expect(result).toBe(5);
});
