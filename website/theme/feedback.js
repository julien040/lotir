/*
 * File: \src\components\feedback.js
 * Project: configuration
 * Created Date: Tuesday December 14th 2021
 * Author: Julien Cagniart
 * -----
 * Last Modified: 14/12/2021 10:53
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

const progressProps = {
    // style object for base or default style
    baseStyle: {
        track:{ //Background
            backgroundColor:"flish.400",
            borderRadius:10
        },
        filledTrack:{ //Bar
            backgroundColor:"flish.600",
            backgroundImage:"" //To avoid a blue bar when progress bar in indeterminate
        }
        
        
    },

    // default values for `size` and `variant`
    defaultProps: {
        size:"md",
      },
  };

  const spinnerProps = {
      baseStyle: {
            color:"flish.800",
      },
  };


export {progressProps, spinnerProps};