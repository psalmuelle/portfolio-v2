export default function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formatted = date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });

  return formatted;
}
