# Product Cart

This project is a web application that allows users to add products to a grid view and then add them to a shopping cart. The application is built using Redux Store to manage the state.

## Requirements

The following are the requirements for this project:

- Initially, the state will contain nothing. When the user first enters the site, there are no products visible, and it is completely blank.
- If there is an "Add New Product" section on the right side of the template, the user can click on the "Add Product" button with the information of the product, and it will be saved in the Redux Store. The product should then be shown in the grid view of products on the left side with the data from the Store.
- While adding the product, the product cannot be taken to the cart more than the "Quantity". As soon as the quantity given in the quantity is added to the product cart, the "Add to Cart" button will be disabled.
- Every time "Add to Cart" is clicked, the quantity of that product will decrease.
- On the upper right side, the green cart icon shows how many products have been added to the cart. If the same product is carted 10 times, the green cart icon will show 10.
- Clicking on the green cart icon will take the user to another page, where the list of products in the cart will be displayed, and the bill details will be on the right. By clicking on the Home menu, the Home page will show.
- Each item will have a counter where the user can change the quantity of products by clicking on Plus and Minus.
- In the case of each product, the product price multiplied by quantity will show the total price of each product.
- The user can completely remove the product from the cart by clicking on the Delete button.
- When the product is increased or decreased by Plus/Minus on the left side, the price should be correctly calculated in Sub Total and Total on the right side "Bill Details".

## Setup

To run this project, follow the instructions below:

1. Clone the repository to your local machine.
2. Install the dependencies using the command `npm install`.
3. Start the application using the command `npm start`.
4. Access the application by opening `http://localhost:3000` in your browser.

## Technologies

This project was built using the following technologies:

- React.js
- Redux
- JavaScript
- HTML
- CSS

Deployment Link: https://product-cart-sohel473.netlify.app/

