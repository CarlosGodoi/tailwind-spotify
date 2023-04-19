import './globals.css';

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  );
}
