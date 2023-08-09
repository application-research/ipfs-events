import Markdown from 'markdown-to-jsx';
import { MarkdownToJSXComponents } from './MarkdownToJSXComponents';

export interface MarkdownToJSXProps {
  children: string;
}

export function MarkdownToJSX({ children }: MarkdownToJSXProps) {
  return (
    <Markdown
      options={{
        overrides: MarkdownToJSXComponents,
      }}
    >
      {children}
    </Markdown>
  );
}
