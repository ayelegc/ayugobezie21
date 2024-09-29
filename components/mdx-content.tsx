import { JSX } from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import Counter from '@/components/counter';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

// Refactored Code component to display children
function Code({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return <code {...props}>{children}</code>;
}

// Default components to pass into MDX rendering
const defaultComponents = {
  code: Code, 
  Counter,
};

// MDXContent component to handle MDX rendering with custom components
export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  const mergedComponents = { ...defaultComponents, ...(props.components || {}) };

  return <MDXRemote {...props} components={mergedComponents} />;
}
