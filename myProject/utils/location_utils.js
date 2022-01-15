
import { ref, set } from "firebase/database";
import { realtime_database } from '../firebase';

async function getCurrentLocation(){
     try {
                let { status } = await Location.requestPermissionsAsync()

                if (status !== 'granted') {
                    console.warn('Access to location is needed to run the app')
                    return
                }
                const location = await Location.getCurrentPositionAsync()

                const { latitude, longitude } = location.coords

            return longitude, latitude

            } catch (error) {
                console.warn(error)
            }
}

async function writeUserLocationToDb(userId, long, lat) {
  set(ref(realtime_database, 'users/' + userId), {
    longitude: long,
    latitude: lat
  });
}

export async function updateUserLocation(){
                //userUid = getCurrentUser()
                userUid= "BHYBQx6F4IaAGvmZFZUoh9C0oGg2"
                if(userUid){
                   longitude, latitude= getCurrentLocation()
                   writeUserLocationToDb(userUid, longitude, latitude)
                }
                else {
                console.warn("UserUid undefined.")
                }
}


export async function getNearUsersFromDb(userId) {
    //            const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`
    //
    //            const response = await fetch(weatherUrl)
    //
    //            const result = await response.json()



    //            if (response.ok) {
    //                setNearUserList(result)
    //            } else {
    //                setErrorMessage(result.message)
    //            }


}
