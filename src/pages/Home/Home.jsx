import { useLoaderData } from "react-router-dom";
import DonationInfo from "../../components/Header/DonationInfo/DonationInfo";


const Home = () => {
    const allDonations = useLoaderData();
    console.log(allDonations);
    return (
        <div>
            <DonationInfo allDonations={allDonations}></DonationInfo>
        </div>
    );
};

export default Home;