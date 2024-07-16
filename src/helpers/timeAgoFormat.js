export const timeAgoFormat = dateString => {
  const now = new Date();
  const date = new Date(dateString);
  const secondsPassed = (now.getTime() - date.getTime()) / 1000;

  if (secondsPassed < 60) {
    return `${Math.floor(secondsPassed)}с. назад`;
  }
  if (secondsPassed < 3600) {
    return `${Math.floor(secondsPassed / 60)}мин. назад`;
  }
  if (secondsPassed <= 86400) {
    return `${Math.floor(secondsPassed / 3600)}ч. назад`;
  }
  if (secondsPassed > 86400) {
    const day = Math.floor(secondsPassed / 86400);
    return day === 1 ? `${day}д. назад` : `${day}д. назад`;
  }
};