import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import "../styles/menuPage.scss";
import data from "../assets/menuData";

const MenuPage: React.FC = () => {return (
  <div className="menu">
    {data.menuData.map((section) => (
      <div key={section.title} className="menu-section">
        <h2 className="menu-section-title">{section.title}</h2>
        <div className="menu-section-cards">
          {section.items.map((item) => (
            <Card key={item.itemName} className="menu-card">
              <CardImg top width="100%" src={item.image} alt={item.itemName} />
              <CardBody>
                <CardTitle tag="h3">{item.itemName}</CardTitle>
                <CardSubtitle tag="h4">${item.price}</CardSubtitle>
                <CardText>
                  <ul className="menu-card-ingredients">
                    {item.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                  <div className="menu-card-dietary">
                    {item.isVegan && <div className="menu-card-dietary-vegan">Vegan</div>}
                    {item.isVegetarian && <div className="menu-card-dietary-vegetarian">Vegetarian</div>}
                    {item.isGlutenFree && <div className="menu-card-dietary-gluten-free">Gluten Free</div>}
                  </div>
                </CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    ))}
  </div>
);
};

export default MenuPage;
