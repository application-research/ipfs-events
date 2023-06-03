import Markdown from 'markdown-to-jsx';

export interface MarkdownToJSXProps {
  children: string;
}

export function MarkdownToJSX({ children }: MarkdownToJSXProps) {
  return (
    <Markdown
    // to do: add styled components for the markdown options
    //  options={{
    //     overrides: MarkdownToJSXComponents,
    //   }}
    >
      {children}
    </Markdown>
  );
}
