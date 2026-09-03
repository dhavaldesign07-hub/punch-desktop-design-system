import { Button } from './components/Button/Button';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 48 }}>
      <Button variant="success">CTA</Button>
      <Button variant="error">CTA</Button>
      <Button variant="warning">CTA</Button>
      <Button variant="secondary">CTA</Button>
      <Button variant="success" disabled>CTA</Button>
    </div>
  );
}

export default App;
