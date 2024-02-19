import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShirt, faMobile } from '@fortawesome/free-solid-svg-icons';

// Configure the library (one-time setup)
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCoffee, faShirt, faMobile, );
import SvgIcon from '@mui/material/SvgIcon';

export default function SmartphoneSvg() {
  return (
    <SvgIcon>
     <FontAwesomeIcon icon={faMobile}  />
    </SvgIcon>
  );
}