export const getJson = async (url = '', options = {}) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    ...options,
  })
  if(!res.ok){
    throw new Error(res.status);
  }
  return res.json();
}