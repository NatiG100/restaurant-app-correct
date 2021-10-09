import { LANGUAGE_CHANGED } from "../constants";

export function changeLanguage(langCode){
    return {
        type:LANGUAGE_CHANGED,
        payload:langCode,
    }
}