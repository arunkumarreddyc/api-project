// Assigning values to different html element and reading them
let button = document.getElementsByClassName("btn")[0];
let pincode = document.getElementsByClassName("pincode")[0];
let result = document.getElementsByClassName("result")[0];

result.innerHTML = `<p class=''>ENTER THE PINCODE YOU WANT TO KNOW </p>`;

// on clicking the button we should get the response through the following logic
button.addEventListener("click", getdata);

async function getdata() {
  result.innerHTML = "loading...";
  try {
    let pcode = pincode.value;
    const url = `https://api.postalpincode.in/pincode/${pcode}`;
    let response = await fetch(url);
    let object = await response.json();
    result.innerHTML = `<div><h3>${object[0].PostOffice[0].Block}</h3> </div>
       `;
  } catch (error) {
    result.innerHTML = `<p>Please Enter the correct pincode</p>`;
  }
}
