import { ReactElement } from 'react'
import { IStylingProperties } from '../../types/common.types'

interface Props {
    style: IStylingProperties,
    children: ReactElement[]
}

const buildClassString = (props: Props): string => {
    let classString: string = ""
    Object.keys(props.style).forEach((key: string) => { classString += `${props.style[key]} ` })
    return classString
}

const Container = (props: Props) => {

    const classString: string = buildClassString(props)

    return (
        <div className={classString}>
            {props.children}
        </div>
    )
}

export default Container
