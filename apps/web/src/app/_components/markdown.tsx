import { MDXRemote } from 'next-mdx-remote/rsc'
import { Title } from './text/title'
import { Subtitle } from './text/subtitle'
import { Text } from './text/text'
import { TextBold } from './text/text-bold'
import { Suspense } from 'react'

const components = {
  h1: (props: any) => (
    <Title>
      {props.children}
    </Title>
  ),
  h2: (props: any) => (
    <Subtitle>
      {props.children}
    </Subtitle>
  ),
  p: (props: any) => (
    <Text>
      {props.children}
    </Text>
  ),
  b: (props: any) => (
    <TextBold>
      {props.children}
    </TextBold>
  )
}
 
type Props = {
  content?: string;
}

export function Markdown({ content }: Props) {
  return (
    <Suspense fallback={<Subtitle>Carregando...</Subtitle>}>
      <MDXRemote
        components={components}
        source={content ?? `
            ## Carregando...
        `}
      />
    </Suspense>
  )

  return 
}