import { parsePassport } from './part-1';
import {
    BIRTH_YEAR,
    COUNTRY_ID,
    EXPIRATION_YEAR,
    EYE_COLOR,
    HAIR_COLOR,
    HEIGHT,
    ISSUE_YEAR,
    PASSPORT_ID
} from './enums';

const numberInRange = (number, min, max) => +number >= min && +number <= max;

const validateHeight = hgt => {
    const height = parseInt(hgt);

    if (hgt?.includes('cm')) {
        return numberInRange(height, 150, 193);
    } else if (hgt?.includes('in')) {
        return numberInRange(height, 59, 76);
    } else {
        return false;
    }
};

const validateHairColor = hcl => {
    const chars = hcl?.split('#');

    if (!chars || chars.length !== 2) {
        return false;
    } else {
        if (chars[1].length !== 6) {
            return false;
        }

        return chars[1].split('').every((_, i) => {
            const code = chars[1].charCodeAt(i);

            return numberInRange(code, 48, 57) || numberInRange(code, 97, 102);
        });
    }
};

const validateEyeColor = ecl =>
    ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl);

const validatePassportId = id => id?.length === 9;

const validators = {
    [BIRTH_YEAR]: yr => numberInRange(yr, 1920, 2002),
    [ISSUE_YEAR]: yr => numberInRange(yr, 2010, 2020),
    [EXPIRATION_YEAR]: yr => numberInRange(yr, 2020, 2030),
    [HEIGHT]: validateHeight,
    [HAIR_COLOR]: validateHairColor,
    [EYE_COLOR]: validateEyeColor,
    [PASSPORT_ID]: validatePassportId,
    [COUNTRY_ID]: () => true
};

const validatePassport = passport => {
    return Object.keys(passport).every(key => {
        const value = passport[key];

        return validators[key](value);
    });
};

export default input => {
    const passports = input.map(parsePassport);

    return passports.count(validatePassport);
};
