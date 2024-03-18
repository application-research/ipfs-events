import '@root/global.scss';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { MarkdownToJSXComponents } from './MarkdownToJSXComponents';

export function MarkdownToJSX({ children }: any) {
  const contentWithLineBreaks = children.replace(/\n/g, '  \n');
  const rehypeRawPlugin = () => rehypeRaw;

  return (
    <ReactMarkdown components={MarkdownToJSXComponents} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRawPlugin]}>
      {contentWithLineBreaks}
    </ReactMarkdown>
  );
}
