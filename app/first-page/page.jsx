import Input from "../../components/Input";
import Button from "../../components/Button"
import styles from "./first.module.css";

export default function First() {
    return (
        <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.userInfo}>
            <h3>Conta</h3>
            <div className={styles.form}>
                <p>Nome: <span> Caduzada7 </span></p>
                <Input title="E-mail:"/>
                <Button text="Salvar"/>
            </div>
          </div>
        </div>
      </div>
    );
}