import { Iproduct, IForm } from "../interfaces";
import { v4 as uuid } from "uuid";

export const productList: Iproduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea 's genesis is still in its infancy, hangine",
    imageURL: "/public/portfolio.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "/public/portfolio.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea   's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "/public/portfolio.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "/public/portfolio.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "/public/portfolio.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "/public/portfolio.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "/public/portfolio.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "/public/portfolio.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "/public/portfolio.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "/public/prayertimings.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "/public/portfolio.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "/public/portfolio.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "/public/portfolio.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "/public/ordersummerycard.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "/public/portfolio.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "/public/portfolio.png",
    },
  },
];

export const formInputList: IForm[] = [
  {
    id: "title",
    name: " title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: " description",
    label: "Product description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product image URL",
    type: "text",
  },
  {
    id: "price",
    name: " price",
    label: "Product price",
    type: "text",
  },
];
