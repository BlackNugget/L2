// Exercise 1 App.js
// import React from 'react';
// import { View, Text } from 'react-native';
//
// const Movie = ({ title, year }) => {
//   return (
//       <View>
//         <Text>{title} {year}</Text>
//       </View>
//   );
// };
//
// const AllMovies = () => {
//   return (
//       <View>
//         <Text></Text>
//         <Text></Text>
//         <Movie title = "Doctor Sleep" year = {2019} icon_name = "paw"/>
//       </View>
//   )
// }
// export default AllMovies;

// Exercise 2
// import React from 'react';
// import { View, Text } from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome6";
//
//
// const Movie = ({ title, year, icon_name }) => {
//   return (
//       <View>
//         <Text>{title} {year}</Text>
//         <Icon name = {icon_name} size={100} color = "#B23B23" />
//       </View>
//   );
// };
//
// const AllMovies = () => {
//   return (
//       <View>
//         <Text></Text>
//         <Text></Text>
//         <Movie title = "Doctor Sleep" year = {2019} icon_name = "paw"/>
//       </View>
//   )
// }
// export default AllMovies;

// Exercise 3-4
// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome6";
//
//
// const Movie = ({ title, year, icon_name, poster }) => {
//     return (
//         <View>
//             < Image source={poster} style = {{width:400, height:500}}/>
//             <Text>{title} {year}</Text>
//             <Icon name = {icon_name} size={100} color = "#B23B23" />
//         </View>
//     );
// };
//
// const AllMovies = () => {
//     return (
//         <View>
//             <Text></Text>
//             <Text></Text>
//             <Movie title = "Doctor Sleep" year = {2019} icon_name = "paw" poster = {require('./img/doctor-sleep.jpg')}/>
//         </View>
//     )
// }
// export default AllMovies;

// Exercise 5
// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import Movie from './components/Movie';
//
// const AllMovies = () => {
//     return (
//         <View>
//             <Text></Text>
//             <Text></Text>
//             <Movie title = "Doctor Sleep" year = {2019} icon_name = "paw"
//                    poster = {require('./img/doctor-sleep.jpg')}/>
//
//             <Movie title = "Midway" year = {2020} icon_name = "person-rifle"
//                    poster = {require('./img/midway.jpg')}/>
//         </View>
//     )
// }
// export default AllMovies;

// Exercise 6
import React from 'react';
import { View, Text, Image } from 'react-native';
import Movie from './components/Movie';
import { ScrollView } from 'react-native';

const AllMovies = () => {
    return (
        <View>
            <ScrollView>
            <Text></Text>
            <Text></Text>
            <Movie title = "Doctor Sleep" year = {2019} icon_name = "paw"
                   poster = {require('./img/doctor-sleep.jpg')}/>

            <Movie title = "Midway" year = {2020} icon_name = "person-rifle"
                   poster = {require('./img/midway.jpg')}/>
            </ScrollView>
        </View>
    )
}
export default AllMovies;

// Exercise 7
