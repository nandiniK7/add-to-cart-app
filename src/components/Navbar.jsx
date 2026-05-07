function Navbar({ cartCount, openModal }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">ShopEasy</h1>

      <button
        onClick={openModal}
        className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;