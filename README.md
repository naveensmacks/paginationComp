# React Pagination Component with Tailwind CSS

## Description

This project is a React component that displays a list of items with pagination controls. It uses Tailwind CSS for styling.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/naveensmacks/paginationComp
   cd your-repo-name
   ```

2. Install the dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

1. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and go to `http://localhost:3000` to see the app in action.

## Configuration

You can configure the pagination settings in `lib/Constants.ts`:
Feel free to modify the values in `lib/Constants.ts` to see how the pagination behaves with different settings.

```typescript
export const ITEMS_PER_PAGE = 10;
export const PAGINATION_RANGE = 3; // should be an odd number greater than 1, e.g., 3 or 5
```

### Example Configurations

- **PAGINATION_RANGE = 3:**

  ![Pagination Range 3](screenshots/range3.jpg)

- **PAGINATION_RANGE = 5:**

  ![Pagination Range 5](screenshots/range5.jpg)

## Testing

To test the pagination component, I have used dummy data with 100 items in format 
      
type DUMMY_DATA_TYPE = {
  id: number;
  name: string;
  description: string;
};
### Sample Input

Array of 100 items:

```json
[
  { id: 1, name: "Item 1", description: "Description for item 1" },
  { id: 2, name: "Item 2", description: "Description for item 2" },
  { id: 3, name: "Item 3", description: "Description for item 3" },, ..., { id: 100, name: "Item 100", description: "Description for item 100" }
]
```

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
