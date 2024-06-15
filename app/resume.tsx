import { InferGetStaticPropsType } from 'next';
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allAuthors } from 'contentlayer/generated';


export const getStaticProps = async () => {
    const author = allAuthors.find((p) => p.slug === 'resume');
  
    return { props: { author } };
  };

  const DEFAULT_LAYOUT = 'ResumeLayout';
export default function Resume({ author }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <MDXLayoutRenderer 
        layout={author.layout || DEFAULT_LAYOUT}
        code={author.code}
        components={components} 
        toc={author.toc} 
        />
  )
}
