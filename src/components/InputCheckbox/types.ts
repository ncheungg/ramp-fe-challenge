import { FunctionComponent, MouseEvent } from "react"

type InputCheckboxProps = {
  id: string | number
  checked?: boolean
  onClick: (event: MouseEvent) => void
  onChange: (newValue: boolean) => void
  disabled?: boolean
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
