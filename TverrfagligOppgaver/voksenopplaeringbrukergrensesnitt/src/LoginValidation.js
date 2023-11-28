export default function Validation(values) {
        let error = {}
        const email_pattern = /\S+@\S+\.\S+/;
        const password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if(values.email === "") {
                error.email = "Email is required"
        } else if(!email_pattern.test(values.email)) {
                error.email = "Email didn't match"
        } else {
                error.email = ""
        }

        if(values.password === "") {
                error.password = "Password is required"
        } else if(!password_pattern.test(values.password)) {
                error.password = "Password didn't match"
        } else {
                error.password = ""
        }
        return error;
}