import EstiloGlobal, { Wallpaper, AppArea, WorkArea } from "./Styles";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Wallpaper />
      <AppArea>
        <WorkArea>
          <aside>
            <p>A</p>
          </aside>
          <main>
            <p>Ailton Coisa</p>
          </main>
        </WorkArea>
      </AppArea>
    </>
  );
}

export default App;
