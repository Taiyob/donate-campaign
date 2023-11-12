import { useLoaderData } from "react-router-dom";
import DonationInfo from "../../components/Header/DonationInfo/DonationInfo";
import Banner from "../Banner/Banner";


const Home = () => {
    const allDonations = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <DonationInfo allDonations={allDonations}></DonationInfo>
        </div>
    );
};

export default Home;