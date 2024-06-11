import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const App = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <h1>Hi</h1>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default App;
