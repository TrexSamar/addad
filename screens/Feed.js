import { StatusBar } from "expo-status-bar"
import * as React from "react"
import {Platform, Text, View} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"

export default class Feed extends React.Component{
    render(){ 
        return(
          
            <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.appTitile}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}
                            ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitileText}>Spectagram</Text>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={posts}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
            ) } }

        const styles = StyleSheet.create({
            container:{

                flex:1,
                backgroundColor: "black"

            },
            droidSafeArea:{

                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)

            },
            appIcon:{

                flex:0.2,
                justifyContent: "center",
                alignItems: "center"

            },
            appTitile:{

                flex: 0.7,
                flexDirection: "row"

            },
            iconImage:{

                width: "100%",
                height: "100%",
                resizeMode: "contain"

            },
            appTitleTextContainer:{

                flex: 0.8,
                justifyContent: "center"

            },
            appTitileText:{

                color: "white",
                fontSize: RFValue(28)

            },
            cardContainer:{

                flex:0.85

            }




        })

    
