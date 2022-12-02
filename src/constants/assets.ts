import carIllustration from '../assets/car-illustration.png';
import mainIllustration from '../assets/get-started-illustration.png';
import iconCircleChevronRight from '../assets/icons/circle-checvron-right.png';
import iconClockBlack from '../assets/icons/icon-clock-black.png';
import iconHistory from '../assets/icons/icon-history.png';
import iconHistorySelected from '../assets/icons/icon-history-selected.png';
import iconHome from '../assets/icons/icon-home.png';
import iconHomeSelected from '../assets/icons/icon-home-selected.png';
import iconPark from '../assets/icons/icon-park.png';
import iconParkSelected from '../assets/icons/icon-park-selected.png';
import iconLittleCarBlack from '../assets/icons/little-car-black.png';
import iconLittleCarGreen from '../assets/icons/little-car-green.png';
import iconLittleCarOrange from '../assets/icons/little-car-orange.png';
import iconUserLocation from '../assets/icons/user-location.png';
import Logo from '../assets/logo.png';
import motoIllustration from '../assets/moto-illustration.png';

export default Object.freeze({
  images: {
    getStarted: {
      mainIllustration,
    },
    logo: Logo,
    carIllustration,
    motoIllustration,
  },
  icons: {
    circleChevronRight: iconCircleChevronRight,
    littleCarOrange: iconLittleCarOrange,
    littleCarGreen: iconLittleCarGreen,
    userLocation: iconUserLocation,
    littleCarBlack: iconLittleCarBlack,
    clockBlack: iconClockBlack,
    home: iconHome,
    homeSelected: iconHomeSelected,
    park: iconPark,
    parkSelected: iconParkSelected,
    history: iconHistory,
    historySelected: iconHistorySelected,
  },
});
