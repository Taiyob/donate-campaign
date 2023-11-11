import { useEffect, useState } from "react";
import DonationPageCard from "../../components/DonationPageCard/DonationPageCard";

const DonationPage = () => {
  const [donateCard, setDonateCard] = useState([]);
  const [dataFound, setDataNotFound] = useState(false);
  const [isShow, setShow] = useState(false);
  useEffect(() => {
    const addDonates = JSON.parse(localStorage.getItem("donate"));
    if (addDonates) {
      setDonateCard(addDonates);
    } else {
      setDataNotFound("No Data Found");
    }
  }, []);
  return (
    <div>
      {dataFound ? (
        <p className="h-[80vh] flex justify-center items-center">{dataFound}</p>
      ) : (
        <div>
          {donateCard.length > 0 && (
            <div>
              <button></button>
              <h1></h1>
            </div>
          )}
          <div className="grid grid-cols-2 gap-5">
            {isShow
              ? donateCard.map((donate, index) => (
                  <DonationPageCard
                    key={index}
                    donate={donate}
                  ></DonationPageCard>
                ))
              : donateCard
                  .slice(0, 4)
                  .map((donate, index) => (
                    <DonationPageCard
                      key={index}
                      donate={donate}
                    ></DonationPageCard>
                  ))}
          </div>
          {donateCard.length > 3 && (
            <button
              onClick={() => setShow(!isShow)}
              className="px-5 bg-orange-300 block mx-auto"
            >
              {isShow ? "See less" : "See more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DonationPage;
