import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

const tabButton = ({ name, activeTab, onHandleSearchType }) => {
	<TouchableOpacity
		style={styles.btn(name, activeTab)}
		onPress={onHandleSearchType}
	>
		<Text style={styles.btnText((name, activeTab))}>{name}</Text>
	</TouchableOpacity>;
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
	return (
		<View style={styles.container}>
			<Flatlist
				data={tabs}
				renderItem={({ item }) => (
					<TabButton
						name={item}
						activeTab={activeTab}
						onHandleSearchType={() => setActiveTab(item)}
					/>
				)}
				horizontal
				showsHorizonatalScrollIndicator={false}
				keyExtractor={(item) => item}
				contentContainerStyle={{ columnGap: SIZES.small }}
			/>
		</View>
	);
};

export default Tabs;
