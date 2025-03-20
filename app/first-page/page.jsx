import Input from "../../components/Input";
import Button from "../../components/Button";
import ProfileCard from "../../components/ProfileCard";
import styles from "./first.module.css";

export default function First() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.userInfo}>
                    <h3>Conta</h3>
                    <div className={styles.form}>
                        <img src="/user.jpg" alt="User Photo" className={styles.userPicture} />
                        <p>Nome: <span> Caduzada7 </span></p>
                        <p>Email: <span> carlos.eduardo@gmail.com </span></p>
                        <Button text="Salvar" />
                    </div>
                    <div className={styles.profile}>
                        <h2>Sobre Mim</h2>
                        <p>Nome: Carlos Augusto</p>
                        <p>Turma: 2TDS1</p>
                        <p>Curso: Desenvolvimento de Sistemas</p>
                        <div className={styles.cards}>
                            <ProfileCard 
                                title="HTML"  
                                icon="/html-icon.jpg" 
                            />
                            <ProfileCard 
                                title="CSS" 
                                icon="/css-icon.jpg" 
                            />
                        </div>

                        <div className={styles.profile}>
                          <h2>Hobby's</h2>
                        <div className={styles.cards2}>
                            <ProfileCard 
                                title="PESCA"  
                                icon="/icon-pesca.jpg" 
                            />
                            <ProfileCard 
                                title="FUTEBOL" 
                                icon="/futebol-icon.jpg" 
                            />
                            <ProfileCard 
                                title="FREE FIRE" 
                                icon="/ff-icon.jpg" 
                            />
                            <ProfileCard 
                                title="CORINTHIANS" 
                                icon="/corinthians-icon.jpg" 
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}