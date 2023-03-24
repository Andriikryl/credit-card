const expirationSelect = document.querySelector("[data-expiration-year]");
const logo = document.querySelector("[data-logo]");

const currentYear = new Date().getFullYear();
for (let i = currentYear; i < currentYear + 10; i++) {
  const option = document.querySelector("option");
  option.value = i;
  option.innerText = i;
  expirationSelect.append(option);
}
