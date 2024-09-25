import { JSX } from 'react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Counter from '@/components/counter'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

function Code({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  const codeHTML: string = "<code>Example</code>";

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code, // Now properly typed as an HTML component
  Counter
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
