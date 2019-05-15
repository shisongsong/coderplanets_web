import styled from 'styled-components'
import { theme } from '@utils'

export const Wrapper = styled.div`
  width: ${({ radius }) => radius};
  height: ${({ radius }) => radius};
  border-radius: 100%;
  background-color: ${theme('thread.articleDigest')};

  margin-left: ${({ space }) => space};
  margin-right: ${({ space }) => space};
  display: block;
`

export const Holder = 1
