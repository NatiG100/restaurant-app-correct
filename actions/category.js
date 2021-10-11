import {PREVIOUS_CATEGORY,NEXT_CATEGORY} from './../constants';
export function next(){
    return{
        type:NEXT_CATEGORY,
    }
}

export function previous(){
    return{
        type:PREVIOUS_CATEGORY,
    }
}