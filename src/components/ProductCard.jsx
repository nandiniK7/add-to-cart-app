function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:scale-105 transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
      />

      <h2 className="font-bold text-lg mb-2 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold mb-4">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;