import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { login } from './api/auth';

export default function LoginScreen({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await login(userName, password);
      if (result.success) {
        onLoginSuccess();
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (e) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Login</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={userName}
        onChangeText={setUserName}
      />
      <View style={styles.passwordRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword((v) => !v)}>
          <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#888" />
        </TouchableOpacity>
      </View>
      {error ? <ThemedText style={styles.error}>{error}</ThemedText> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <ThemedText type="defaultSemiBold">{loading ? 'Logging in...' : 'Login'}</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
  },
  input: {
    width: 260,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 260,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: 260,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});
