import {FORM_ERROR_MESSAGES} from "../../core/constants/form-errors";

export function validateProductForm(key, value, errors) {
    let isFormValid = true;
    let hasError = false;

    if (!value && !value.length) {
        console.log(" required ", FORM_ERROR_MESSAGES[key].required)
        errors[key] = FORM_ERROR_MESSAGES[key].required;
    } else {
        switch (key) {
            case 'brand':
                errors.brand = '';
                break;
            case 'name':
                errors.name = !isNaN(value) ? FORM_ERROR_MESSAGES[key].invalid : '';
                break;
            case 'price':
                errors.price = isNaN(value) ? FORM_ERROR_MESSAGES[key].invalid : '';
                break;
            case 'weight':
                errors.weight = isNaN(value) ? FORM_ERROR_MESSAGES[key].invalid : '';
                break;

        }
    }

    Object.keys(errors).every(field => {
        if (errors[field] && !!errors[field].length) {
            isFormValid = false;
            hasError = true;
        }

        return isFormValid;
    });

    console.log(" {errors, isFormValid, hasError} : ", {errors, isFormValid, hasError})

    return {errors, isFormValid, hasError};
}