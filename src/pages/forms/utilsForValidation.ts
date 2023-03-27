export function validationInputText(value: string | undefined) {
  return !(value && value.length !== 0);
}

export function validationInputDate(value: string | undefined) {
  return !value;
}

export function validationInputRadio(
  bool1: boolean | undefined,
  bool2: boolean | undefined
) {
  return !(bool1 || bool2);
}
