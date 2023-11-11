import PropTypes from "prop-types";
import swal from 'sweetalert';

const DonationDetailCard = ({showDonationDetails}) => {
    const {id,category,image,title,description,price} = showDonationDetails;
    const handleAddToDonate = ()=> {
        const addDonate = [];
        const getDonate = JSON.parse(localStorage.getItem("donate"));
        if(!getDonate){
          addDonate.push(showDonationDetails);
          localStorage.setItem("donate", JSON.stringify(addDonate));
          swal("Good job!", "Your Donation Submitted!", "success");
        }else{
          const isExist = getDonate.find(donates=>donates.id === id);
          if(!isExist){
            addDonate.push(...getDonate, showDonationDetails);
            localStorage.setItem("donate", JSON.stringify(addDonate));
            swal("Good job!", "Your Donation Submitted!", "success");
          }else{
            swal("DUPLICATE!", "You do not try to double!", "error");
          }
        }
    }
  return (
    <div>
      <div className="relative flex w-full max-w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img className='w-full'
             src={`/${image}`}
            alt=""
          />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          <button
            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {title}
            </h5>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
        <div className="p-6 pt-3">
          <button
          onClick={handleAddToDonate}
            className={`block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
                category === "Health"
                  ? "bg-blue-800"
                  : category === "Education"
                  ? "bg-red-500"
                  : "bg-lime-500"
              }`}
            type="button"
            data-ripple-light="true"
            
          >
            Donate $ {price}
          </button>
        </div>
      </div>
    </div>
  );
};

DonationDetailCard.propTypes = {
    showDonationDetails: PropTypes.object,
};

export default DonationDetailCard;
