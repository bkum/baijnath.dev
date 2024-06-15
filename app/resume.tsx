import { InferGetStaticPropsType } from 'next';
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allAuthors } from 'contentlayer/generated';


const DEFAULT_LAYOUT = 'ResumeLayout'; 
const layout = "";
export const getStaticProps = async () => {
    const author = allAuthors.find((p) => p.slug === 'resume') || {layout};
    return { props: { author } };
  };

export default function Resume({ author }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <MDXLayoutRenderer 
        layout={author.layout || DEFAULT_LAYOUT}
        code=""
        components={components} 
        toc=""
        />
  )
}
