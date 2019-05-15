/*
 *
 * ContributorList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger } from '@utils'

import AvatarAdder from '@containers/AvatarAdder'

import withGuardian from '@components/HOC/withGuardian'
import Popover from '@components/Popover'
import GithubUserCard from '@components/GithubUserCard'

import { Wrapper, AvatarLink, Avatar, CardWrapper } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ContributorList:index')

const ContributorList = ({ users, readOnly, addContributor }) => (
  <Wrapper>
    {users.map(user => (
      <Popover
        content={
          <CardWrapper>
            <GithubUserCard user={user} />
          </CardWrapper>
        }
        placement="bottom"
        trigger="hover"
        key={user.id}
      >
        <AvatarLink>
          <Avatar src={user.avatar} />
        </AvatarLink>
      </Popover>
    ))}

    {!readOnly && <AvatarAdder onConfirm={addContributor} />}
  </Wrapper>
)

ContributorList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      nickname: PropTypes.string,
      bio: PropTypes.string,
      company: PropTypes.string,
      location: PropTypes.string,
      htmlUrl: PropTypes.string,
    })
  ).isRequired,
  addContributor: PropTypes.func,
  readOnly: PropTypes.bool,
}

ContributorList.defaultProps = {
  addContributor: debug,
  readOnly: false,
}

export default withGuardian(ContributorList)
