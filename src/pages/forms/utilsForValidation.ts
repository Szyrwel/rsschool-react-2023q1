export function validationInputText(value: string | undefined) {
  return !(value && value.length !== 0);
}

export function validationInputDate(value: string | undefined) {
  return !value;
}
