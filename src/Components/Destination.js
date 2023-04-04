import MountainTal1 from "../assets/Tal1.jpg";
import MountainTal4 from "../assets/Tal4.jpg";
import MountainDaguldul from "../assets/Daguldul.jpg";
import MountainDaguldul2 from "../assets/Daguldul2.jpg";

import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Taal volcano,Batangas"
        text=" One of the most iconic views in Luxon, Mt.Taal boast a valcano inside a lake inside a island.If you fancy a closer look,the hike up
    to the crator is a mere 45 min.and is easy enough for biginners.Guides will assist you most of the way, and you will see
    the peculier environment found on an active volcano,including volcanic rocks and steam vents.The hike can be dusty and hot,so plan
    for an early morning trip, and then unwind with some bulalo before heading back home!"
        img1={MountainTal1}
        img4={MountainTal4}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul,Batangas"
        text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer ,check out Mt.Doguldul in san Juan,Batangas.You'll start your hike 
        from the beach and pass through tropical forest,different rock formations,and small streams.There's a small store halfway up the trail where you can take a break and drink buko juice, 
        and though the summit itself may not have the best view,the breeze is fantastic.Once you've made it back down,head straight to the beach for a refreshing,will deserved swim."
        img={MountainDaguldul}
        img2={MountainDaguldul2}
      />
    </div>
  );
};
export default Destination;
