import * as React from 'react';

import Article from 'components/molecules/Article';
import AsyncComponent from 'components/atoms/AsyncComponent';

async function asyncArticleRead(title, newsPage) {
  const response = await fetch(`http://black-malrangcow-api.herokuapp.com/news/${newsPage}/${ title }`);

  return response.json();
}

const ArticleRead = ({ match: { params: { title, newsPage } } }) => (
  <AsyncComponent
    job={ asyncArticleRead(title, newsPage) }
    onFulfilled={ ({ content }) => ({ title }) => (
      <Article title={title}>
        {content}
      </Article>
    ) }
    onRejected={ () => null }
    WhilePending={ () => null }
    title={ title }
  />
);

export default ArticleRead;
