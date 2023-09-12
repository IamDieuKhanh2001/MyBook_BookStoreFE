"use client"
import React, { useState } from 'react'

const TestPage = () => {
    // Sử dụng state để theo dõi giá trị radio button đã chọn
    const [selectedValue, setSelectedValue] = useState('option1');

    // Hàm xử lý khi radio button thay đổi
    const handleRadioChange = (event: any) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div>
          <h2>Radio Box Example</h2>
          <div>
            <input
              type="radio"
              id="option1"
              className="form-check-input"
              name="radioGroup"
              value="option1"
              defaultChecked={selectedValue === 'option1'}
              onChange={handleRadioChange}
            />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div>
            <input
              type="radio"
              id="option2"
              className="form-check-input"
              name="radioGroup"
              value="option2"
              defaultChecked={selectedValue === 'option2'}
              onChange={handleRadioChange}
            />
            <label htmlFor="option2">Option 2</label>
          </div>
          <div>
            <input
              type="radio"
              id="option3"
              className="form-check-input"
              name="radioGroup"
              value="option3"
              defaultChecked={selectedValue === 'option3'}
              onChange={handleRadioChange}
            />
            <label htmlFor="option3">Option 3</label>
          </div>
          <p>Selected Option: {selectedValue}</p>
        </div>
      );
}

export default TestPage
