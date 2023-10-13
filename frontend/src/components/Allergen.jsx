import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCow,
  faBreadSlice,
  faShrimp,
  faEgg,
} from '@fortawesome/free-solid-svg-icons';
import { GiPeanut } from 'react-icons/gi';
import '../styles/Allergen.scss';

export default function FormControlLabelPosition() {
  return (
    <div className="center-icons">
      <FormControl component="fieldset"  >
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<FontAwesomeIcon icon={faShrimp} size="lg" />}
            label="Shellfish"
            labelPlacement="top"
            className="remove-pointer"
          />
          <FormControlLabel
            value="top"
            control={<FontAwesomeIcon icon={faBreadSlice} size="lg" />}
            label="Gluten"
            labelPlacement="top"
            className="remove-pointer"
          />
          <FormControlLabel
            value="top"
            control={<FontAwesomeIcon icon={faCow} size="lg" />}
            label="Dairy"
            labelPlacement="top"
            className="remove-pointer"
          />
          <FormControlLabel
            value="top"
            control={<FontAwesomeIcon icon={faEgg} size="lg" />}
            label="Egg"
            labelPlacement="top"
            className="remove-pointer"
          />
          <FormControlLabel
            value="top"
            control={<GiPeanut size="20px" />}
            label="Nuts"
            labelPlacement="top"
            className="remove-pointer"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}