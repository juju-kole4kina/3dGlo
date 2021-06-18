const checkInput = () => {
   const calcBlock = document.querySelector('.calc-block'),
      inputName = document.querySelectorAll('.form-name'),
      inputEmail = document.querySelectorAll('.form-email'),
      inputPhone = document.querySelectorAll('.form-phone'),
      inputMessage = document.querySelector('.mess');

   inputName.forEach((elem) => {
      const nameTest = () => {
         return /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(elem.value);
      };
      elem.addEventListener('blur', (event) => {
         const target = event.target;
         if (!nameTest() || target.value === '') {
            target.style.boxShadow = "0px 0px 15px red";

         } else {
            target.style.boxShadow = "";
         }
      });
   });

   inputEmail.forEach((elem) => {
      const emailTest = () => {
         return /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/g.test(elem.value);
      };
      elem.addEventListener('blur', (event) => {
         const target = event.target;
         if (!emailTest() || target.value === '') {
            target.style.boxShadow = "0px 0px 15px red";
         } else {
            target.style.boxShadow = "";
         }
      });
   });

   inputPhone.forEach((elem) => {
      elem.addEventListener('blur', (event) => {
         const target = event.target;
         if (target.value === '') {
            target.style.boxShadow = "0px 0px 15px red";
         } else {
            target.style.boxShadow = "";
         }
      });
   });

   inputMessage.addEventListener('blur', (event) => {
      const target = event.target;
      if (target.value === '') {
         target.style.boxShadow = "0px 0px 15px red";
      } else {
         target.style.boxShadow = "";
      }
   });
};


export default checkInput;