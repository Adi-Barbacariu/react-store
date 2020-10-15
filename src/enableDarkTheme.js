export function enableDarkTheme() {
  const body = document.querySelector("body");

  body.style.backgroundColor = "rgb(20, 20, 20)";
  body.style.color = "#fff";
}

export function enableLightTheme() {
  const body = document.querySelector("body");

  body.style.backgroundColor = "#fff";
  body.style.color = "#000";
}
