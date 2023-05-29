export const getRandomColor = () => {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
