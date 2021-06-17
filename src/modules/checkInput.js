const checkInput = () => {
   const calcBlock = document.querySelector('.calc-block'),
      inputName = document.querySelectorAll('.form-name'),
      inputEmail = document.querySelectorAll('.form-email'),
      inputPhone = document.querySelectorAll('.form-phone'),
      inputMessage = document.querySelector('.mess');

   calcBlock.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/[^\d\.]/g, '');
   });

   inputName.forEach((elem) => {
      elem.addEventListener('blur', (event) => {
         event.target.value = event.target.value.replace(/[^а-я ]/gi, '').replace(/\S/g, (b) => b.toLowerCase()).replace(/(^|\s)\S/g, (a) => a.toUpperCase()).replace(/ +/g, ' ').trim();
      });
   });

   inputEmail.forEach((elem) => {
      elem.addEventListener('blur', (event) => {
         event.target.value = event.target.value.replace(/[^a-z0-9'.@~*!_-]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ');
      });
   });

   inputPhone.forEach((elem) => {
      elem.addEventListener('blur', (event) => {
         event.target.value = event.target.value.replace(/[^()+-\d]/g, '').replace(/-+/g, '-').replace(/ +/g, ' ').trim();
      });
   });

   inputMessage.addEventListener('blur', (event) => {
      event.target.value = event.target.value.replace(/[^\dа-я-]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ').trim();
   });
};

export default checkInput;