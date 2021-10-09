import {MENU_TOGGLED} from './../constants';

export default function toggleMenu(visibility){
    return{
        type:MENU_TOGGLED,
        payload:visibility,
    }
}

// export function toggleMenu(count){
//     return{
//         type:MENU_TOGGLED,
//         payload:count,
//     }
// }