import { types as t } from 'mobx-state-tree'

import { FILTER } from '../../utils'

export const ContentFilter = t.model('ContentFilter', {
  when: t.optional(
    t.enumeration('when', [
      '',
      FILTER.TODAY,
      FILTER.THIS_WEEK,
      FILTER.THIS_MONTH,
      FILTER.THIS_YEAR,
    ]),
    ''
  ),

  sort: t.optional(
    t.enumeration('sort', [
      '',
      FILTER.MOST_VIEWS,
      FILTER.MOST_FAVORITES,
      FILTER.MOST_STARS,
      FILTER.MOST_COMMENTS,
      FILTER.MOST_STAR,
      FILTER.MOST_FORK,
      FILTER.MOST_WATCH,
    ]),
    ''
  ),
  length: t.optional(
    t.enumeration('length', ['', FILTER.MOST_WORDS, FILTER.LEAST_WORDS]),
    ''
  ),
  // job
  jobSalary: t.optional(t.string, ''),
  jobExp: t.optional(t.string, ''),
  jobEducation: t.optional(t.string, ''),
  jobField: t.optional(t.string, ''),
  jobFinace: t.optional(t.string, ''),
  jobScale: t.optional(t.string, ''),
  // video
  videoSource: t.optional(t.string, ''),
  readState: t.optional(
    t.enumeration('readState', ['', FILTER.READ, FILTER.UNREAD]),
    ''
  ),
})

export const holder = 1
