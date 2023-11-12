import PropTypes from "prop-types";

const DonationPageCard = ({ donate }) => {
  const { category, image, title, price } = donate;
  return (
    <div className={``}>
      <a
        href="#"
        className={`flex  items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${
          category === "Health"
            ? "bg-indigo-100"
            : category === "Education"
            ? "bg-red-100"
            : category === "Food"
            ? "bg-red-100"
            : "bg-lime-50"
        }`}
      >
        <img
          className="object-cover w-full h-[300px] rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={`/${image}`}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className={`mb-2 btn btn-sm text-sm font-bold tracking-tight text-gray-900 ${
              category === "Health"
                ? "bg-indigo-200 text-blue-800"
                : category === "Education"
                ? "bg-red-200 text-red-500"
                : category === "Food"
                ? "bg-red-200 text-red-500"
                : "bg-lime-200 text-lime-500"
            }`}>{category}</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className={`mb-3 font-bold text-xl ${
            category === "Health"
              ? "text-blue-800"
              : category === "Education"
              ? "text-red-500"
              : category === "Food"
              ? "text-red-500"
              : "text-lime-500"
          } dark:text-gray-400`}>
            {/* {description.slice(0,150)} */}
            {price}
          </p>
          <button className={`${category === "Health" ? "bg-blue-800"
          : category === "Education"
          ? "bg-red-500"
          : category === "Food"
          ? "bg-red-500"
          : "bg-lime-500"} btn`}>view details</button>
        </div>
      </a>
    </div>
  );
};

DonationPageCard.propTypes = {
  donate: PropTypes?.object,
};

export default DonationPageCard;
