import Donation from "../../../pages/Donation/Donation";
import PropTypes from 'prop-types';


const DonationInfo = ({allDonations}) => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'> 
            {
                allDonations?.map((donation,index)=><Donation key={index} donation={donation}></Donation>)
            }
        </div>
    );
};

DonationInfo.propTypes = {
    allDonations: PropTypes.array.isRequired,
}

export default DonationInfo;