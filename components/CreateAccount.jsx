"use client";

import Link from "next/link";
import styles from "./CreateAccount.module.css";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function CreateAccount() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [match, setMatch] = useState(null);
  const [error, setError] = useState(null);

  const handleCheck = () => {
    if(input1 !== input2){
      setMatch(false);
      setError("As senhas não coincidem");
    }
    else if(input1.length < 6){
      setMatch(false);
      setError("A senha deve ter no mínimo 6 caracteres");
    }
    else if (input1.length === 0){
      setMatch(false);
      setError("A senha não pode ser vazia");
    }
    else if (input2.length === 0){
      setMatch(false);
      setError("Repita a senha");
    }
    else{
      setMatch(true);
      setError("Sucesso");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <main className={styles.main}>
          <form className={styles.loginForm}>
            <Input title="Usuário 🙎‍♂️:"/>
            <Input 
              title="Senha 🔑:"
              value={input1}
              placeholder="Digite a senha"
              onChange={(e) => setInput1(e.target.value)}
            />
            <Input 
              title="Repita a senha 🔑:"
              value={input2}
              placeholder="Repita a senha"
              onChange={(e) => setInput2(e.target.value)}
            />
            <button type="button" onClick={handleCheck}>Verificar</button>{" "}
            {match !== null && <p>{error}</p>}{" "}
            <Link href="/first-page">
              <Button text="Criar conta" />
            </Link>
            <Link href="/login">
              Entrar 
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
}