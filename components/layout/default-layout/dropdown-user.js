import React, { useState } from 'react'
import { useRouter } from 'next/router'

const item = [
  {
    id: 1,
    children: [
      { id: 11, label: '會員中心', href: '/member' },
      { id: 12, label: '會員資料檢視/修改', href: '/member/info' },
      { id: 13, label: '修改密碼', href: '/member/change-password' },
      { id: 14, label: '訂單管理', href: '/member/order-list' },
      { id: 15, label: '我的收藏', href: '/member/likes' },
      { id: 16, label: '優惠券', href: '/member/coupon' },
      { id: 17, label: '登出', href: '/member/login' },
    ],
  },
]

export default function Dropdown({ items }) {
  const router = useRouter()
  const currentRoute = router.pathname
  //   console.log(currentRoute)

  const [dropdownUserOpen, setDropdownUserOpen] = useState(false)
  const toggleDropdown = () => {
    setDropdownUserOpen(!dropdownUserOpen)
  }

  const children = items[0].children

  return (
    <>
      <ul className="ed-reset slideIn">
        {children.map((v) => {
          return (
            <li key={v.id}>
              <a
                className={`dropdown-item ${
                  currentRoute === v.href ? 'active' : ''
                }`}
                href={v.href}
                onClick={toggleDropdown}
              >
                {v.label}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
