
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal,ScrollView,TouchableOpacity,Image} from 'react-native';

export default class CPicker extends Component {
    render() {

        const{ showPicker,arr,handleClose,handleSubmit,title} = this.props
        return (

            <Modal
                visible={showPicker}
                transparent={true}
                animationType="slide"
                onRequestClose={() => dws=false}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)',flexDirection:'row' }}>

                    <View style={{alignSelf:'flex-end',width:'100%',height:300, backgroundColor: 'white', borderRadius: 10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text allowFontScaling={false} style={{fontSize:17,padding:16}}>{title}</Text>

                     <TouchableOpacity style={{height:53,width:100,alignItems:'center',justifyContent:'center'}} onPress={()=>(handleClose())}>
                        <Image style={{height:17,width:17,resizeMode:'contain',marginLeft:35}} source={require('.cancelSimple.png')}></Image>
                    </TouchableOpacity> 
                  
                    </View>
                    <View style={{backgroundColor:'gray',height:1,width:'100%'}}></View>
                  
                    <ScrollView style={{width:'100%'}}>
                    {
                        arr.map((item,index)=>
                        <TouchableOpacity style={{justifyContent:'center',width:'100%'}} onPress={()=>(handleSubmit(item,index),handleClose)} key={index}>
                        <Text allowFontScaling={false} style={{color:'rgba(128,128,128,1.0)',fontSize:14,paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>{item}</Text>
                       </TouchableOpacity>
                       )
                    }
                    </ScrollView>
                    <View style={{height:30}}></View>
                  </View>
                    </View>
            </Modal>
        );
    }
}