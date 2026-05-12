import { FaStar, FaStarHalfAlt } from "react-icons/fa";
function ReviewCard() {
  return (
    <div className="glass p-5 rounded-3xl max-w-sm">
      <div className="flex gap-3 items-center">
        <img
          src="/images/72419c36cae7ef6f9c25b97e39a231fc9059935c.png"
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h3>Ronnie Hamill</h3>
          <div className="flex gap-1 text-sm text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-300 mt-4">
        I can't express how thrilled I am with my new natural plants! They bring
        such a fresh and vibrant energy to my home.
      </p>
    </div>
  );
}

export default ReviewCard;
