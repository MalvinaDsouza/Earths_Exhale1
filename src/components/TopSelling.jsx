import { FiShoppingBag } from "react-icons/fi";

function TopSelling() {
  const plants = [
    {
      image: "/images/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6 (1).png",
      title: "Aglaonema plant",
      price: "300",
      desc: "The Aglaonema plant is known for its attractive foliage.",
    },
    {
      image: "/images/b48312dbddc890f7f35ef3964ae1e7900b89782c.png",
      title: "Plantain Lilies",
      price: "380",
      desc: "Hostas are primarily grown for their lush decorative leaves.",
    },
    {
      image: "/images/6d90916507b2b3030961c99c6af0ebac97b86c78.png",
      title: "Cactus",
      price: "259",
      desc: "Known for the ability to thrive in arid environments.",
    },
    {
      image: "/images/5196aba58f7006d90ec0712ac1d01688cde1a537.png",
      title: "Swiss cheese Plant",
      price: "400",
      desc: "A popular tropical houseplant with distinctive leaves.",
    },
    {
      image: "/images/eb0351a5771ed55c7f3454bcce697dfe63237769.png",
      title: "Sansevieria plant",
      price: "450",
      desc: "Low-maintenance indoor plant with striking appearance.",
    },
    {
      image: "/images/444fba49a2674d2262c5455bcc501cb91b314490.png",
      title: "Agave plant",
      price: "359",
      desc: "Known for thick leaves and architectural forms.",
    },
  ];

  return (
    <section className="mt-32 bg-[#1b2316]">
      <div className="flex justify-center mb-26">
        <h2 className="text-5xl font-bold">Our Top Selling Plants</h2>
      </div>

      <div
        className="grid md:grid-cols-3 gap-12
       "
      >
        {plants.map((plant, index) => (
          <div
            key={index}
            className="
              glass
              rounded-[40px]
              p-8
              relative
              pt-50
              min-h-[400px]
            "
          >
            <img
              src={plant.image}
              alt={plant.title}
              className="
                absolute
                -top-15
                left-1/2
                -translate-x-1/2
                h-60
              "
            />

            <h3 className="text-3xl mt-4">{plant.title}</h3>

            <p className="text-gray-300 mt-4 text-sm">{plant.desc}</p>

            <div className="flex justify-between items-center mt-6">
              <p className="text-3xl font-semibold">Rs. {plant.price}/-</p>

              <button className="border p-3 rounded-xl">
                <FiShoppingBag />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopSelling;
