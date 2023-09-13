import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Baskin Robbins - Ice Cream Desserts");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label", () => {
  //   render(<withPromotedLabel} />);
  //   const name = screen.getByText("Baskin Robbins - Ice Cream Desserts");
  //   expect(name).toBeInTheDocument();
});
