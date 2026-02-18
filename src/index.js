function displayAnthem(response) {
  new Typewriter("#anthem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}
function generateAnthem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "3d96b8t43c234abbe3a1b07546o04abf";
  let context =
    "You are a good and worlds AI expert and knows every countries in the world national anthem song.Please write the 1 paragraph of the anthem in basic HTML and separate each line with <br /> . Make sure to follow the user instructions. Please include country name.";
  let prompt = `user instructions:Generate a national anthem for ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let nationalAnthemElement = document.querySelector("#anthem");
  nationalAnthemElement.classList.remove("hidden");
  nationalAnthemElement.innerHTML = `Generating national anthem for ${instructionsInput.value}`;
  axios.get(apiUrl).then(displayAnthem);
}
let anthemFormElement = document.querySelector("#anthem-generator-form");
anthemFormElement.addEventListener("submit", generateAnthem);
