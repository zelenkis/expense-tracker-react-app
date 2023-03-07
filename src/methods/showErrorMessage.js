function showErrorMessage(errorCode, key, value) {


    let errorText = '';
    if (errorCode === 'REQUIRED_FIELD') errorText = `${key} is required.`;
    if (errorCode === 'INVALID_FIELD') errorText = `${key} is invalid. Input value: ${value}`;

    let errorMessage = errorCode + ': ' + errorText;
    return errorMessage;
}

export default showErrorMessage;