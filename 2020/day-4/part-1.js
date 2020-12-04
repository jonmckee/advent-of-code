import {BIRTH_YEAR, COUNTRY_ID, EXPIRATION_YEAR, EYE_COLOR, HAIR_COLOR, HEIGHT, ISSUE_YEAR, PASSPORT_ID} from "./enums";

const allFields = [BIRTH_YEAR, COUNTRY_ID, EXPIRATION_YEAR, EYE_COLOR, HAIR_COLOR, HEIGHT, ISSUE_YEAR, PASSPORT_ID];

const byField = field => line => line.includes(field);
const getField = (field, lines) => lines.find(byField(field))?.split(':')[1]

export const hasRequiredFields = (optionalFields = [COUNTRY_ID]) => passport => {
    const requiredFields = allFields.filter(f => !optionalFields.includes(f));
    const existingFields = Object.keys(passport).filter(key => passport[key]).filter(Boolean);

    return requiredFields.every(field => existingFields.includes(field))
};

export const parsePassport = passport => {
    const lines = passport.split('\n').flatMap(s => s.split(' '));

    return {
        [BIRTH_YEAR]: getField(BIRTH_YEAR, lines),
        [ISSUE_YEAR]: getField(ISSUE_YEAR, lines),
        [EXPIRATION_YEAR]: getField(EXPIRATION_YEAR, lines),
        [HEIGHT]: getField(HEIGHT, lines),
        [HAIR_COLOR]: getField(HAIR_COLOR, lines),
        [EYE_COLOR]: getField(EYE_COLOR, lines),
        [PASSPORT_ID]: getField(PASSPORT_ID, lines),
        [COUNTRY_ID]: getField(COUNTRY_ID, lines),
    };
}

export default input => {
    const passports = input.map(parsePassport);

    return passports.filter(hasRequiredFields()).length
};