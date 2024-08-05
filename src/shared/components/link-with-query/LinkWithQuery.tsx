'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { AnchorHTMLAttributes } from 'react'
import styles from './LinkWithQuery.module.css'
import { SearchParamsType } from '@models/SearchParamsType'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  query?: { [key: string]: string | undefined }
  to?: string
  disabled?: boolean
  exclude?: SearchParamsType
}

export default function LinkWithQuery({
  children,
  className,
  query,
  disabled = false,
  ...rest
}: Props) {
  const params = useSearchParams()

  function prepareQuery() {
    const current = {
      ...Object.fromEntries(params?.entries() || []),
    }
    rest.exclude && delete current[rest.exclude]
    return current
  }

  return (
    <Link
      className={`${className ?? styles.button} ${disabled ? styles.disabled : ''}`}
      href={{
        query: {
          ...prepareQuery(),
          ...query,
        },
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
