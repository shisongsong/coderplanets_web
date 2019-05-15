import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  min-height: 100px;
  padding: 20px;
  padding-bottom: 0;
  max-width: 300px;
  flex-wrap: wrap;
  background: ${theme('preview.articleBg')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 15px;

  ${cs.media.tablet`
    width: 50%;
    padding: 10px;
  `};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 1em;
`
export const Desc = styled.div`
  ${cs.flex()};
  margin-top: 15px;
  margin-bottom: 20px;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  flex-wrap: wrap;

  ${cs.media.mobile`
    margin-top: 6px;
    margin-bottom: 10px;
  `};
`
export const Didiver = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid;
  border-color: ${theme('preview.divider')};
`
export const NomoreDesc = styled.div`
  color: ${theme('banner.desc')};
  font-style: italic;
`
