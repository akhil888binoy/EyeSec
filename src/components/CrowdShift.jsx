import React from 'react'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
const CrowdShift = () => {

  
        const [data, setData] = useState([]);
      
        // Function to generate random data
        const generateRandomData = () => {
            const randomData = [];
            for (let i = 0; i < 3; i++) {
              const groupData = { id: `group ${String.fromCharCode(65 + i)}`, data: [] };
              for (let j = 0; j < 200; j++) { // Adjust the number of dots as needed
                groupData.data.push({
                  x: Math.floor(Math.random() * 8) + 1, // Random x value between 1 and 8
                  y: Math.floor(Math.random() * 120) + 1, // Random y value between 1 and 120
                });
              }
              randomData.push(groupData);
            }
            return randomData;
        };
      
        useEffect(() => {
          // Initially, set the data
          setData(generateRandomData());
      
          // Set up an interval to change data every 1 second
          const intervalId = setInterval(() => {
            setData(generateRandomData());
          }, 1000);
      
          // Clean up the interval when the component unmounts
          return () => clearInterval(intervalId);
        }, []); // Empty dependency array ensures this effect runs only once on component mount
      

  return (
    <>
              <Heading bgColor={"#DAF8F9"} size={"lg"} ml={"2rem"} width={"20rem"} mt={"2rem"} borderRadius={"4px"} textAlign={"center"}> Crowd Shift in 1 Minute Chart </Heading>

    <ResponsiveScatterPlot
        data={data}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat=">-.2f"
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat=">-.2f"
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Platform Number',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Crowd in Numbers',
            legendPosition: 'middle',
            legendOffset: -60
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </>
  )
}

export default CrowdShift