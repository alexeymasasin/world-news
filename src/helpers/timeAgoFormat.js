export const timeAgoFormat = dateString => {
  const now = new Date();
  const date = new Date(dateString);
  const secondsPassed = (now.getTime() - date.getTime()) / 1000;

  if (secondsPassed < 60) {
    return `${Math.floor(secondsPassed)}s ago`;
  }
  if (secondsPassed < 3600) {
    return `${Math.floor(secondsPassed / 60)}min ago`;
  }
  if (secondsPassed <= 86400) {
    return `${Math.floor(secondsPassed / 3600)}h ago`;
  }
  if (secondsPassed > 86400) {
    const day = Math.floor(secondsPassed / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }
};