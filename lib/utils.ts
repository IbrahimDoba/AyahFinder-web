export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  // Use a consistent formatting approach to avoid hydration mismatches
  // toLocaleDateString can differ between server and client
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

export function formatDateISO(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString();
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
