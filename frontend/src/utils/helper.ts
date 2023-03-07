export function getOnlyNumbers(value:any) {
  return value.replace(/\D/g, '');
}