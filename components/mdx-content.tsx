import { JSX } from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import Counter from '@/components/counter';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
function Code({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return <code {...props}>{children}</code>;
}
const defaultComponents = {
  code: Code, 
  Counter,
};
export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  const mergedComponents = { ...defaultComponents, ...(props.components || {}) };

  return <MDXRemote {...props} components={mergedComponents} />;
}
