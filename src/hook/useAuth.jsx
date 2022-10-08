import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const logout = () => {
    removeCookie('token', { path: '/' })
    removeCookie('user', { path: '/' })
    setIsLogin(false)
    setUserInfo(null)
  }

  const login = (token, user) => {
    setCookie('token', token, { path: '/' })
    setCookie('user', user, { path: '/' })
  }

  return { isLogin: !!cookies.token, userInfo: cookies.user, logout, login }
}

export default useAuth
