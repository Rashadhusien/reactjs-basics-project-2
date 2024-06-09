/**
 * productObj === errorsObj [title, description, Image, price]
 * Validates a product object to ensure all fields meet specified criteria.
 *
 * @param {Object} product - The product object to validate.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageURL - The image URL of the product.
 * @param {string} product.price - The price of the product.
 * @returns {Object} - An object containing validation errors. Each key represents a field and each value is an error message. If there are no errors, the values will be empty strings.
 */

export const porductValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  // ** Returns an object

  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  // const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters!";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      "Product description must be between 10 and 900 characters!";
  }
  //!validUrl
  if (!product.imageURL.trim()) {
    errors.imageURL = "Vaild Image Url Is Reuquired!";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Vaild Price Is Required!";
  }

  return errors;
};
