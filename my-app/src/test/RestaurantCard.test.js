import { createElement } from "react"
import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"
import RestaurantCard, { WithPromotedLabel } from "../components/RestaurantCard"

const resData = {
  cloudinaryImageId: "test-image",
  name: "Andhra Gunpowder",
  cuisines: ["South Indian"],
  avgRating: 4.5,
  costForTwo: "300 for two",
  sla: { deliveryTime: 30 },
}

it("Should render restaurant card component with props data", () => {
  render(createElement(RestaurantCard, { resData }))

  expect(
    screen.getByRole("heading", { level: 3, name: "Andhra Gunpowder" }).textContent,
  ).toBe("Andhra Gunpowder")
})

it("Should render restaurant card component with promoted label", () => {
  const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard)
  render(createElement(PromotedRestaurantCard, { resData }))

  expect(screen.getByText("Promoted").textContent).toBe("Promoted")
})
