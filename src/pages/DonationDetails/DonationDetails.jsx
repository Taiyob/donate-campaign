import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailCard from "../../components/DonationDetailCard/DonationDetailCard";

const DonationDetails = () => {
    const [showDonationDetails, setShowDonationDetails] = useState({});
    const {id} = useParams();
    const donations = useLoaderData();
    useEffect(()=>{
        const findDonation = donations?.find(donation=>donation.id == id);
        setShowDonationDetails(findDonation);
    },[id,donations]);
    return (
        <div>
            <DonationDetailCard showDonationDetails={showDonationDetails}></DonationDetailCard>
        </div>
    );
};

export default DonationDetails;