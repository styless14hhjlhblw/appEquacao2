import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [coefA, setCoefA] = useState('');
  const [coefB, setCoefB] = useState('');
  const [coefC, setCoefC] = useState('');
  const [raiz1, setRaiz1] = useState(null);
  const [raiz2, setRaiz2] = useState(null);

  const resolverEquacao = () => {
    const a = parseFloat(coefA);
    const b = parseFloat(coefB);
    const c = parseFloat(coefC);
    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      setRaiz1('Sem raízes reais');
      setRaiz2('Sem raízes reais');
      return;
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    setRaiz1(x1.toFixed(2));
    setRaiz2(x2.toFixed(2));
  };

  const resetarCampos = () => {
    setCoefA('');
    setCoefB('');
    setCoefC('');
    setRaiz1(null);
    setRaiz2(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/icon.avif')} style={styles.image} />
        <Text style={styles.headerText}>Calculadora de Bhaskara</Text>
      </View>

      <Text style={styles.instrucao}>Informe os coeficientes da equação:</Text>
      
      <View style={styles.inputRow}>
        <TextInput style={styles.input} keyboardType="numeric" value={coefA} onChangeText={setCoefA} placeholder="0" />
        <Text style={styles.esquacaoContinuacao}>x² +</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={coefB} onChangeText={setCoefB} placeholder="0" />
        <Text style={styles.esquacaoContinuacao}>x +</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={coefC} onChangeText={setCoefC} placeholder="0" />
        <Text style={styles.esquacaoContinuacao}>= 0</Text>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.resultadoText}>Raiz 1: <Text style={styles.bold}>{raiz1 ?? 0}</Text></Text>
        <Text style={styles.resultadoText}>Raiz 2: <Text style={styles.bold}>{raiz2 ?? 0}</Text></Text>

        <Text style={styles.formulaTitle}>Expressão de Bhaskara</Text>
        <Text style={styles.formula}>x = (-b ± √(b² - 4ac)) / (2a)</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.calcButton} onPress={resolverEquacao}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton} onPress={resetarCampos}>
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>© 2024 - Criado por Rafael</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#ec8d32',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  instrucao: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    padding: 50,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 50,
    height: 40,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
  },
  esquacaoContinuacao: {
    fontSize: 18,
  },
  resultado: {
    backgroundColor: '#f2c59c',
    width: '100%',
    borderRadius: 10,
    padding: 90,
    marginBottom: 20,
    alignItems: 'center',
    margin: 170,
  },
  resultadoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  formulaTitle: {
    color: '#ec8d32',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  formula: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  calcButton: {
    backgroundColor: '#3366FF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  clearButton: {
    backgroundColor: '#ec8d32',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    marginTop: 'auto',
    color: '#888',
  },
});
