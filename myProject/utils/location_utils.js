
import { ref, set } from "firebase/database";
import { realtime_database } from '../firebase';


export async function writeUserLocationToDb(userId, long, lat) {
  set(ref(realtime_database, 'users/' + userId), {
    longitude: long,
    latitude: lat
  });
}

export async function getNearUsersFromDb(userId) {



}
