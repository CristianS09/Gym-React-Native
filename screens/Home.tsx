import { View, Text, SectionList, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import sections from "../data/sections";

const Home = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={sections}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.sectionContainer}>
                        <Image style={styles.image} source={{
                            uri: item.image
                        }} />
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionText}>{title}</Text>
                )}
            />
        </View>
    )
}

export default Home;