import ToastNotify from '@components/toastNotify';
import RootStack from '@navigation';
import {persistor, store} from '@redux/stores';
import Colors from 'configs/colors';
import {getSize} from 'configs/responsive';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ToastProvider} from 'react-native-toast-notifications';
import {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';
import Icon from 'react-native-vector-icons/Ionicons';
import {PersistQueryClientProvider} from 'react-query/PersistQueryClientProvider';
import {persistOptions, queryClient} from 'react-query/queryClient';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  const renderToast = useCallback(
    (toastOptions: ToastProps) => <ToastNotify {...toastOptions} />,
    [],
  );

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PersistQueryClientProvider
            client={queryClient}
            persistOptions={persistOptions}>
            <ToastProvider
              renderToast={renderToast}
              warningIcon={
                <Icon
                  name={'alert-circle-outline'}
                  color={Colors.redHolder}
                  size={getSize.m(20)}
                />
              }
              successIcon={
                <Icon
                  name={'checkmark-circle-outline'}
                  color={'#01AB6F'}
                  size={getSize.m(20)}
                />
              }>
              <RootStack />
            </ToastProvider>
          </PersistQueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
