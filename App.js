import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    type: 'check',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay',
    time: '20/08/2020, 06:00',
    type: 'user',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    type: 'user',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    content: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    type: 'user',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    type: 'check',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    content: 'Bạn có 17 công việc bị quá hạn.',
    time: '20/08/2020, 06:00',
    type: 'check',
  },
];

export default function App() {
  const renderItem = ({ item }) => {
    const isGray = item.id === '1' || item.id === '2' || item.id === '4';

    return (
      <View style={[styles.item, isGray && styles.grayItem]}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>
            {item.type === 'check' ? '✓' : '👥'}
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.content}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
  },
  grayItem: {
    backgroundColor: '#e9f0f8',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2f6df6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 23,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  desc: {
    fontSize: 13,
    color: '#555',
  },
  time: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});
