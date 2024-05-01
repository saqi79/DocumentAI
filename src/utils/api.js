// src/utils/api.js

const BASE_URL = process.env.BASE_URL;

export const fetchData = async (endpoint) => {
  try {
    // const response = await fetch(`${BASE_URL}/${endpoint}`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch data');
    // }
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

export const sendData = async (endpoint, data) => {
  try {
    // const response = await fetch(`${BASE_URL}/${endpoint}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    // if (!response.ok) {
    //   throw new Error('Failed to send data');
    // }
    // const responseData = await response.json();
    // return responseData;
  } catch (error) {
    console.error("Error sending data:", error.message);
    return null;
  }
};
