import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

export default function Nav({ disabled }) {
  const params = useParams();
  const { num, section } = params;
  const history = useHistory();
  return (
    <div>
      <h1>Super Hero Catalogue</h1>
      <button disabled={num === '1'} onClick={() => history.push(`/${section}/${Number(num) - 1}`)}>
        Previous Page
      </button>
      <button disabled={num === '1' && section === 'home'} onClick={() => history.push('/home/1')}>
        Home
      </button>
      <button disabled={disabled} onClick={() => history.push(`/${section}/${Number(num) + 1}`)}>
        Next Page
      </button>
    </div>
  );
}
