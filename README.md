# 🍰 Desserts Shop

_A responsive dessert ordering website with a smooth shopping experience and performance optimizations._

![Project Screenshot](./design/desktop-design-selected.jpg)

[Live Preview](https://ah-ibrahim.github.io/Desserts-list-with-cart)

---

## 📋 Table of Contents

-   [About](#-about)
-   [Tech Stack](#%EF%B8%8F-tech-stack)
-   [Features](#-features)
-   [Getting Started](#%EF%B8%8F-getting-started)
-   [Project Structure](#project-structure)
-   [Usage](#-usage)
-   [License](#-license)
-   [Credits](#-credits)
-   [Authors](#%EF%B8%8F-authors)

---

## 👋 About

This website lets users browse a variety of desserts, add them to their cart, and place an order. It focuses on clean design, responsiveness, and great UX with modern frontend techniques.

---

## 🛠️ Tech Stack

Here’s what’s under the hood:

-   **React (Vite)**
-   **CSS Grid & Flexbox**
-   **LocalStorage** (for persisting cart & orders)
-   **Lazy Image Loader** (for lazy loading images)

---

## ✨ Features

Some cool stuff this project can do:

-   **Responsive Layout:** Adapts seamlessly across mobile, tablet, and desktop devices.
-   **Persistent Cart:** Saves user orders in **LocalStorage** — no data loss on page refresh.
-   **Optimized Images:** Uses **lazy loading** to improve loading speed.
-   **Accessible Interactions:**
    -   Keyboard support: Press `ESC` to close the order confirmation modal.
    -   Focusable and accessible components.
-   **Clean UI:** Reusable, scalable components for desserts, cart, and modals.

---

## ⚙️ Getting Started

Wanna run this locally? Follow these steps:

1. Clone the repo

`git clone https://github.com/Ah-Ibrahim/Deserts-list-with-cart.git`\
`cd your-repo`

2. Install dependencies

`npm install`

3. Start the app

`npm run dev`

---

## Project Structure

```
your-project/
│
├── public/ # Static files like icons, fonts
├── src/
│ ├── assets/ # Images, fonts, etc.
│ ├── components/# UI components
│ ├── styles/ # Global styles
│ ├── App.jsx # Main app component
│ └── main.jsx # App entry point
│
├── package.json
└── README.md
```

---

## 📝 Usage

1. Browse desserts in the grid layout.

2. Add items to your cart — quantity updates automatically.

3. Click "Confirm Order" to view a summary in a modal.

4. Use ESC key or click outside modal to dismiss the modal.

5. Orders and cart data are saved automatically for future visits.

---

## 📄 License

This project is licensed under the MIT License.
Feel free to do what you want with it.

---

## 🙏 Credits

Big thanks to:

-   Design and Dessert images from [Frontendmentor](https://www.frontendmentor.io)

---

## ✍️ Authors

Ahmed Ibrahim
