import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { Strings } from '../../constants/Strings';
import Ionicons from '@expo/vector-icons/Ionicons';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: Strings.news,
          tabBarIcon: ({ color }) => <TabBarIcon name="flash-outline" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="smallGroups"
        options={{
          title: Strings.smallGroups,
          tabBarIcon: ({ color }) => <TabBarIcon name="cafe-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: Strings.calendar,
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: Strings.more,
          tabBarIcon: ({ color }) => <TabBarIcon name="keypad-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
