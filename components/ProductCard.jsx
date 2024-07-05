import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductCard = ( { item, selectedPopularJobs, removeFromCart }) => {
  return (
    <View style={styles.container(selectedPopularJobs, item)}>
      <View style={styles.infoContainer}>
      <Image style={styles.image} source={item.image}/>

      <View style={styles.descriptionsContainer}>
        <View style={styles.amount}>
        <Text style={styles.jobName(selectedPopularJobs, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.companyName} numberOfLines={1}>{item.companyName}</Text>
        <Text style={styles.prize} numberOfLines={1}>{item.prize}</Text>
        </View>

      <TouchableOpacity onPress={() => removeFromCart(item)}>
        <Image style={styles.remove} source={require("../assets/remove.png")}/>
      </TouchableOpacity>
         
      </View>
      </View>
    </View>
  )
}

export default ProductCard


const styles = StyleSheet.create({
    container: (selectedPopularJobs, item) => ({
      backgroundColor: selectedPopularJobs === item.popularjobs ? '#FFFFFF' : '#FFFFFF',
      marginTop: 20,
      marginLeft: 20,
      width: '90%',
      height: 120,
      alignItems: 'left',
      justifyContent: 'center',
      
    }),
    amount: {
      width: '100%',
      flexDirection: 'column',
      paddingTop: 20,
    },
    infoContainer: {
      flexDirection: 'row',
      columnGap: 12,
    },
    details: {
      flexDirection: 'column',
    },
    jobName: (selectedPopularJobs, item) => ({
      fontSize: 14,
      fontWeight: selectedPopularJobs === item.popularjobs ? 'bold' : 'normal',
      color: selectedPopularJobs === item.popularjobs? '#0D0D26' : '#0D0D26',
    }),
    companyName: {
      fontSize: 14,
      color: '#0D0D26',
    },
    prize: {
      fontSize: 16,
      color: '#daa520',
    },
    image: {
      height: 120,
      width: 90,
    },
    descriptionsContainer: {
      flex: 1,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    remove: {
      position: 'absolute',
      marginTop: 70,
      right: 30,
    }
  });
  
  