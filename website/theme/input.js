/*
 * File: \src\components\input.js
 * Project: configuration
 * Created Date: Monday December 13th 2021
 * Author: Julien Cagniart
 * -----
 * Last Modified: 13/12/2021 22:49
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

const inputProps = {
  // style object for base or default style
  baseStyle: {
    field: {
      backgroundColor: "flish.400",
      /*       height: 10, */
      paddingInlineStart: "15px",
      _focus: { backgroundColor: "flish.500", },
      _placeholder: { color: "flish.700", fontSize: 14 },
      _invalid: {
        borderColor: "red.300",
        borderWidth: 2,
        textColor: "red.400",
      },
      _disabled: {
        cursor: "not-allowed",
        backgroundColor:"flish.300"
      },
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      field: {
        borderRadius: 10,
        pt: "16px",
        pb: "16px",
        pl: "20px",
        pr: "20px",
        fontSize: 12,
      },
      md: {
        field: {
          borderRadius: "40px",
          pt: "20px",
          pb: "20px",
          pl: "24px",
          pr: "24px",
          fontSize: 18,
        },
      },
      lg: {
        field: {
          borderRadius: 10,
          pt: "24px",
          pb: "24px",
          pl: "32px",
          pr: "32px",
        },
      },
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      field: {
        borderRadius: 10,
      },
    },
    white:{
      field:{
        borderRadius: 10,
        backgroundColor:"flish.100",
        _focus: { backgroundColor: "flish.300", },
      }
    }
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

const labelProps = {
  // style object for base or default style
  baseStyle: {
    textColor: "black.700",
    fontWeight: 700,
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      fontSize:13,
    },
    md: {
      fontSize:14,
    },
    lg: {
      fontSize:16,
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "",
  },
};

const errorProps = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
};
const radioProps = {
  // style object for base or default style
  baseStyle: {
    container: {},
    control: {
      bg: "flish.400",
      borderColor: "transparent",
      _disabled: { cursor: "not-allowed" },
      cursor: "pointer",
    },
    label: {
      _invalid: { textColor: "red.400" },

      textColor: "black.100",
      fontWeight: 500,
      fontSize: 14,
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      control: {
        width: 4,
        height: 4,
      },
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: "sm",
    variant: "",
    colorScheme: "flish",
  },
};
const checkBoxProps = {
  // style object for base or default style
  baseStyle: {
    container: {},
    control: {
      borderRadius: 4,
      bg: "flish.400",
      borderColor: "transparent",
    },
    label: {
      _invalid: { textColor: "red.400" },
      textColor: "black.100",
      fontWeight: 500,
      fontSize: 13,
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      control: {
        width: 4,
        height: 4,
      },
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: "sm",
    variant: "",
    colorScheme: "flish",
  },
};
const textAreaProps = {
  // style object for base or default style
  baseStyle: {
    backgroundColor: "brand.tertiary",
    /*       height: 10, */
    paddingInlineStart: "10px",
    focusBorderColor: "brand.iris100",
    _focus: { borderColor: "brand.iris80", borderWidth: 2 },
    _placeholder: { color: "brand.iris80", fontSize: 14 },

    _invalid: { borderColor: "red.300", borderWidth: 2, textColor: "red.400" },
    _disabled: {
      _placeholder: { color: "grey", fontSize: 14 },
      cursor: "not-allowed",
    },
    textColor: "brand.iris100",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      borderRadius: 10,
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: "sm",
    variant: "",
  },
};
const switchProps = {
  // style object for base or default style
  baseStyle: {
    track: {
      backgroundColor: "flish.300",
      colorScheme: "flish",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "",
    colorScheme: "flish",
  },
};

export {
  inputProps,
  labelProps,
  errorProps,
  radioProps,
  checkBoxProps,
  textAreaProps,
  switchProps,
};
