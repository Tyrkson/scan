import { PropsWithChildren } from 'react'
import classNames from 'classnames'

export function AdaptiveList (props: PropsWithChildren<{ className?: string }>): JSX.Element {
  return (
    <div
      data-testid='AdaptiveList'
      className={classNames(
        'rounded-lg border border-gray-200 overflow-hidden', props.className
      )}
    >
      <div className='table w-full border-collapse'>
        <div className='table-row-group'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

function Row (props: PropsWithChildren<{ name: string, className?: string, testId?: string }>): JSX.Element {
  return (
    <div className='table-row border-b border-gray-100 last:border-b-0'>
      <div className='table-cell px-4 md:px-6 py-3'>
        {props.name}:
      </div>
      <div className={classNames('table-cell px-4 md:px-6 py-3 text-gray-600 align-middle', props.className)} data-testid={props.testId}>
        {props.children}
      </div>
    </div>
  )
}

AdaptiveList.Row = Row
