const dropdowns = document.querySelectorAll(".dropdown");

//loop through all dropdown elements
dropdowns.forEach((dropdown) => {
  //get inner elements from each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  // we are using this method in order to have multiple dropdown menus on the page work

  // Add a click event to the select element
  select.addEventListener("click", () => {
    // Add the clicked select styles to the select element
    select.classList.toggle("select-clicked");
    // Add the rotate styles to the caret element
    caret.classList.toggle("caret-rotate");
    // Add the open styles to the menu element
    menu.classList.toggle("menu-open");
  });

  //Loop through all option elements
  options.forEach((option) => {
    //Add a click event to the option element
    option.addEventListener("click", () => {
      //change selected inner text to clicked option inner text
      selected.innerText = option.innerText;
      //Add the clicked select styles to the caret element
      caret.classList.remove("caret-rotate");
      //Add the open styles to the menu element
      menu.classList.remove("menu-open");
      //Remove active class from all option elements
      options.forEach((option) => {
        option.classList.remove("active");
      });
     //Add active class to clicked option element
     option.classList.add('active');
    });
  });
});
