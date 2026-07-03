/**
 * Remonté à chaque navigation par l'App Router : rejoue le fondu
 * d'entrée de page défini dans globals.css (.page-enter).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter flex min-h-full flex-1 flex-col">{children}</div>;
}
