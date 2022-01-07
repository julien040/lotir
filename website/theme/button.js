/*
 * File: \src\components\button.js
 * Project: configuration
 * Created Date: Monday December 13th 2021
 * Author: Julien Cagniart
 * -----
 * Last Modified: 14/12/2021 08:36
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

const buttonProps = {
  // style object for base or default style
  baseStyle: {
    backgroundColor: "flish.400",
    borderRadius: 10,
    boxSizing: "border-box",
    _hover: { bg: "flish.500" },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      pt: "8px",
      pb: "8px",
      pl: "16px",
      pr: "16px",
      fontSize: "xs",
    },
    md: {
      pt: "12px",
      pb: "12px",
      pl: "28px",
      pr: "28px",
      fontSize: "sm",
    },
    lg: {
      pt: "16px",
      pb: "16px",
      pl: "32px",
      pr: "32px",
      fontSize: "md",
      
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    secondary: {
      backgroundColor: "#FFFFF",
      _hover: { bg: "flish.400" },
      borderColor: "flish.700",
      borderWidth: 2,
      textColor: "flish.700",
    },
    white: {
      backgroundColor: "flish.100",
      boxShadow: "0px 0px 80px rgba(0, 0, 0, 0.15)",
      _hover: { bg: "flish.200" },
    },
    danger: {
      backgroundColor: "red.300",
      _hover: { bg: "red.400" },
    },
    warn: {
      backgroundColor: "yellow.200",
      _hover: { bg: "yellow.300" },
    },
    confirm: {
      backgroundColor: "green.300",
      _hover: { bg: "green.400" },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "",
  },
};
export default buttonProps;
