import constants from "@config/constants";

export default {
  APPLICATION: {
    name: "GraphQL Starter",
    footer: {
      links: {
        mainPage: "Strona główna",
        registration: "Rejestracja",
        login: "Logowanie",
        rules: "Regulamin",
        aboutAuthor: "O autorze"
      },
      copyright: (currentYear = new Date().getFullYear()) => {
        if (currentYear instanceof Date) {
          currentYear = currentYear.getFullYear();
        } else if (typeof currentYear === "string") {
          currentYear = new Date(currentYear).getFullYear();
        }

        return `${currentYear} ${
          constants.AUTHOR_FULL_NAME
        }. All rights reserved.`;
      }
    }
  },
  REGISTER_PAGE: {
    registerForm: {
      errors: {
        validation: {
          mustProvideLogin: "Musisz wprowadzić login",
          mustProvidePassword: "Musisz wprowadzić hasło",
          mustProvideEmail: "Musisz wprowadzić adres email",
          minimumLengthOfPassword: `Minimalna długość hasła to ${
            constants.VALIDATION.minimumLengthOfPassword
          } znaki`,
          maximumLengthOfPassword: `Maksymalna długość hasła to ${
            constants.VALIDATION.maximumLengthOfPassword
          } znaki`,
          minimumLengthOfLogin: `Minimalna długość loginu to ${
            constants.VALIDATION.minimumLengthOfLogin
          } znaki`,
          maximumLengthOfLogin: `Maksymalna długość loginu to ${
            constants.VALIDATION.maximumLengthOfLogin
          } znaki`,
          invalidEmail: "Wprowadziłeś niepoprawny adres email",
          passwordMustContainsOneUppercase:
            "Hasło musi zawierać conajmniej jedną wielką literę",
          passwordMustContainsOneLowercase:
            "Hasło musi zawierać conajmniej jedną małą literę",
          passwordMustContainsOneDigit:
            "Hasło musi zawierać conajmniej jedną cyfre",
          passwordsAreNotTheSame: "Hasła nie są takie same"
        },
        default: "Wystąpił błąd podczas rejestracji, prosimy spróbować później"
      },
      inputLabels: {
        login: "Login",
        email: "Adres email",
        password: "Hasło",
        passwordConfirmation: "Powtórz hasło"
      },
      submitButton: "Zarejestruj się",
      success: "Pomyślnie się zarejestrowałeś"
    },
    loginForm: {
      errors: {
        default: "Wystąpił błąd podczas logowania, prosimy spróbować później"
      },
      submitButton: "Zaloguj się",
      success: "Pomyślnie się zalogowałeś"
    },
    signup: "Rejestracja",
    signin: "Logowanie",
    forgottenPassword: "Zapomniałeś hasła?",
    alreadyHaveAnAccount: "Posiadasz już konto? Zaloguj się.",
    dontHaveAnAccount: "Nie posiadasz jeszcze konta? Zarejestruj się."
  }
};