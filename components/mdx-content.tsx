import { JSX } from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import Counter from '@/components/counter';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

function Code({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  const codeHTML: string = "<code>Example</code>";

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

// Define the components object at the top level
const defaultComponents = {
  code: Code, // Now properly typed as an HTML component
  Counter,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  // Merge the default components with any components passed via props
  const mergedComponents = { ...defaultComponents, ...(props.components || {}) };

  return <MDXRemote {...props} components={mergedComponents} />;
}
