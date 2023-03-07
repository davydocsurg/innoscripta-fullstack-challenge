const serializeParams = (obj: { [key: string]: any }) => {
  let str = []
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      if (Array.isArray(obj[p])) {
        obj[p].forEach((item:string) => {
          str.push(encodeURIComponent(p) + '[]=' + encodeURIComponent(item));
        });
      } else {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
  return str.join('&')
}

export default serializeParams
