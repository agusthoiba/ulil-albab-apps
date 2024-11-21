
import React, {useState, Component} from 'react';
import {Alert, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import Styles from '../Style';

import { useAppSelector, useAppDispatch } from '../hooks'

import { decrement, increment } from '../reducer/counter';

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // omit rendering logic

  return (
    <View style={Styles.container}>
      <View style={Styles.dashboardContainer}>
        <View style={Styles.wrapperNoBack}>

          <View style={Styles.item}>              
              <TouchableOpacity onPress={() => 
                dispatch(increment())
                }>
                <Text style={Styles.textSubTitle}>
                  Increment
                </Text>
                
              </TouchableOpacity>
              
            </View>

            <View style={Styles.item}>
            <TouchableOpacity onPress={() =>  dispatch(decrement())}>
                <Text style={Styles.textSubTitle}>
                  Decrement
                </Text>
                
              </TouchableOpacity>
              
            </View>
            <View style={Styles.item}>
              <Text style={Styles.textTitle}> {count}</Text>
            </View>
        </View>
      </View>
    </View>
  )
}
