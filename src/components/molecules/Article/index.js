import * as React from 'react';

import ArticleTitle from 'components/atoms/ArticleTitle';
import ArticleContent from 'components/atoms/ArticleContent';
import { Panel } from 'react-bootstrap';

const Article = ({ title, children: content }) => (
  <Panel>
    <ArticleTitle>
      { title }
    </ArticleTitle>
    <ArticleContent>
      { content }
    </ArticleContent>
  </Panel>
);

export default Article;
