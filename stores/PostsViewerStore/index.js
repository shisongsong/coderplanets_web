/*
 * PostsViewerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:PostsViewerStore')
/* eslint-enable no-unused-vars */

/* const filters = { */
/* js: { */
/* time: 'today', */
/* sort: 'most_views', */
/* length: 'most_words', */
/* }, */
/* } */

/* const tags = { */
/* js: 'react', */
/* } */

const FilterModel = t.model('FilterModel', {
  time: t.optional(
    t.enumeration('time', [
      '',
      'today',
      'this_week',
      'this_month',
      'this_year',
    ]),
    ''
  ),

  sort: t.optional(
    t.enumeration('sort', [
      '',
      'most_views',
      'most_favorites',
      'most_stars',
      'most_comments',
    ]),
    ''
  ),
  wordLength: t.optional(
    t.enumeration('length', ['', 'most_words', 'least_words']),
    ''
  ),
})

const TagModel = t.model('TagModel', {
  title: t.optional(t.string, ''),
  color: t.optional(t.string, ''),
})

const PostsViewerStore = t
  .model('PostsViewerStore', {
    // TODO: rename to activeFilter
    filters: t.optional(t.map(FilterModel), {}),
    // TODO: rename to activeTag
    tags: t.optional(t.map(TagModel), {}),
    // runtime: ..
    // data: ...
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get data() {
      return self.root.posts.current
    },
    get curCommunity() {
      return self.root.communities.curCommunity
    },
    get curFilter() {
      return R.pathOr('', ['js'], self.filters.toJSON())
    },

    get curTag() {
      return R.pathOr({ title: '', color: '' }, ['js'], self.tags.toJSON())
    },
  }))
  .actions(self => ({
    selectFilter(filter, val) {
      // TODO
      const community = 'js'
      debug('curCommunity', self.curCommunity)
      const curFilter = self.filters.get(community, filter)
      const newFilter = curFilter
        ? R.merge(curFilter, { [filter]: val })
        : { [filter]: val }

      self.filters.set(community, newFilter)
    },
    selectTag(tag) {
      // TODO
      const community = 'js'
      // TODO: click to unselect
      // const curTag = self.tags.get(community)

      self.tags.set(community, tag)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostsViewerStore
