export const metadata = {
  title: "Home - Nicole Lash",
  description: "Site para agendar um horario!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
