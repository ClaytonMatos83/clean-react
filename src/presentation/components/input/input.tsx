import React from 'react'
import styles from "./input-styles.scss"

type Props =  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
    const enableInput = (event: React.FocusEvent<HTMLInputElement>): void =>{
        event.target.readOnly = false
    }
  return (
        <div className={styles.inputWrap}>
        <input {...props} readOnly onFocus={enableInput}/>
        <span className={styles.status}>🔴</span>
        </div>
    )
}

    export default Input