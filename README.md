# CPicker
This repository is for react native custom option picker, It will work in both iOS and Android.



Usage Description - 

Clone or direct download CPicker file and Cancel Image from master repo.
Drag and drop into your react native project.

import React, { Component } from 'react';
import { View,Alert,TouchableOpacity,Text} from 'react-native';
import CPicker from '.CPicker'

export default class YourClass extends React.Component  { 

constructor(props) {
super(props)

this.state={
showPicker:false
pickerArr:["abc","123","xyz"]
}
}

render() {

return (

<View style={{justifyContent:'center',alignItems:'center'}}>

<TouchableOpacity onPress={()=>this.setState({showPicker:true})>
<Text>Click Me!</Text>
</TouchableOpacity>

<CPicker
showPicker={this.state.showPicker} 
arr = {this.state.pickerArr}
handleClose={()=>this.setState({showPicker:false})}
title={"Select Options"}

handleSubmit={this.handleSubmit}>

</CPicker>

</View>

);
}



// CPicker Action Button Props
handleSubmit = (val,index)=>{

Alert.alert('This is your selected value: '+val+'This is your selected index: '+ index)

this.setState({showPicker:false})  

}


/*####################  CPicker Props Descriptions ####################

showPicker   -  For show/hide picker
arr  -   Group of option data (Accept In String format like ["abc","xyz","123"])
handleClose  - For close CPicker
handleSubmit  -  Handle selection Props pass function like above and get the selected value with selected index.
title   - For CPicker Title.

#################### ####################*/


Author - 

Chandan Mishra
