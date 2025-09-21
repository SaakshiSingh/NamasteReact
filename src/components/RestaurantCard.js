import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <span>{cuisines.join(",")}</span>
      <span>{avgRatingString}</span>
      <span>{costForTwo}</span>
      <span>{sla.deliveryTime} Min</span>
    </div>
  );
};

export default RestaurantCard;
