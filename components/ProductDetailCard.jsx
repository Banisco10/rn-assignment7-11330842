import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useRoute} from '@react-navigation/native'

export default function ProductDetailCard({job_title, image, navigation}) {
  const {id} = useRoute().params
  const [productDetails, setproductDetails] = useState([]);

  const fetchProductDetails = async() => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    setproductDetails(data)
  }

  useEffect(() => {
    fetchProductDetails()
  }, [])
  
  console.log(productDetails)
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: productDetails.image}} />
      </View>

    <View style={styles.descriptionContainer}>
      <View style={styles.infoName}>
        <Text style={styles.title}>{productDetails.title}</Text>
        <TouchableOpacity>
        <Image style={styles.export} source={require("../assets/Export.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.description}>{productDetails.description}</Text>
        <Text style={styles.price}>${productDetails.price}</Text>  
      </View>

      <View style={styles.rating}>
        <Text style={styles.count}>{productDetails.count}</Text>
        <Text style={styles.rate}>{productDetails.rate}</Text>
      </View>

      <View style={styles.materialContainer} >
        <Text style={styles.material}>MATERIALS</Text>
        <Text style={styles.materialText}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
      </View>

      <View style={styles.directContainer}>
          <View style={styles.directions}>
            <Image style={styles.directImage} source={require("../assets/Do Not Bleach.png")} />
            <Text style={styles.directText}>Do not use bleach</Text>
          </View>
          <View style={styles.directions}>
            <Image style={styles.directImage} source={require("../assets/Do Not Tumble Dry.png")} />
            <Text style={styles.directText}>Do not tumble dry</Text>
          </View>
          <View style={styles.directions}>
            <Image style={styles.directImage} source={require("../assets/Do Not Wash.png")} />
            <Text style={styles.directText}>Dry clean with tetrachloroethylene</Text>
          </View>
          <View style={styles.directions}>
            <Image style={styles.directImage} source={require("../assets/Iron Low Temperature.png")} />
            <Text style={styles.directText}>Iron at a maximum of 100C/230F </Text>
          </View>
          <View style={styles.deliveryContainer}>
              <View style={styles.delivery}>
                <View style={styles.car}>
              <Image source={require("../assets/Door to Door Delivery.png")} />
              <Text>Free Flat Rate Shipping</Text>
                </View>
            <View style={styles.deliveryIcon}>
              <Image source={require("../assets/Up.png")} />
            </View>
              </View>
          <View style={styles.estimateContainer}>
            <Text>Estimated to be delivered on 09/11/2021 - 12/11/2021.</Text>
          </View>
          </View>
      </View>
    </View>
    </View>
  )
}
  

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    paddingBottom: 200,
  },
  imageContainer: {
    width: '90%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  descriptionContainer: {
    height: '40%',
    width: '100%',
    padding: 10,
    marginTop: -50,
  },
  infoName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 310,
    width: 280,
    
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    color: '#daa520'
  },
  materialContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  directions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    columnGap: 5,
  },
  deliveryContainer: {
    height: '100%',
    width: '100%',
    marginTop: 30,
  },
  delivery: {
    flexDirection: 'row',
    marginBottom: 10,
    columnGap: 5,
    justifyContent: 'space-between'
  },
  car: {
    flexDirection: 'row',
    columnGap: 10
  },
  estimateContainer: {
    width: '70%',
    marginLeft: 36,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  priceContainer: {
    marginTop: 10,
  },
  price: {
    color: '#daa520',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  material: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  materialText: {
    fontSize: 16,
  }

})