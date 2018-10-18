import * as React from 'react';

import RenderMarkdown from 'react-markdown';
import { Panel } from 'react-bootstrap';

const ArticleContent = ({ children: content }) => (
  <Panel.Body>
    <RenderMarkdown source={ content } />
  </Panel.Body>
);

export default ArticleContent;