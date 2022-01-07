/*
 * File: \src\components\index.ts
 * Project: @flish/chakra-theme
 * Created Date: Monday December 13th 2021
 * Author: Julien Cagniart
 * -----
 * Last Modified: 14/12/2021 15:23
 * Modified By: Julien Cagniart
 * -----
 * Copyright (c) 2021 Julien - juliencagniart40@gmail.com
 * -----
 * _______ _ _      _                 _             
(_______) (_)    | |               | |            
 _____  | |_  ___| | _           _ | | ____ _   _ 
|  ___) | | |/___) || \         / || |/ _  ) | | |
| |     | | |___ | | | |   _   ( (_| ( (/ / \ V / 
|_|     |_|_(___/|_| |_|  (_)   \____|\____) \_/  
                                                   
 * Purpose of this file : 
 *  Link to documentation associated with this file : (empty) 
 */
import {
  inputProps,
  checkBoxProps,
  errorProps,
  labelProps,
  radioProps,
  switchProps,
  textAreaProps,
} from "./input";
import { progressProps, spinnerProps } from "./feedback";
import { alertProps } from "./alert";
import tableProps from "./table";
import buttonProps from "./button";
import { extendTheme } from "@chakra-ui/react";

const flishTheme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  colors: {
    flish: {
      100: "#FAFAFF",
      200: "#EFF0FF",
      300: "#EAE9FF",
      400: "#DFDDFF",
      500: "#D1CEFF",
      600: "#B9B4FF",
      700: "#7879F1",
      800: "#5D5FEF",
    },
  },
  components: {
    Button: buttonProps,
    Input: inputProps,
    FormLabel: labelProps,
    FormHelperText: errorProps,
    Radio: radioProps,
    NumberInput: inputProps,
    Checkbox: checkBoxProps,
    Textarea: textAreaProps,
    Switch: switchProps,
    Table: tableProps,
    Alert: alertProps,
    Progress: progressProps,
    CircularProgress: progressProps,
    Spinner: spinnerProps,
  },
  global: {
    borderRadius: 10,
  },
});

export default flishTheme;
