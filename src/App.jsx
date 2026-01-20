import MouseTracker from './components/MouseTracker';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Atividade Render Props</h1>
      <p>Mova o mouse pela tela para ver o padrão em ação.</p>

     
      <MouseTracker
        render={({ x, y }) => (
          <div className="tracker-container">
            <h2>Coordenadas Atuais:</h2>
            <p>
              <strong>X:</strong> {x}, <strong>Y:</strong> {y}
            </p>
            
      
            <div
              className="mouse-follower"
              style={{
                position: 'absolute',
                left: x,
                top: y,
                
                transform: 'translate(-50%, -50%)', 
                pointerEvents: 'none' 
              }}
            />
          </div>
        )}
      />
    </div>
  );
}

export default App;