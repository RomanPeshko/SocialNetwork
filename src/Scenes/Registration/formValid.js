export const formValid = (formData) => {
    const errorObj = {};
    let isFormValid = true;

    if (!formData.email) {
        errorObj.email = 'Please input login';
        isFormValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        errorObj.email = 'Invalid email address';
    }

    if (!formData.password) {
        errorObj.password = 'Please input password';
        isFormValid = false;
    } else if (formData.password.length < 4) {
        errorObj.password = "Password too short, please enter at least 4 character";
    }

    if (!formData.Name) {
        errorObj.Name = 'Please input Name';
        isFormValid = false;
    }

    if (!formData.FirstName) {
        errorObj.FirstName = 'Please input FirstName';
        isFormValid = false;
    }

    if (!formData.City) {
        errorObj.City = 'Please input City';
        isFormValid = false;
    }

    if (!formData.Birthday) {
        errorObj.Birthday = 'Please input birthday';
        isFormValid = false;
    }

    return isFormValid ? null : errorObj;
}