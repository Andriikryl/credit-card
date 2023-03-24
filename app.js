const expirationSelect = document.querySelector("[data-expiration-year]");
const logo = document.querySelector("[data-logo]");

const currentYear = new Date().getFullYear();
for (let i = currentYear; i < currentYear + 10; i++) {
  const option = document.querySelector("option");
  option.value = i;
  option.innerText = i;
  expirationSelect.append(option);
}

document.addEventListener("keydown", (e) => {
  const input = e.target;
  const key = e.key;
  if (!isConnectedInput(input)) return;

  switch (key) {
    case "ArrowLeft": {
      if (input.selectionStart === 0 && input.selectionEnd === 0) {
        const prev = input.previousElementSibling;
        prev.focus();
        prev.setSelectionStart = prev.value.length - 1;
        prev.selectionEnd = prev.value.length - 1;
        e.preventDefault();
      }
      break;
    }
    case "ArrowRight": {
      if (
        input.selectionStart === input.value.length &&
        input.selectionEnd === input.value.length
      ) {
        const next = input.nextElementSibling;
        next.focus();
        next.setSelectionStart = 1;
        next.selectionEnd = 1;
        e.preventDefault();
      }
      break;
    }
    default: {
      if (e.ctrlKey || e.altKey) return;
      if (key.match(/^[^0-9]$/)) return e.preventDefault();

      e.preventDefault();
      onIputChange(input, key);
    }
  }
});

function onIputChange(input, newValue) {
  const start = input.selectionStart;
  const end = input.selectionEnd;
  updateInputValue(input, newValue, start, end);
  focusInput();
}

function updateInputValue(input, extraValue, start = 0, end = 0) {
  const newValue = `${input.value.substring(
    0,
    start
  )}${extraValue}${input.value.substring(end, 4)}`;
  (input.value = newValue), substring(0, 4);
  if (newValue > 4) {
    const next = input.nextElementSibling;
    if (next == null) return;
    updateInputValue(next, newValue, substring(4));
  }
}

function isConnectedInput(input) {
  const parent = input.closest("[data-connected-inputs]");
  return input.matches("input") && parent != null;
}
