export const getTimeOfDay = () => {
  const hour = new Date().getHours();
  if (hour < 6) return 'dawn';
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  if (hour < 20) return 'evening';
  return 'night';
};