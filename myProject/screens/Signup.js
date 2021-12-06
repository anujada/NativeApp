import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Formik } from "formik";
import Button from '../components/Button';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

/*
import {
    StyledContainer,
    header,
    pageTitle,
    StyledFormArea,
    StyledInput,
    StyledButton,
    StyledInputLabel,
    ButtonText,
    Colors
} from '../components/style'*/

//const {grey}= Colors;
const login = (navigation) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [checked, setChecked] = useState(false);

    return(
        <View style={styles.styledContainer}>
            <StatusBar> style = {{color: '#9CA3AF'}} </StatusBar>
            <View style={styles.innerContainer}>
                <Text style={styles.pageTitle}>Create your account</Text>
                <Button style={styles.myButton} title='CONTINUE WITH FACEBOOK' backgroundColor='#7583CA' color='#F6F1FB' width={362} height={63} google={true} iconName='facebook' navigateTo='Overview1'/>
                <View style={styles.line}></View>
                <Button style={styles.myButton} title='CONTINUE WITH GOOGLE' backgroundColor='#8E97FD' color='#F6F1FB' width={362} height={63} google={true} iconName='google' navigateTo='Overview1'/>
                <Text style={styles.subTitle}>OR LOGIN WITH EMAIL</Text>
                <Formik
                    initialValues ={{username: '', password: ''}}
                    onSubmit={(values) =>{
                        console.log(values);
                    }}>
                        {({handleChange,handleBlur, handleSubmit, values})=> (<View style={styles.styledFormArea}>
                            <MyTextInput
                                label= "Username"
                                icon="mail"
                                placeholder= "userAndy001122"
                                placeholderTextColor='#9CA3AF'
                                onChangeText= {handleChange('username')}
                                onBlur= {handleBlur('username')}
                                value={values.username}/>

                            <MyTextInput
                                label= "Email"
                                icon="mail"
                                placeholder= "userAndy001122"
                                placeholderTextColor='#9CA3AF'
                                onChangeText= {handleChange('email')}
                                onBlur= {handleBlur('email')}
                                value={values.username}/>

                            <MyTextInput
                                label= "Password"
                                icon="lock"
                                placeholder= "* * * * * "
                                placeholderTextColor='black'
                                onChangeText= {handleChange('password')}
                                onBlur= {handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}/>

                            <View style={styles.extraView}>
                                <Text style={styles.textLinkContent}>I agree to the privacy policy</Text>
                                <Checkbox
                                    status = {checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);}}
                                />
                            </View>
                            <Button style={styles.myButton} title='GET STARTED' backgroundColor='#8E97FD' color='#F6F1FB' width={362} height={63} navigateTo='Overview1'/>
                            </View>)}   
                </Formik>
            </View>
        </View>
    );

};


const MyTextInput = ({label ,icon, isPassword, hidePassword, setHidePassword, props }) => {
    return (
        <View>
            <View style={styles.leftIcon}>
                <Octicons name={icon} size={30} color='#6D28D9'/>
            </View>
            <Text style={styles.styledInputLabel}> {label}</Text>
            <TextInput style={styles.styledTextInput}>{props}</TextInput>
            {isPassword && (
                <TouchableOpacity style={styles.rightIcon} onPress={() => setHidePassword(!hidePassword)} >
                    <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color='#9CA3AF'/>
                </TouchableOpacity>
            )}
        </View>
    )
};


export default login;

const styles = StyleSheet.create({
    styledContainer: {
        flex: 1,
        padding: 25,    
        paddingLeft: 10,
        backgroundColor: '#ffffff',
    },

    innerContainer: {
        flex: 1,
        width: 375,
        alignItems: 'center',
    },

    pageTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3F414E',
        padding: 10,
        paddingRight: 25,
    },

    subTitle: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#A1A4B2',
        padding: 10,
        paddingLeft: 15,
        paddingBottom: 35,
        paddingTop: 30
    },

    forgotPassword: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#A1A4B2',
        padding: 10,
        paddingLeft: 15,
    },

    styledFormArea: {
        width: 360,
    },

    styledTextInput: {
        backgroundColor: '#E5E7EB',
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 10,
        fontSize: 16,
        height: 60,
        //width: 330,
        marginVertical: 3,
        marginBottom: 10,
        color: '#1F2937',
    },

    styledInputLabel: {
        color: '#1F2937',
        fontSize: 13,
        textAlign: 'left',
    },

    leftIcon: {
        left: 15,
        top: 38,
        position: 'absolute',
        zIndex: 1,
    },

    rightIcon: {
        right: 15,
        top: 38,
        position: 'absolute',
        zIndex: 1,
    },

    styledButton: {
        padding: 15,
        backgroundColor: '#8E97FD',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        height: 60,

    },

    styledButtonGoogle: {
        padding: 15,
        backgroundColor: '#7583CA',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        height: 60,

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },

    buttonTextGoogle: {
        color: '#ffffff',
        fontSize: 16,
        padding: 25,
    },

    //Text
    msgBox: {
        textAlign: 'center',
        fontSize: 13,
        padding: 25,
    },

    //View
    line: {
        height: 1,
        width: 340,
        backgroundColor: '#9CA3AF',
        marginVertical: 10,
    },

    //touchable opacity
    textLink: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    //text
    textContent: {
        color: 'black',
        fontSize: 15,

    },

    extraView: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },

    extraText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: '#A1A4B2',
        fontSize: 15,
        paddingRight: 5,
    },

    //touchable opacity
    textLink: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    //text

    textLinkContent: {
        color: '#0033CC',
        fontSize: 15,
    }


})