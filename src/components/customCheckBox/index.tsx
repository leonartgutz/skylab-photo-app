import React from 'react'
import { CheckBoxWrap } from '../../styles/global'

interface Props {
  isCheck: boolean
}

const CustomCheckBox: React.FC<Props> = ({isCheck}) => {

  return <CheckBoxWrap isCheck={isCheck} />
}

export default CustomCheckBox