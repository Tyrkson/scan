import { JSX } from '@babel/types'
import { PropsWithChildren, ReactNode } from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { HoverPopover } from '@components/commons/popover/HoverPopover'
import classNames from 'classnames'
import * as PopperJS from '@popperjs/core'

interface InfoHoverPopoverProps {
  description: string | ReactNode
  className?: string
  placement?: PopperJS.Placement
}

export function InfoHoverPopover (props: PropsWithChildren<InfoHoverPopoverProps>): JSX.Element {
  return (
    <HoverPopover className={classNames('cursor-help group', props.className)} popover={props.description} placement={props.placement}>
      <div data-testid='InfoHoverPopover'>
        <IoMdInformationCircleOutline className='h-4 w-4 text-blue-500' />
      </div>
    </HoverPopover>
  )
}
