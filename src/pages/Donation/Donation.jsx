import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
  console.log(donation);
  const { id, image, title, category } = donation;
  return (
    <div
      className={`max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
        category === "Health"
          ? "bg-indigo-100"
          : category === "Education"
          ? "bg-red-100"
          : "bg-lime-50"
      }`} 
    >
      <Link to={`/donation-details/${id}`}>
        <img
          className="rounded-t-lg w-full h-[80%] object-cover mb-2"
          src={image}
          alt=""
        />
      </Link>
      <div className="ml-5">
        <Link to={`/donation-details/${id}`}>
          <button
            className={`mb-2 btn btn-sm text-sm font-bold tracking-tight text-gray-900 ${
              category === "Health"
                ? "bg-indigo-200 text-blue-800"
                : category === "Education"
                ? "bg-red-200 text-red-500"
                : "bg-lime-200 text-lime-500"
            }`}
          >
            {category}
          </button>
        </Link>
        <p
          className={`mb-3 font-bold text-xl ${
            category === "Health"
              ? "text-blue-800"
              : category === "Education"
              ? "text-red-500"
              : "text-lime-500"
          } dark:text-gray-400`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

Donation.propTypes = {
  donation: PropTypes.object,
};

export default Donation;
