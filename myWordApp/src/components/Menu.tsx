// src/components/Menu.tsx
import {
    IonContent,
    IonItem,
    IonList,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
  } from '@ionic/react';
  import { Link } from 'react-router-dom';
  
  const Menu: React.FC = () => (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <Link to="/word">Word of the Day</Link>
          </IonItem>
          {/* Add other links as needed */}
        </IonList>
      </IonContent>
    </IonMenu>
  );
  
  export default Menu;
  