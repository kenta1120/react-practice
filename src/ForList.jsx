import React from 'react';

export default function ForList({ src }) {
  return(
    <dl>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a href="{`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}">
              {elem.title}({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

// src.map(elem => <ForItem book={elem} />)
// src（本の配列）を1個ずつ見て、そのたびに <ForItem ... /> を1個作る
// 本の数だけForItemが増える。
// book={elem}は、ForItemに「この本のデータ（elem）」を渡すという意味

