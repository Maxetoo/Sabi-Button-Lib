import React, { useEffect, useRef, useState } from 'react'
import { sizes } from './features/Dimensions'
import { colorThemes } from './features/ColorThemes'
import { SabiBtnProps } from './types/SabiBtnProps'
import { propsObj } from './features/PropsObj'
import { createUndefinedPropError } from './propsError/Error'
import './styling/main.css'

export const SabiBtn = (props: SabiBtnProps) => {
  const [inspectBtnType, setInspectBtnType] = useState<string>('')
  const btnTarget = useRef<any>(null)
  const {
    btnType = 'glance',
    size = 's',
    theme = 'blue',
    width,
    fontSize,
    height,
    leftIcon,
    rightIcon,
    borderRadius,
    onFocus,
    onClick,
    shadow,
    border,
    transition,
    ...args
  } = props

  useEffect(() => {
    setInspectBtnType(btnType)
  }, [btnType])

  useEffect(() => {
    createUndefinedPropError(props.children)
  }, [props])

  useEffect(() => {
    if (btnType === 'glow' && theme !== 'white') {
      throw new Error('"glow" btnType prop must accept white as theme prop')
    }
  }, [btnType, theme])

  useEffect(() => {
    const keys = Object.keys(props)
    let check = keys.filter((val) => !propsObj.includes(val))
    if (check.length > 0) {
      throw new Error(`${check} is not a prop in this component`)
    }
  }, [props])

  useEffect(() => {
    const key = Object.keys(colorThemes)
    const check = key.includes(theme)
    if (!check) {
      throw new Error(`invalid color theme!. Checkout these: ${key}`)
    }
  }, [theme])

  useEffect(() => {
    const key = Object.keys(sizes)
    const check = key.includes(size)
    if (!check) {
      throw new Error(`invalid size!. Checkout these: ${key}`)
    }
  }, [size])

  useEffect(() => {
    if (btnType === '') {
      throw new Error(
        "btnType can't be an empty string!, Either remove it or add a btnType"
      )
    }
    if (theme === '') {
      throw new Error(
        "theme can't be an empty string!, Either remove it or add a theme"
      )
    }
    if (size === '') {
      throw new Error(
        "size can't be an empty string!, Either remove it or add size"
      )
    }
  }, [btnType, theme, size])

  return (
    <button
      {...args}
      ref={btnTarget}
      type='button'
      style={{
        height: `${!height ? sizes[size].height : height}`,
        width: `${!width ? sizes[size].width : width}`,
        fontSize: `${!fontSize ? sizes[size].fz : fontSize}`,
        border: `${
          !border
            ? inspectBtnType === 'outline'
              ? `solid 1.5px ${colorThemes[theme].bg}`
              : 'none'
            : border
        }`,
        borderRadius: borderRadius,
        boxShadow: shadow,
        transition: transition,
        color: `${
          inspectBtnType !== 'solid' &&
          inspectBtnType !== 'glow' &&
          inspectBtnType !== 'glance'
            ? `${colorThemes[theme].bg}`
            : '#fffffe'
        }`,
      }}
      className={`sabi--btn ${
        btnType ? `sabi-${theme} whole--sabibtn-${btnType}` : null
      }`}
      onMouseOver={() => {
        if (inspectBtnType === 'outline') {
          btnTarget.current.style.background = `${colorThemes[theme].bg}`
          btnTarget.current.style.color = `${colorThemes[theme].color}`
        }
        if (inspectBtnType === 'faint') {
          btnTarget.current.style.background = `${colorThemes[theme].bg}`
          btnTarget.current.style.color = `${colorThemes[theme].color}`
          btnTarget.current.style.opacity = `70%`
        }
        if (inspectBtnType === 'glance') {
          btnTarget.current.style.background = ``
          btnTarget.current.style.color = `${colorThemes[theme].bg}`
          btnTarget.current.style.border = `solid 1.5px ${colorThemes[theme].bg}`
        }
      }}
      onMouseLeave={() => {
        if (inspectBtnType === 'outline') {
          btnTarget.current.style.background = ''
          btnTarget.current.style.color = `${colorThemes[theme].bg}`
        }
        if (inspectBtnType === 'faint') {
          btnTarget.current.style.background = ``
          btnTarget.current.style.color = `${colorThemes[theme].bg}`
          btnTarget.current.style.opacity = `100%`
        }
        if (inspectBtnType === 'glance') {
          btnTarget.current.style.background = `${colorThemes[theme].bg}`
          btnTarget.current.style.color = `${colorThemes[theme].color}`
        }
      }}
      onFocus={() => onFocus}
      onClick={onClick}
    >
      <span
        className={`sabi-main-icon ${leftIcon && 'sabi--left'}`}
        style={{ fontSize: `${sizes[size].icon}` }}
      >
        {leftIcon}
      </span>
      {props.children}
      <span
        className={`sabi-main-icon ${rightIcon && 'sabi--right'}`}
        style={{ fontSize: `${sizes[size].icon}` }}
      >
        {rightIcon}
      </span>
    </button>
  )
}
