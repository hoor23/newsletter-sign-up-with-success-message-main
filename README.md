# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

- **Newsletter sign-up form : Desktop design**

   ![](./assets/images/email%20submission%20form.png)

- **Newsletter sign-up form : Mobile design**

  ![](./design/mobile-design.jpg)

### Links

- Solution URL: [https://github.com/hoor23/newsletter-sign-up-with-success-message-main.git](https://github.com/hoor23/newsletter-sign-up-with-success-message-main.git)
- Live Site URL: [https://hoor23.github.io/newsletter-sign-up-with-success-message-main/](https://hoor23.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I have developed proficiency in managing JavaScript events, specifically focusing on submit and click events, along with a comprehensive understanding of various input events. Additionally, I have implemented a simple animation, namely 'animatebottom,' to enhance the visual presentation of successful message alerts. Lastly, I have delved into exploring diverse features pertaining to form inputs, further enriching my expertise in JavaScript development.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
  .container2 {
    display: block;
    animation-name: animatebottom;  
    animation-duration: 1s;
  }
  @keyframes animatebottom { 
from{ transform:translateY(-900px); opacity:0 } 
to{ bottom:0; opacity:1 }
}
```
```js
document.querySelector('.subscriptionForm').addEventListener('submit', (e) => {
      e.preventDefault();
      validEmail();

    });
  
    // dismiss alert message after sucessful email submission event
    dismissBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dismissAlert();
    });
   
    // Removes Invali email message event
    emailInput.addEventListener('input', (e) => {
      e.preventDefault();
      if (emailInput.value) {
        document.querySelector('.verfication').style.display = 'none';
      }
    });
```


## Author

- Github - [hoor23](https://github.com/hoor23)
- Frontend Mentor - [hoor23](https://www.frontendmentor.io/profile/hoor23)
- Linkedin - [Hoor Seyda](linkedin.com/in/hoor-seyda-901176222)

