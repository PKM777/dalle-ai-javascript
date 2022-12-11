const inp = document.getElementById("prompt");
const btn = document.getElementById("submit");
const imgediv = document.getElementById("imager");
const msgr = document.getElementById("msg");

imgediv.src = "";
msgr.textContent = "";

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (inp.value === "") {
    alert("enter the prompt");
    return;
  }

  generateImageRequest(inp.value);
});

async function generateImageRequest(prompt) {
  try {
    const response = await fetch("/openAi/imageGenerate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error("That image could not be generated");
    }
    const data = await response.json();
    const imageURl = data.data;
    document.getElementById("imager").src = imageURl;
  } catch (error) {
    msgr.innerText = error.message;
  }
}
