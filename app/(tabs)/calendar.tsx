import { StyleSheet } from "react-native"
import { Agenda } from "react-native-calendars"

import { Text, View } from "../../components/Themed"
import "../../config/locale"

export default function TabCalendarScreen() {
  return (
    <View style={styles.container}>
      <Agenda
        items={{
          "2024-05-07": [
            {
              name: "Teologia",
              height: 80,
              day: "2024-05-07",
              time: "20:00 - 21:00",
            },
          ] as any,
          "2024-05-08": [
            {
              name: "Oração",
              height: 80,
              day: "2024-05-08",
              time: "20:00 - 21:00",
            },
          ] as any,
          "2024-05-12": [
            {
              name: "Culto",
              height: 80,
              day: "2024-05-12",
              time: "19:00 - 21:00",
            },
          ] as any,
        }}
        markedDates={{
          "2024-05-07": { marked: true },
          "2024-05-08": { marked: true },
          "2024-05-12": { marked: true },
        }}
        renderEmptyData={() => (
          <View style={styles.emptyData}>
            <Text style={styles.emptyText}>Nenhum evento</Text>
          </View>
        )}
        theme={{
          todayBackgroundColor: "black",
          todayTextColor: "white",
        }}
        renderItem={(item: any, firstItemInDay) => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.eventTime}>{item.time}</Text>
                <Text style={styles.eventName}>{item.name}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyData: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "gray",
  },
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventTime: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  eventName: {
    fontSize: 18,
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 14,
    color: "gray",
  },
})
