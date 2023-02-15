export const fetchRequest = async ({path}) => {
 const res = await fetch(path);
 const data = res.json()
 return data
}
