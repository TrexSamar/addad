import * as React from "react"
import {Text, View} from "react-native"

export default class CreatePost extends React.Component{ 

    render() {
         return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}> 
                        <View style={styles.AuthorImageContainerContainer}>
                            <Image
                                source={require("../assets/profile_img.pnjg")}
                                style={styles.profileImage}
                            ></Image>
                        </View>
                        <View style={styles.authorNameContainerContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                        <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                        <View style={styles.captionContainer}>
                            <Text style={styles.captionText}>
                                {this.props.post.caption}
                            </Text>
                        </View>
                        <View styles={styles.actionContainer}>
                        <View styles={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color = {"white"} />
                            <Text style = {styles.likeText}>12k</Text>
                            </View>
                            </View>
                            </View>
                            </View>
                            


            )

}

}