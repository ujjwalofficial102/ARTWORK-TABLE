export const truncate = (text: string | null, limit: number) => {
  if (!text) return "N/A";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};
