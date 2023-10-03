import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow, faBreadSlice, faShrimp, faEgg, faSeedling, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Label placement</FormLabel> */}
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<FontAwesomeIcon icon={faShrimp} size = '2x'/>}
          label="Shellfish"
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<FontAwesomeIcon icon={faBreadSlice} size = '2x'/>}
          label="Gluten"
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<FontAwesomeIcon icon={faCow} size = '2x'/>}
          label="Dairy"
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<FontAwesomeIcon icon={faEgg} size = '2x'/>}
          label="Egg"
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<p><strong>NUT PLACEHOLDER</strong></p>}
          label="Nuts"
          labelPlacement="top"
        />

      </FormGroup>
    </FormControl>
  );
}
