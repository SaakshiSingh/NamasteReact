const { useEffect, useState } = require("react");

const useRestaurantMenu = (resId) => {
  const { resInfo, setResInfo } = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const menuData = await fetch(Menu_URL + resId);
    const json = data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
