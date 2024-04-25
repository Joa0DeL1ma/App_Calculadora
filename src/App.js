import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Button from './components/Button'
import styles from './components/styles';
import Display from './components/Display';

export default App => {

   state= {
      displayValue:'0'
   }

   return (
      <SafeAreaView style={styles.container}>
         <Display value={this.state.displayValue}/>
         <View style= {styles.buttons}>
            <Button label='AC'/>
            <Button label='/'/>
            <Button label='7'/>
            <Button label='8'/>
            <Button label='9'/>
            <Button label='*'/>
            <Button label='4'/>
            <Button label='5'/>
            <Button label='6'/>
            <Button label='-'/>
            <Button label='1'/>
            <Button label='2'/>
            <Button label='3'/>
            <Button label='+'/>
            <Button label='0'/>
            <Button label='.'/>
            <Button label='='/>
         </View>
      </SafeAreaView>
   )
}

