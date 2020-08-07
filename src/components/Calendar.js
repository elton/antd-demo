import React, { useState } from "react";
import { DatePicker, message, Alert } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");

const Calendar = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `您选择的日期是: ${value ? value.format("YYYY年MM月DD日") : "未选择"}`
    );
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: "10px auto" }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        <Alert
          message="当前日期"
          description={date ? date.format("YYYY年MM月DD日") : "未选择"}
        />
      </div>
    </div>
  );
};

export default Calendar;
