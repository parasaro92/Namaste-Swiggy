import { createElement } from "react"
import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import { describe, expect, it } from "vitest"

describe("Contact Us Page Test Case", () => {

	it("Should load contact us component", () => {
		render(createElement(Contact))

		const heading = screen.getByRole("heading", { name: "Contact Us" })
		expect(heading.textContent).toBe("Contact Us")
	})

	it("Should load button inside Contact component", () => {
		render(createElement(Contact))

		// const button = screen.getByRole("button", { name: "Submit" })
		const button = screen.getByText("Submit")
		expect(button.textContent).toBe("Submit")
	})

	it("Should load 2 input boxes", () => {
		render(createElement(Contact))

		const inputboxes = screen.getAllByRole("textbox")
		expect(inputboxes.length).toBe(2)
	})
})
