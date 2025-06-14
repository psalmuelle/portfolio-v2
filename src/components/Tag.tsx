export default function Tag({ children }: { children?: React.ReactNode }) {
  return (
    <span className="bg-primary-900 text-primary-100 rounded-full px-2 py-1 text-xs font-medium">
      {children}
    </span>
  );
}
