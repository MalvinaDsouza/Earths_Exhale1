import { FiShoppingBag } from "react-icons/fi";

function ProductCard({ image, title, price }) {
  return (
    <div>
      <div
        className="
    glass
    rounded-[60px]
    p-10
    grid
    items-center
    relative
    overflow-visible
    mt-20
  "
      >
        <img
          src="/images/b48312dbddc890f7f35ef3964ae1e7900b89782c.png"
          className="
      absolute
      -left-16
      top-1/7
      -translate-y-1/2
      h-110
      z-20
    "
        />

        <div className="ml-auto w-[45%] flex flex-col justify-center">
          <h2 className="text-4xl font-bold">For Your Desks Decorations</h2>

          <p className="text-gray-300 mt-5">
            I recently added a beautiful desk decoration plant to my workspace,
            and it has made such a positive difference!
          </p>

          <h3 className="text-3xl font-bold mt-5">Rs. 599/-</h3>

          <div className="flex gap-5 mt-5">
            <button className="border px-8 py-3 rounded-xl">Explore</button>

            <button className="border p-4 rounded-xl">
              <FiShoppingBag />
            </button>
          </div>
        </div>
      </div>
      <div
        className="
    glass
    rounded-[60px]
    p-10
    grid
    items-center
    relative
    overflow-visible
    mt-20
  "
      >
        <div className=" w-[45%] flex flex-col justify-center">
          <h2 className="text-4xl font-bold">For Your Desks Decorations</h2>

          <p className="text-gray-300 mt-5">
            The greenery adds a touch of nature and serenity to my desk, making
            it feel more inviting and calming
          </p>

          <h3 className="text-3xl font-bold mt-5">Rs. 399/-</h3>

          <div className="flex gap-5 mt-5">
            <button className="border px-8 py-3 rounded-xl">Explore</button>

            <button className="border p-4 rounded-xl">
              <FiShoppingBag />
            </button>
          </div>
        </div>
        <img
          src="/images/95e728282f4fb901ee2edc80783c2fbd7df490c2.png"
          className="
      absolute
      -right-16
      top-1/7
      -translate-y-1/2
      h-110
      z-20
    "
        />
      </div>
    </div>
  );
}

export default ProductCard;
