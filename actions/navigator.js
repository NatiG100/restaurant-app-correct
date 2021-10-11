import {LINK_PRESSED} from './../constants/Index';
import {BACK_PRESSED} from './../constants/Index';

export function linkPressed(href){
    return{
        type:LINK_PRESSED,
        payload:href,
    }
}

export function backPressed(){
    return{
        type:BACK_PRESSED,
    }
}