import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase'
import db from '../config'
import MyHeader from '../Components/Header'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class WelcomeScreen extends Component() {
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            isModalVisible:false
        }
    }

    userLogin=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        alert('User logged in successfully')
        this.props.navigation.navigate('Home')
        
        .catch(function(error){})
    }

    userSignIn=(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        db.collection('users').add({
            email:this.state.email,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName
        })

        alert('User signed in successfully')
        this.props.navigation.navigate('Home')
        
        .catch(function(error){})
    }

    showModal(){
        return(
    <View>
    <Modal
    animationType={'fade'}
    style={styles.container}
    visible={this.state.isModalVisible}
    >
    <ScrollView>
      <Text style={styles.modalHeader}>Sign Up Screen</Text>
    <TextInput
        style={styles.modalInput}
        placeholder={"Enter Email id"}
        onChangeText={(text)=>{this.setState({
          email:text
        })}}/>

        <TextInput
        style={styles.modalInput}
        placeholder={"Enter Password"}
        secureTextEntry={true}
        onChangeText={(text)=>{this.setState({
          password:text
        })}}/>

        <TextInput
        style={styles.modalInput}
        placeholder={"Enter First Name"}
        onChangeText={(text)=>{this.setState({
          firstName:text
        })}}/>

        <TextInput
        style={styles.modalInput}
        placeholder={"Enter Last Name"}
        onChangeText={(text)=>{this.setState({
          lastName:text
        })}}/>

        <View style={styles.row}>
        <TouchableOpacity
        style={styles.modalSignInButton}
        onPress={()=>{this.userSignIn(this.state.email,this.state.password, this.state.firstName, this.state.lastName)}}
        >
          <Text style={styles.modalSignInButtonText}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
      style={styles.modalCancelButton}
      onPress={()=>{this.setState({isModalVisible:false})}}
      >
        <Text style={styles.modalCancelButtonText}>Cancel</Text>
      </TouchableOpacity>

        </View>
        
    </ScrollView>
    </Modal>
    </View>
    )
          
    }


  render(){
    return (
    <SafeAreaProvider>
        <View style={styles.container}>
        <ScrollView>
        {this.showModal()}

        <MyHeader title={'Online Vidya'}/>

    <TextInput
    style={styles.input}
    placeholder={'Enter Email'}
    keyboardType={'email-address'}
    onChangeText={text=>{this.setState({email:text})}}
    />

    <TextInput
    style={styles.input}
    placeholder={'Enter Password'}
    secureTextEntry={true}
    onChangeText={text=>{this.setState({password:text})}}
    />


    <TouchableOpacity
    style={styles.loginButton}
    onPress={()=>{this.userLogin(this.state.password,this.state.email)}}
    >
        <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>

    <Text style={styles.message}> Don't have an account ? </Text>

    <TouchableOpacity
    style={styles.signInButton}
    onPress={()=>{this.setState({isModalVisible:true})}}
    >
        <Text style={styles.signInButtonText}>Sign In</Text>
    </TouchableOpacity>
        </ScrollView>
        
      </View>
    </SafeAreaProvider>
    )
      
  }
  
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    row:{
        flexDirection:'row',
        flex:1
    },
    modalHeader:{
        color:'orange',
        fontSize:30,
        fontWeight:'bold'
    },
    modalInput:{
        borderRadius:20,
        borderWidth:1,
        marginTop:15,
        alignSelf:'center',
        width:150,
        height:50
    },
    input:{
        borderBottomWidth:1,
        alignSelf:'center',
        height:50,
        width:150,

    },
    modalSignInButton:{
        width:100,
        height:25,
        borderRadius:20
    },
    modalCancelButtonText:{
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:15,
        color:'orange'
    },
    modalSignInButtonText:{
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:15,
        color:'orange'
    },
    loginButton:{
        color:'red',
        width:200,
        height:50,
        borderRadius:35,
        marginTop:20
    },
    signInButton:{
        color:'red',
        width:200,
        height:50,
        borderRadius:35
    },
    loginButtonText:{
        alignSelf:'center',
        fontSize:15,
        color:'white'
    },
    signInButtonText:{
        alignSelf:'center',
        fontSize:15,
        color:'white'
    },
    message:{
        fontWeight:'bold',
        fontSize:20
    }


})

