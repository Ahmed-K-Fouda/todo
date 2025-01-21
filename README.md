# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!--
import { useState } from "react";

function App() {
  // States for managing the inputs and the list of items
  const [quantity, setQuantity] = useState(); // State to store the quantity (number)
  const [itemName, setItemName] = useState("Item You Need"); // State to store the item name
  const [itemsList, setItemsList] = useState([]); // State to store the list of items
  const [editIndex, setEditIndex] = useState(null); // State to track the index of the item being edited
  const [isEditing, setIsEditing] = useState(false); // State to toggle the edit mode

  // Function to add a new item to the list
  function handleAddItem() {
    setItemsList([...itemsList, { quantity, itemName }]); // Add a new object to the list
    setQuantity(""); // Clear the quantity input
    setItemName(""); // Reset the item name input
  }

  // Function to sort the items list in descending order based on quantity
  function handleSort() {
    setItemsList([...itemsList].sort((a, b) => b.quantity - a.quantity)); // Sort a copy of the list
  }

  // Function to delete an item from the list by its index
  function handleDelete(index) {
    setItemsList(itemsList.filter((_, i) => i !== index)); // Filter out the item with the matching index
  }

  // Function to enter edit mode for a specific item
  function handleEdit(index) {
    setEditIndex(index); // Set the index of the item to be edited
    setItemName(itemsList[index].itemName); // Pre-fill the input with the current item name
    setQuantity(itemsList[index].quantity);
    setIsEditing(true); // Enable edit mode
  }

  // Function to save the updated item
  function handleSave() {
    const updatedList = itemsList.map((item, i) => {
      if (i === editIndex) {
        return { ...item, itemName, quantity }; // Update the item with the new name
      }
      return item; // Keep the rest of the items unchanged
    });
    setItemsList(updatedList); // Update the list with the modified item
    setEditIndex(null); // Exit edit mode
    setIsEditing(false); // Hide the edit input
  }

  return (
    <>
      {/* Input section to add new items */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>What Do You Want</p>
        {/* Input for quantity */}
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min={1}
        />
        {/* Input for item name */}
        <input
          type="text"
          placeholder={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        {/* Button to add item */}
        <button onClick={handleAddItem}>Add</button>
        {/* Dropdown to sort items */}
        <select onChange={handleSort}>
          <option>Sorting</option>
          <option>Sort by Quantity</option>
        </select>
      </div>

      {/* Display the list of items */}
      <div>
        <h1>Items</h1>
        {itemsList.map((item, index) => (
          <ul key={index}>
            {/* Display item details */}
            <li>Quantity: {item.quantity}</li>
            <li>Item Name: {item.itemName}</li>
            {/* Delete button */}
            <button onClick={() => handleDelete(index)}>Delete</button>
            {/* Edit button */}
            <button onClick={() => handleEdit(index)}>Edit</button>
            {/* Edit input and save button */}
            {editIndex === index && isEditing && (
              <>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            )}
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;


 -->

