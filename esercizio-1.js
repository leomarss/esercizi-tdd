function grantUserAccess(level) {
    const permissions = {
        0: false,
        1: false,
        2: true
    };
    return permissions[level];
}

function isPasswordValid(password) {
    const specialCharacters = [
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
        "[", "]", "{", "}", ";", ":", "'", "\"", "\\", "|", ",", ".", "<", ">", "/", "?",
        "`", "~"
    ];
}