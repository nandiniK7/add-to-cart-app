function CartModal({ cart, closeModal, removeFromCart }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg p-6 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>

          <button
            onClick={closeModal}
            className="text-red-500 text-xl font-bold"
          >
            X
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            Your cart is empty
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-green-600 font-bold">
                  ${item.price}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartModal;