import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice1() {
  const [count, setcount] = useState([0]);

  // 1. Crée un state qui garde en mémoire la valeur du compteur.
  // 2. Implémente une fonction pour incrémenter la valeur du compteur.
  // 3. Implémente une fonction pour décrémenter la valeur du compteur.
  // 4. Passe les fonctions d'incrémentation et de décrémentation aux boutons correspondants.
  return (
    <Exercice>
      <h2>Exercice 1 : Compteur simple</h2>
      <p className="instructions">
        Modifie le composant Exercice1 pour faire fonctionner le compteur et ses
        deux boutons.
      </p>
      <div className="solution">
        <div>
          <button onClick={() => setcount(count-1)}>-</button>
          <button onClick={() => setcount(count+1)}>+</button>
          <p>Compteur : {count}</p>
        </div>
      </div>
    </Exercice>
  );
}
