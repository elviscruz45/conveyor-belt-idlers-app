import { View, Text, Platform, Picker } from "react-native";
import React, { useState } from "react";
import DatePicker from "@dietime/react-native-date-picker";
import { Input, Button } from "@rneui/themed";

export function Pickermode() {
  const [date, setDate] = useState();

  return (
    <View>
      <Text>{date ? date.toDateString() : "Select date..."}</Text>
      <DatePicker
        value={0}
        onChange={(value) => setDate(value)}
        format="yyyy-mm-dd"
        startYear={0}
      />
    </View>
  );
}
