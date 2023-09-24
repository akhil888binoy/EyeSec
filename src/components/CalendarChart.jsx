import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Heading } from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { HStack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
const CalendarChart = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);

  // Function to generate random values for Y-axis for each platform
  const generateRandomValues = () => {
    const platforms = ['platform 1', 'platform 2', 'platform 3', 'platform 4', 'platform 5', 'platform 6'];
    const randomData = platforms.map((platform) => {
      const platformColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
      const platformData = [];
      for (let i = 1; i <= 24; i++) {
        platformData.push({
          x: i,
          y: Math.floor(Math.random() * 61) + 10, // Random values between 30 and 100
        });
      }
      return {
        id: platform,
        color: platformColor,
        data: platformData,
      };
    });
    return randomData;
  };

  // Function to handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const newData = generateRandomValues();
    setData(newData);
  };

  return (
    <>
     
       
      
      <HStack>
      <Heading bgColor={"#DAF8F9"} width={"23rem"} ml={"10rem"} mt={"2rem"} borderRadius={"4px"} textAlign={"center"}>Crowd Day/Hour Chart </Heading>
     
     <Box width={"20rem"} height={"5rem"}>
     <Heading size={"lg"} ml={"4rem"}> Select a Date</Heading>
       <SingleDatepicker  onDateChange={handleDateSelect} value={selectedDate}  />
       </Box>

      </HStack>
    
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Time',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Crowd in Numbers',
        legendOffset: -40,
        legendPosition: 'middle',
        tickValues: [], // Adjust tick values to your preference
      }}
      
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
 </>
  );
};

export default CalendarChart;
