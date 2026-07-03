import React, { useState } from 'react'

import { View } from 'react-native'

import { Button, Input } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

import { supabase } from '../../services/supabase'

export default function Auth() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loadin, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password.
    })

    if (error) {
      alert(error.message)
    }
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      alert(error.message)
    }

    if (!session) {
      alert('Please check your inbox for email verification!')
    }
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticalSpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon=({ type: 'font-awesome', name: 'envelope' })
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder='email@address.com'
          autoCapitalize={'none'}
        />
      </View>

      <View style={styles.verticalSpaced}>
        <Input
          label="Password"
          leftIcon=({ type: 'font-awesome', name: 'lock' })
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder='Informe a senha de acesso'
          autoCapitalize={'none'}
        />

        <View style={[styles.verticalSpaced, styles.mt20]}>
          <Button title="Sign in" disabled={loading} onPress={}
      </View>
    </View>
  )
}