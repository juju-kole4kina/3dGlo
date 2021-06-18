import checkInput from "./checkInput";

const sendForm = () => {
   const postData = body => fetch('./server.php', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
   });

   const clearInput = idForm => {
      const form = document.getElementById(idForm);

      [...form.elements]
         .filter(item =>
            item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button')
         .forEach(item =>
            item.value = '');
   };

   const closePopup = () => {
      const popup = document.querySelector('.popup');
      // statusMessage.textContent = '';
      popup.style.display = 'none';
   };

   const processingForm = idForm => {
      const form = document.getElementById(idForm);
      const statusMessage = document.createElement('div');

      const showStatus = status => {
         const img = document.createElement('img');
         const statusList = {
            load: {
               message: ' Загрузка...',
               img: './images/message/waiting.gif'
            },
            error: {
               message: ' Что-то пошло не так...',
               img: './images/message/Err.png'
            },
            success: {
               message: ' Спасибо! Мы скоро с вами свяжемся!',
               img: './images/message/OK.png'
            }
         };
         statusMessage.textContent = statusList[status].message;
         img.src = statusList[status].img;
         img.height = 50;

         statusMessage.insertBefore(img, statusMessage.firstChild);
      };

      statusMessage.style.cssText = 'font-size: 2rem; color: #fff';

      const clearMessage = () => {
         statusMessage.textContent = '';
      };

      form.addEventListener('submit', event => {

         event.preventDefault();

         showStatus('load');

         form.appendChild(statusMessage);

         // postData(body)
         postData(Object.fromEntries(new FormData(form)))
            .then(response => {
               if (response.status !== 200) throw new Error(`Status network ${request.status}`);
               showStatus('success');
               clearInput(idForm);
               setTimeout(closePopup, 3000);
               setTimeout(clearMessage, 3000);
            })
            .catch(error => {
               showStatus('error');
               console.error(error);
            });

         if (!checkInput) {
            event.preventDefault();
         }
      });

   };

   processingForm('form1');
   processingForm('form2');
   processingForm('form3');
};

export default sendForm;