import Markdown from 'markdown-to-jsx';
import { MarkdownToJSXComponents } from './MarkdownToJSXComponents';

export interface MarkdownToJSXProps {
  children: string;
}

export function MarkdownToJSX({ children }: MarkdownToJSXProps) {
  const contentWithLineBreaks = children.replace(/\n/g, '  \n');

  return (
    <Markdown
      options={{
        overrides: MarkdownToJSXComponents,
      }}
    >
      {contentWithLineBreaks}
    </Markdown>
  );
}
