let requestDishPage = new XMLHttpRequest()
requestDishPage.open("GET", "http://localhost/data.json", true)

requestDishPage.onload  = function () {
  if(requestDishPage.status === 200) {
    let response = JSON.parse(requestDishPage.responseText)
    console.log(requestDishPage);
    for( let i = 0; i < response.dishs.length; i++) {
      console.log(response.dishs[i].name);
      console.log(response.dishs[i].description);
      console.log(response.dishs[i].price);

    } // end of for
    let displayContent = "";
    for(let i = 0; i < response.dishs.length; i++) {
      let x = i + 1;
      displayContent += "Menu number" + x + " is " + response.dishs[i].name + " with price" + response.dishs[i].price
    }
    document.getElementById("message").innerHTML = dishs_list;
  } // end of if

} // end of function


requestDishPage.send();