import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './navigation';

class App extends React.Component {
    state = {
        token: null
    };

    render() {
        return (
            <>
                <Provider store={store}>
                    <NavigationContainer>
                        <Navigation />
                    </NavigationContainer>
                </Provider>
            </>
        );
    }
}

export default App;
