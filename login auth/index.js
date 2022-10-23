
const signupTrigger = document.querySelectorAll(".signup__trigger");
const signupElement = document.querySelector("#signup");
const signupWrapperElement = document.querySelector("#signup-wrapper");
const forms = document.querySelectorAll(".form");

const openFormFunc = () => {
	signupTrigger[0].classList.toggle("is-trigger-hidden");
	signupElement.classList.toggle("is-form-open");
	signupWrapperElement.classList.toggle("is-wrapper-open");
};

signupTrigger.forEach((s) => s.addEventListener("click", openFormFunc));
forms.forEach((f) => f.addEventListener("submit", (e) => e.preventDefault()));
