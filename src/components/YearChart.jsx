import { ResponsiveCalendar } from '@nivo/calendar'
import React from 'react'
import { mockDataTeam2 as data } from '../data/mockData2'
import { Heading } from '@chakra-ui/react'
const YearChart = () => {
  return (
    <>
          <Heading bgColor={"#DAF8F9"} size={"lg"} width={"20rem"} mt={"5rem"} borderRadius={"4px"} textAlign={"center"}> Crowd Year/Day chart </Heading>
     <ResponsiveCalendar
        data={data}
        from="2022-09-24"
        to="2023-09-24"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
    </>
  )
}

export default YearChart