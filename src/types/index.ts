import type { HTMLAttributes, ReactHTML, ReactNode } from "react"

export interface TransformedNode {
  type: keyof ReactHTML
  props: HTMLAttributes<HTMLElement>
  children: ReactNode[]
}
