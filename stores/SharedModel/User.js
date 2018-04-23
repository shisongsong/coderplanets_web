import { types as t } from 'mobx-state-tree'
import Community from './Community'

const SubscribedCommunities = t.model('SubscribedCommunities', {
  entries: t.optional(t.array(Community), []),
  totalCount: t.optional(t.number, 0),
})

const ContributeRecord = t.model('ContributeRecord', {
  date: t.string,
  count: t.number,
})

const Contributes = t.model('Contributes', {
  records: t.optional(t.array(ContributeRecord), []),
  startDate: t.maybe(t.string),
  endDate: t.maybe(t.string),
  totalCount: t.maybe(t.number),
})

const GithubProfile = t.model('GithubProfile', {
  login: t.string,
  htmlUrl: t.string,
})

export const User = t.model('User', {
  // identifier is desiged to be immutable, this id would be updated when login
  id: t.optional(t.string, ''),
  nickname: t.optional(t.string, ''),
  bio: t.optional(t.string, ''),
  avatar: t.optional(t.string, ''),
  fromGithub: t.optional(t.boolean, false),
  fromWeixin: t.optional(t.boolean, false),
  subscribedCommunities: t.optional(SubscribedCommunities, {}),
  contributes: t.optional(Contributes, {}),
  githubProfile: t.maybe(GithubProfile),
})

export const EmptyUser = {
  id: '',
  nickname: '',
  bio: '',
  avatar: '',
  fromGithub: false,
  fromWeixin: false,
  subscribedCommunities: {},
  contributes: {},
  githubProfile: null,
}