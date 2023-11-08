// TODO slice need to be optional chaining
export function capitalizeAllwordAndSlic(string) {
    //   return string.charAt(0).toUpperCase() + string.slice(1);
    return string.slice(0, 3).toUpperCase();
}
