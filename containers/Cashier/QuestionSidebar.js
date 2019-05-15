import React from 'react'
import { Icon } from 'antd'

// import { ICON_CMD } from '@config'
import {
  Wrapper,
  BackBtnWrapper,
  BackTitle,
  Holder,
} from './styles/question_sidebar'

import { sidebarViewOnChange } from './logic'

const QuestionSidebar = () => (
  <Wrapper>
    <BackBtnWrapper onClick={sidebarViewOnChange.bind(this, 'pay')}>
      <Icon type="arrow-left" />
      <BackTitle>返回付款</BackTitle>
    </BackBtnWrapper>
    <Holder />
  </Wrapper>
)

export default QuestionSidebar
