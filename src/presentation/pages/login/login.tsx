import React from 'react'
import styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Logo from '@/presentation/components/logo/logo'

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <header className={styles.header}>
       <Logo />
        <h1>7CJ - Enquetes para Programadores</h1>
      </header>
      <form className={styles.form}>
        <h2>Login</h2>
        <div className={styles.inputWrap}>
        <input type="email" name="email" placeholder="Digite seu e-mail"/>
       <span className={styles.status}>🔴</span>
        </div>
         <div className={styles.inputWrap}>
        <input type="password" name="password"  placeholder="Digite sua Senha"/>
       <span className={styles.status}>🔴</span>
        </div>
        <button className={styles.submit} type="submit">Entrar</button>
        <span className={styles.link} >Criar conta</span>
        <div className={styles.errorWrap}>
          <Spinner className={styles.spinner}/>
          <span className={styles.error}>Erro</span>
        </div>
      </form>
      <footer className={styles.footer}/>
    </div>
)
}

export default Login
