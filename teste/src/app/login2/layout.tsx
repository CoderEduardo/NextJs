//layouts aninhados, você poder ter diferentes para cada parte do site
//toda página dentro de login2 vai ter o mesmo laytou que essa aqui

export default function Login2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
        </ul>
      </aside>
      <main className="flex-1 p-6">{children}</main>    {/*todo meu conteúdo de page.tsx vai fazer parte desse children*/}
    </div>
  );
}
