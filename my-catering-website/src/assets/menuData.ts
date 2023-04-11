import paellaPic from "./images/paella-1.jpg"
const data = {
  "menuData": [
  {
  "title": "Paella",
  "items": [
  {
  "itemName": "Seafood Paella",
  "price": 18.99,
  "ingredients": ["rice", "seafood", "vegetables"],
  "image": paellaPic,
  "isVegan": false,
  "isVegetarian": false,
  "isGlutenFree": true
  },
  {
    "itemName": "Vegetarian Paella",
    "price": 18.99,
    "ingredients": ["rice", "seafood", "vegetables"],
    "image": "https://example.com/seafood-paella.jpg",
    "isVegan": false,
    "isVegetarian": false,
    "isGlutenFree": true
    },
    {
      "itemName": "Chicken & Chorizo Paella",
      "price": 18.99,
      "ingredients": ["rice", "seafood", "vegetables"],
      "image": "https://example.com/seafood-paella.jpg",
      "isVegan": false,
      "isVegetarian": false,
      "isGlutenFree": true
      }
  ]
  },
  {
  "title": "Tapas & Appetizers",
  "items": [
  {
  "itemName": "Patatas Bravas",
  "price": 6.99,
  "ingredients": ["potatoes", "tomato sauce", "garlic aioli"],
  "image": "https://example.com/patatas-bravas.jpg",
  "isVegan": true,
  "isVegetarian": true,
  "isGlutenFree": true
  }
  ]
  },
  {
  "title": "Drinks",
  "items": [
  {
  "itemName": "Sangria",
  "price": 8.99,
  "ingredients": ["red wine", "brandy", "fruit"],
  "image": "https://example.com/sangria.jpg",
  "isVegan": true,
  "isVegetarian": null,
  "isGlutenFree": true
  }
  ]
  }
  ]
  }
  
  export default data 
  
  