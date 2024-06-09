import { Iproduct, IForm } from "../interfaces";
import { v4 as uuid } from "uuid";

export const productList: Iproduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea 's genesis is still in its infancy, hangine",
    imageURL: "bootstrap.jpg",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "bootstrap.jpg",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea   's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "CSS-Animation-BCG-Banner-1.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "CSS-Animation-BCG-Banner-1.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "sass-mixin-banner.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "sass-mixin-banner.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "gulpjs.jpg",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "gulpjs.jpg",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "html-course-banner.jpg",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "html-course-banner.jpg",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "js-and-frameworks-banner.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "js-and-frameworks-banner.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "next.png",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "next.png",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis Gv70: Nominee",
    description:
      "lAs luxury brans go, south krea 's genesis is still in its infancy, hangine lAs luxury brans go, south krea  's genesis is still in its infancy, hangine lAs luxury bran's genesis is still in its infancy, hangine",
    imageURL: "tailwind.jpg",
    price: "500,00",
    colors: ["#FF0031", "#2563eb", "#FF6E31"],
    category: {
      name: "cars",
      imageURL: "tailwind.jpg",
    },
  },
];

export const formInputList: IForm[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
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
    name: "price",
    label: "Product price",
    type: "text",
  },
];

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84d2c5",
  "#1300a5",
  "#13005a",
  "#a31acb",
  "#a12",
  "#000000",
  "#ff6e31",
  "#3c2a21",
  "#af8a70",
  "#820000",
  "#ff0032",
];
