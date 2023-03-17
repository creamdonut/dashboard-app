import { render } from '@testing-library/react';
import App from './App';

test('render app and has app class', () => {
  const { container } = render(<App />);

  const appClass = container.getElementsByClassName('app');

  expect(appClass.length).toBe(1);
});
