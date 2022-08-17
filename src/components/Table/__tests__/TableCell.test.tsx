import { render } from 'test-utils';
import TableCell from '../Cell';

it('should render td element by default', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell />
        </tr>
      </tbody>
    </table>,
  );
  expect(document.querySelector('td')).toBeInTheDocument();
});

it('should be able to change element to th', () => {
  render(
    <table>
      <thead>
        <tr>
          <TableCell as="th" />
        </tr>
      </thead>
    </table>,
  );
  expect(document.querySelector('th')).toBeInTheDocument();
});
