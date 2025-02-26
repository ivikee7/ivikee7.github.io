import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className='text-5xl'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-4xl'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-3xl'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-2xl'>{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className='text-xl'>{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className='text-lg'>{children}</h6>
    ),
    p: ({ children }) => (
      <p className='text-base'>{children}</p>
    ),
    ...components,
  }
}