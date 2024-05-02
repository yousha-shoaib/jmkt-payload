"use client"

import React from 'react'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import Link from 'next/link'
import Image from 'next/image'

import classes from './index.module.scss'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

const HeaderComponent = ({ header }: {header: Header}) => {

    const pathname = usePathname()

    return (
        <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
            <Gutter className={classes.wrap}>
                <Link href="/">
                    <div className='py-10'>
                    <Image className='py-20' src="/jozi-dark-xl.png" alt='jozicoin logo' width='200' height='100'/>
                    </div>
                </Link>

                <HeaderNav header={header} />
            </Gutter>
        </nav>
    )
}

export default HeaderComponent