# Artworks DataTable (React + TypeScript + PrimeReact)

A robust React application that displays artwork data from the **Art Institute of Chicago API**. This project demonstrates the implementation of a **PrimeReact DataTable** with advanced features like server-side pagination, persistent row selection, and a custom overlay for selecting specific row counts.

---

## Links

- **Live Demo:** [Live project](https://storied-hummingbird-fe2c42.netlify.app/)

---

## Features

- **API Integration:** Fetches real-time artwork data from the Art Institute of Chicago.
- **Server-Side Pagination:** Data is fetched efficiently page-by-page to handle large datasets.
- **PrimeReact DataTable:** Displays key artwork details:
  - Title
  - Place of Origin
  - Artist
  - Inscriptions
  - Start Date
  - End Date
- **Row Selection:**
  - Individual row selection via checkboxes.
  - "Select All" functionality for the current page.
- **Custom Selection Overlay:**
  - A custom input panel to select the first **N rows** of the current page.
- **Smart Pagination UI:** Grouped pagination logic (e.g., 1–5, 6–10, 11–15).
- **Loading States:** Visual feedback (spinners) while fetching data.

---

## Tech Stack

- **Framework:** React (Vite)
- **Language:** TypeScript
- **UI Library:** PrimeReact + PrimeIcons
- **Styling:** CSS / PrimeFlex

---

## How It Works (Logic)

### 1. Checkbox Selection

- Users can select or deselect individual rows using the checkboxes in the first column.
- Users can toggle the header checkbox to select/deselect all rows **on the current page**.

### 2. Custom Row Selection (Overlay Panel)

Located next to the selection header, there is a custom dropdown icon.

1. Clicking the icon opens an overlay panel.
2. The user enters a number (**N**).
3. The app selects the **first N rows** from the **current page only**.

> **Note:**
>
> - If **N** is greater than the available rows on the current page, it selects all available rows on that page.
> - This feature does **not** fetch extra pages or perform prefetching.

### 3. Server-Side Pagination

- The application does not load all data at once.
- When the user changes the page, a request is sent to the API for that specific page index.
- A loading spinner is displayed during the fetch process.

---

## API Reference

This project uses the Art Institute of Chicago public API.

**Endpoint:**

```http
https://api.artic.edu/api/v1/artworks?page=1
```

## Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/ujjwalofficial102/ARTWORK-TABLE.git

cd ARTWORK-TABLE
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

Start the development server:

```bash
npm run dev
```

Open http://localhost:5173 to view it in the browser.

## Project Structure

```txt
src/
 ├── api/
 │    └── artworksApi.ts          # API fetch logic
 ├── components/
 │    ├── ArtworksTable.tsx       # Main DataTable component
 │    ├── CustomSelectOverlay.tsx # The 'Select Top N' overlay
 │    └── PaginationBar.tsx       # Custom pagination logic
 ├── types/
 │    └── artworks.ts             # TypeScript interfaces
 ├── utils/
 │    └── text.ts                 # Text formatting utilities
 └── App.tsx                      # Main application entry
```

## Author

**Ujjwal Mishra**

- **GitHub:** [ujjwalofficial102](https://github.com/ujjwalofficial102)
- **LinkedIn:** [ujjwalmishra102](https://www.linkedin.com/in/ujjwalmishra102/)
