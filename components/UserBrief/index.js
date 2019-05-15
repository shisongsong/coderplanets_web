/*
 *
 * UserBrief
 *
 */
import React from 'react'
import PropTypes from 'prop-types'

import { DEFAULT_USER_AVATAR } from '@config'

import { makeDebugger } from '@utils'
import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  BriefTextWrapper,
  UserTitle,
  UserDesc,
  SocialSpliter,
} from './styles'

import SocialIcons from './SocialIcons'
import BadgeInfo from './BadgeInfo'
import DetailView from './DetailView'
import DigestView from './DigestView'
import Operators from './Operators'

/* eslint-disable-next-line */
const debug = makeDebugger('c:UserBrief')

class UserBrief extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showDetail: false }
  }

  toggleDetail() {
    this.setState(prevState => ({
      showDetail: !prevState.showDetail,
    }))
  }

  render() {
    const { showDetail } = this.state
    const { user, displayStyle, onEdit, onLogout, viewingType } = this.props

    return (
      <Wrapper>
        <AvatarWrapper>
          <a
            href={`/user/${user.login}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>
              <Avatar
                src={user.avatar || DEFAULT_USER_AVATAR}
                displayStyle={displayStyle}
                hover={displayStyle === 'sidebar'}
              />
            </div>
          </a>

          {displayStyle === 'sidebar' && <BadgeInfo user={user} />}
        </AvatarWrapper>

        <BriefTextWrapper>
          <UserTitle>
            {user.nickname}
            {viewingType === 'account' && (
              <Operators
                passport="owner"
                ownerId={user.id}
                onEdit={onEdit}
                onLogout={onLogout}
              />
            )}
          </UserTitle>

          {showDetail ? (
            <DetailView
              user={user}
              toggleDetail={this.toggleDetail.bind(this)}
            />
          ) : (
            <DigestView
              user={user}
              toggleDetail={this.toggleDetail.bind(this)}
            />
          )}
          <SocialSpliter />
          <UserDesc>
            <SocialIcons user={user} />
          </UserDesc>
        </BriefTextWrapper>
      </Wrapper>
    )
  }
}

UserBrief.propTypes = {
  user: PropTypes.object.isRequired,
  displayStyle: PropTypes.oneOf(['default', 'sidebar']),
  viewingType: PropTypes.oneOf(['account', 'user']),
  onEdit: PropTypes.func,
  onLogout: PropTypes.func,
}

UserBrief.defaultProps = {
  displayStyle: 'default',
  viewingType: 'user',
  onEdit: debug,
  onLogout: debug,
}

export default UserBrief
