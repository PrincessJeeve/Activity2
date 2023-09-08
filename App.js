import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const Recommended = () => {
      return (
    <div>    
      <View>
      <Image source= {{ uri: 'https://i0.wp.com/www.washingtondispatch.com/wp-content/uploads/2023/05/Gossip-Girl.jpg?resize=696%2C392&ssl=1' }}
            style= {styles.Recommended_style}
      />
      <View style = {styles.watchView}>
      <Text style = {styles.watchText}>Watch now</Text>
      </View>
      </View >
    </div>  
  ); 
}

const CW = () => {
  return (
  <div>
    <View  style={styles.box}>
    <Image
     source={{
      uri: 'https://www.themoviedb.org/t/p/original/oNOXcu8SdfSAHfHGnpb7NvcFLww.jpg'}} 
      style={styles.cWatchdp} 
      />
    <Image
     source={{
      uri: 'https://img.cineb.rs/xxrz/250x400/188/d4/6e/d46e0478e7349f8b2fecc134d8940286/d46e0478e7349f8b2fecc134d8940286.jpg'}} 
      style={styles.cWatchdp} 
      />  
    <Image
     source={{
      uri: 'https://www.themoviedb.org/t/p/original/iwKVo3HlsyVNXCzFEkd0xHz3kGi.jpg'}} 
      style={styles.cWatchdp} 
      />   
    </View>
    
  </div>    
    )
};

const TN = () => {
  return (
  <div>
    <View  style={styles.box}>
    <Image
     source={{
      uri: 'https://img.cineb.rs/xxrz/250x400/188/b2/a2/b2a2078a74e2e3b53693554ce3fbdd64/b2a2078a74e2e3b53693554ce3fbdd64.jpg'}} 
      style={styles.cWatchdp} 
      />
    <Image
     source={{
      uri: 'https://img.cineb.rs/xxrz/250x400/188/b5/6a/b56a5aee9715743bb34b728e52b6bea0/b56a5aee9715743bb34b728e52b6bea0.jpg'}} 
      style={styles.cWatchdp} 
      />  
    <Image
     source={{
      uri: 'https://img.cineb.rs/xxrz/250x400/188/35/c5/35c5153ece8c43f7d12075a23429648c/35c5153ece8c43f7d12075a23429648c.jpg'}} 
      style={styles.cWatchdp} 
      />   
    </View>
    
  </div>    
    )
};

const Logo = () => {
  return (
    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/768px-Netflix-new-icon.png' }} 
            style ={styles.logoStyle}  
    />
  )
}

const Profile = () => {
  return (
    <Image source={{ uri: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg' }} 
            style ={styles.profileStyle}  
    />
  )
}
const BtnBelow = () => {
  return (
    <div>
      <View  style={styles.box}>
      <Image
       source={{
        uri: 'https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-home-icon-png-image_986968.jpg'}} 
        style={styles.logoStyle1} 
        />
      <Image
       source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDrLfdqvoX24FLss9ZSdDtrObK97R9YELWATkkoZui4VPZjCUE_dd56f-4o8_Z0_zE9U&usqp=CAU'}} 
        style={styles.logoStyle1} 
        />  
      <Image
       source={{
        uri: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-find-icon-png-image_854997.jpg'}} 
        style={styles.logoStyle1} 
        />   
      <Image
       source={{
        uri: 'https://i.pinimg.com/474x/f4/0f/3f/f40f3fb63e1e5ce0a02179c78355beaa.jpg'}} 
        style={styles.logoStyle1} 
        />     
      </View>
      
    </div>   
  )
}
const Btn = () => {
  const btn1 = 'Home'
  const btn2 = 'Movies'
  const btn3 = 'Series'
  const btn4 = 'Kids'
    return(
      <Text style={styles.topFont}>{btn1}   {btn2}   {btn3}   {btn4}</Text>
    )
};




export default function App() {
  return (
    <View style={styles.container}> 
     <View style={styles.box}>
        <Logo/>
        <View>
          <Btn/>
        </View>
        <Profile/>
      </View> 
    <View>
       
      <Recommended/>
      <Image source= {{ uri: 'https://cdn-icons-png.flaticon.com/128/27/27223.png' }}
            style= {styles.logoStyle2}
      />
      </View>  
      
      
      <Text style = {styles.topFont}>Continue watching</Text>
      
      <View style={styles.box}> 
      <CW/>
      </View>
      
      <Text style = {styles.topFont1}>Trending Now</Text>
      <View style={styles.box1}> 
      <TN/>
      </View>
      
      <View style={styles.box2}>
        <BtnBelow/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    marginLeft: 50,
    backgroundColor: 'black',
    maxHeight: 732,
    maxWidth: 412,
  },
  watchView: {
    backgroundColor:'white',
    position: 'absolute',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 150,
    marginLeft: 40,
    height: 30,
  },   
  watchText: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    color: 'black',
    marginLeft: 30,
    marginRight: 5
  },
  Recommended_style: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    width: 350, 
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white'
  },  
  logoStyle: {
    marginLeft: 5,
    width: 50,
    height: 50,
    marginTop: 5
  },
  logoStyle1: {
    marginLeft: 50,
    margin: 10,
    width: 30,
    height: 30,
    textAlign: 'center'
  },
  logoStyle2: {
    marginLeft: 45,
    marginTop: 155,
    width: 20,
    height: 20,
    position: 'absolute'
  },
  profileStyle: {
    marginLeft: 90,
    width: 40,
    height: 40,
    marginTop: 9
  },
  topFont: {
    color:'white',
    fontSize: '15px',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 10  
  },
  topFont1: {
    color:'white',
    fontSize: '15px',
    textAlign: 'left',
    marginTop: 155,
    marginLeft: 10  
  },
  box: {
    backgroundColor: 'black',
    width: 410, 
    height: 50,
    flexDirection: 'row',
    marginBottom: 10,
    
  },
  box1: {
    backgroundColor: 'black',
    width: 410, 
    height: 50,
    flexDirection: 'row'
  },
  box2: {
    backgroundColor: 'blue',
    width: 410, 
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 100
  },
  cWatchdp: {
    width: 120, 
    height: 200,
    flexDirection: 'row',
    marginBottom: 10,
    margin: 8,
    borderRadius: 10,
    borderWidth: 3,
  },  
});
