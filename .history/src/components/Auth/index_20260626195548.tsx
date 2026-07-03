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
  }
}