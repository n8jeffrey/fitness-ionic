export default function validateEditProfile(values) {
    let errors = {};

    //Name Errors
    if(!values.name) {
        errors.name = "A username is required."
    }

    //Email Errors
    if(!values.email) {
        errors.email = "Your email is required."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Your email is invalid'
    }

    //Current Password Errors
    if(!values.currentPassword) {
        errors.currentPassword = "Your current password is required."
    } else if (values.currentPassword.length < 6) {
        errors.currentPassword = 'Your password must be at least 6 characters long.'
    }

    //New Password Errors
    if (values.newPassword.length < 6) {
        errors.newPassword = 'Your new password must be at least 6 characters long.'
    }

    return errors
}