
const checkInput = (form) => {
   const calcBlock = form.querySelector('.calc-block'),
      inputName = form.querySelectorAll('.form-name'),
      inputEmail = form.querySelectorAll('.form-email'),
      inputPhone = form.querySelectorAll('.form-phone'),
      inputMessage = form.querySelectorAll('.mess');

   let result = true;
   inputName.forEach((elem) => {
      const nameTest = () => {
         return /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(elem.value);
      };
      if (elem.value === '' || !nameTest()) {
         elem.style.boxShadow = "0px 0px 15px red";
         result = false;
      } else {
         elem.style.boxShadow = "";
      }
   });

   inputEmail.forEach((elem) => {
      const emailTest = () => {
         return /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/g.test(elem.value);
      };
      if (elem.value === '' || !emailTest()) {
         elem.style.boxShadow = "0px 0px 15px red";
         result = false;
      } else {
         elem.style.boxShadow = "";
      }
   });

   inputPhone.forEach((elem) => {
      if (elem.value === '') {
         elem.style.boxShadow = "0px 0px 15px red";
         result = false;
      } else {
         elem.style.boxShadow = "";
      }
   });
   inputMessage.forEach((elem) => {
      if (elem.value === '') {
         elem.style.boxShadow = "0px 0px 15px red";
         result = false;
      } else {
         elem.style.boxShadow = "";
      }
   });
   return result;
};


export default checkInput;
