import ForItem from './ForItem';

export default function Fornest({ src }) {
  return (
    <dl>
      {src.map(elem =>
        <ForItem book={elem} key={elem.isbn} />
      )}
    </dl>
  );
}
