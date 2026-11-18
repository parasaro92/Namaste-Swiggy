import { createElement } from "react"
import { render, screen } from "@testing-library/react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { expect, it } from "vitest"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"
import cartReducer from "../components/utils/cartSlice"
import appStore from "../components/utils/appStore"

const createCartStore = () => configureStore({ reducer: { cart: cartReducer } })

const renderHeader = (store) =>
  render(
    createElement(
      BrowserRouter,
      null,
      createElement(Provider, { store }, createElement(Header)),
    ),
  )

it("Should load Header Component with a login button", () => {
  renderHeader(appStore)

  const loginBtn = screen.getByRole("button", { name: "Login" })
  expect(loginBtn.textContent).toBe("Login")
//   expect(screen.getByRole("button", { name: "Login" }).textContent).toBe("Login")
})

it("Should load Header Component with a cart item 0", () => {
  renderHeader(createCartStore())

  const cartLink = screen.getByRole("link", { name: /Cart - \(0\) items/ })
  expect(cartLink.textContent).toBe("Cart - (0) items")
})

it("Should load Header Component with a cart item", () => {
    renderHeader(appStore)

  const cartLink = screen.getByRole("link", { name: /Cart/ })
  expect(cartLink.textContent).toContain("Cart")
})

it("Should load Header Component with a login button", () => {
  renderHeader(appStore)

  const loginBtn = screen.getByRole("button", { name: "Login" })
  expect(loginBtn.textContent).toBe("Login")
//   expect(screen.getByRole("button", { name: "Login" }).textContent).toBe("Login")
})
