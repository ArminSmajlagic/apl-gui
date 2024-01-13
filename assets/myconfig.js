
let redirectToPage = (newUrl)=>
{
  window.location = newUrl;
}

let getPar= (parName)=>
{
  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let parValue = urlParams.get(parName);
  return parValue;
}
