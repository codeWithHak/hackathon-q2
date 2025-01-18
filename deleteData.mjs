import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "jg4jqqpj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
  token:
    "sk1diCoWXbZaSs5RrmNlOQbEbefJhI6XSB9YwTyyyawcrSoT7h46j75QCi3XlJ38P6nvT6WsAjH3PwMt6JMhDrNKAKJclqkHcCL8uu0HL5j2JhMxYGoEtGg3ZXfhIruOc5Pl9P5UEgX6ucSXQNmnw6EURnkm2WSA0hVvtZR0SoWpkT8FdanH",
});

async function deleteProducts() {
  try {
    console.log("Fetching all products from Sanity...");

    // Fetch all documents of type 'product'
    const products = await client.fetch('*[_type == "product"]{_id}');

    if (products.length === 0) {
      console.log("No products found to delete.");
      return;
    }

    console.log(`Found ${products.length} products. Deleting...`);

    // Iterate over the products and delete each one
    for (const product of products) {
      await client.delete(product._id);
      console.log(`Deleted product with _id: ${product._id}`);
    }

    console.log("All products deleted successfully.");
  } catch (error) {
    console.error("Error deleting products:", error);
  }
}

deleteProducts();
