import { Button } from './Button';

export function Toolbar() {
  return (
    <div
      style={{
        marginTop: '20px',
      }}
      onClick={() => {
        alert('You clicked on the toolbar!');
      }}
    >
      <Button onClick={() => alert('Playing!')}>Play Movie</Button>
      <Button onClick={() => alert('Uploading!')}>Upload Image</Button>
    </div>
  );
}
