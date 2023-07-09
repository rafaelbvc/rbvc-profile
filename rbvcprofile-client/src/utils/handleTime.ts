export const timeNow = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const isosDate = today.toISOString().slice(0, 10);
  return isosDate;
};

export const formatISODate = (date?) => {
  const formatedDate = date?.slice(0,10);
  return formatedDate
}