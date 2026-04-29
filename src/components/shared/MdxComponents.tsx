import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CustomLink = (props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  const href = props.href
  if (href?.startsWith('/')) {
    return <Link 
            href={href} 
            {...props} 
            className='mx-1 text-primary font-semibold decoration-1 hover:decoration-2 underline underline-offset-2 transition-all' 
          />
  }
  if (href?.startsWith('#')) {
    return <a {...props} className='mx-1 text-primary font-semibold decoration-1 hover:decoration-2 underline underline-offset-2 transition-all' />
  }
  return <a 
          target="_blank"
          rel="noopener noreferrer nofollow" 
          {...props} 
          className='mx-1 text-primary font-semibold decoration-1 hover:decoration-2 underline underline-offset-2 transition-all' 
        />
}

// 自定义代码块组件
const CustomCode = (props: any) => {
  const { children, className } = props;
  const match = /language-(\w+)/.exec(className || '');
  
  // 如果是在pre标签内的code，可能是代码块的一部分
  const isInPre = 
    typeof props.node?.parentNode?.tagName === 'string' && 
    props.node.parentNode.tagName.toLowerCase() === 'pre';
  
  // 对于行内代码（不在pre内且没有语言标记）
  if (!isInPre && !match) {
    return (
      <code className="rounded-sm mx-1 px-1.5 py-0.5 bg-zinc-100 dark:bg-background text-zinc-800 dark:text-zinc-200 font-mono text-sm " {...props} />
    );
  }
  
  // 对于带语言标记的代码块
  if (match) {
    return (
      <SyntaxHighlighter
        style={oneDark as any}
        language={match[1]}
        PreTag="div"
        className="rounded-xl my-6 overflow-hidden shadow-lg"
        showLineNumbers={true}
        wrapLines={true}
        customStyle={{
          margin: '1.5rem 0',
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    );
  }
  
  // 对于pre内的普通代码（无语言标记的代码块）
  // 返回普通代码，不添加任何样式，让CustomPre处理外层样式
  return <code {...props}>{children}</code>;
};

// 自定义预格式化代码块容器
const CustomPre = (props: any) => {
  const { children } = props;
  
  // 检查是否包含SyntaxHighlighter组件
  if (children && children.type === SyntaxHighlighter) {
    return children; // 直接返回SyntaxHighlighter，不添加额外样式
  }
  
  // 检查children是否已经是经过CustomCode处理的元素
  // 通过检查className判断是否已经应用了样式
  if (
    children &&
    children.props &&
    children.props.className &&
    (children.props.className.includes('bg-zinc') || children.props.className.includes('language-'))
  ) {
    // 这种情况下直接返回children，避免重复添加背景色
    return children;
  }
  
  // 对于无语言标记的普通代码块，添加基本样式
  return (
    <pre className="my-6 bg-zinc-100 dark:bg-background text-sm tracking-tight rounded-xl p-4 overflow-x-auto shadow-md font-mono" {...props}>
      {children}
    </pre>
  );
};

export const mdxComponents: MDXComponents = {
  Image: (props: ImageProps) => <Image {...props} className='rounded-3xl my-8 shadow-xl hover:shadow-2xl transition-shadow duration-300' />,
  a: CustomLink,
  h1: (props: any) => (
    <h1 
      className="mt-10 mb-6 text-4xl font-bold tracking-tight sm:text-5xl border-b pb-2 border-zinc-200 dark:border-zinc-700"
      {...props} 
    />
  ),
  h2: (props: any) => (
    <h2 
      className="mt-10 mb-6 text-3xl font-bold tracking-tight sm:text-4xl border-b pb-1 border-zinc-200 dark:border-zinc-700"
      {...props} 
    />
  ),
  h3: (props: any) => (
    <h3 
      className="mt-8 mb-4 text-2xl font-bold tracking-tight sm:text-3xl"
      {...props} 
    />
  ),
  h4: (props: any) => (
    <h4 
      className="mt-6 mb-4 text-xl font-bold tracking-tight"
      {...props} 
    />
  ),
  p: (props: any) => (
    <p 
      className="my-6 text-base leading-relaxed opacity-85"
      {...props} 
    />
  ),
  ul: (props: any) => (
    <ul
      className="my-6 pl-6 space-y-2"
      style={{ listStyleType: 'disc' }}
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol 
      className="my-6 pl-6 space-y-2"
      style={{ listStyleType: 'decimal' }}
      {...props}
    />
  ),
  li: (props: any) => (
    <li 
      className="pl-2 opacity-85"
      {...props} 
    />
  ),
  blockquote: (props: any) => (
    <blockquote 
      className="my-6 pl-6 border-l-4 border-primary italic py-3 text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/50 rounded-r-lg" 
      {...props} 
    />
  ),
  hr: (props: any) => (
    <hr
      className="my-8 border-zinc-300 dark:border-zinc-700"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="my-8 overflow-auto rounded-lg shadow-md">
      <table 
        className="w-full border-collapse text-left text-sm"
        {...props} 
      />
    </div>
  ),
  th: (props: any) => (
    <th 
      className="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-4 py-3 font-medium" 
      {...props} 
    />
  ),
  td: (props: any) => (
    <td 
      className="border-b border-zinc-200 dark:border-zinc-800 px-4 py-3" 
      {...props} 
    />
  ),
  code: CustomCode,
  pre: CustomPre,
}
