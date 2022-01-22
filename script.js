let button = document.getElementsByClassName("btn")[0];
let pincode = document.getElementsByClassName("pincode")[0];
let result = document.getElementsByClassName("result")[0];

button.addEventListener("click", () => {
  //take the input value via input form
  console.log(pincode.value);
  let pcode = pincode.value;
});

const url = `https://api.postalpincode.in/pincode/${pcode}`;
result.innerHTML = "ENTER THE PINCODE YOU WANT TO KNOW ";

// on clicking the button we should get the response through the following logic
button.addEventListener("click", getdata);

async function getdata() {
  result.innerHTML = "loading...";
  try {
    let response = await fetch(url);
    let object = await response.json();
    console.log(object);
    result.innerHTML = `<div><h3>${object[0].PostOffice[0].Block}</h3> </div>
       `;
  } catch (error) {
    console.log(error);
  }
}
